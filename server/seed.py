#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
import os

# Remote library imports
from faker import Faker
from dotenv import load_dotenv

# Local imports
from app import app
from models import db, User, Post, Message, Friend

load_dotenv()
user_password = os.environ.get("USER_PW")

def seed_data():
    users = []
    for _ in range(5):
        user = User(
            username=fake.user_name(),
            email=fake.email(),
            profile_picture=fake.image_url(),
            bio=fake.text(),
        )
        user.password = user_password
        users.append(user)
        db.session.add(user)

    for _ in range(10):
        post = Post(
            type=fake.random_element(elements=('text', 'image')),
            content=fake.text(),
            title=fake.catch_phrase(),
            comments=fake.text(),
            user=fake.random_element(elements=users)
        )
        db.session.add(post)
        message = Message(
            subject=fake.catch_phrase(),
            content=fake.text(),
            attachments=fake.image_url()
        )
        db.session.add(message)
    db.session.commit()

    for user in users:
        print('hello')
        friend = fake.random_element(elements=users)
        while friend == user:
            friend = fake.random_element(elements=users)
        friend1 = Friend(user_id=user.id, friend_id=friend.id)
        db.session.add(friend1)
    db.session.commit()
    
if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        User.query.delete()
        Post.query.delete()
        Message.query.delete()
        Friend.query.delete()
        seed_data()

        print('Data seeded successfully.')
