#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, jsonify, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import User, Post, Message, Friend
# Views go here!

class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(jsonify(users), 200)

class Posts(Resource):
    def get(self):
        posts = [post.to_dict() for post in Post.query.all()]
        return make_response(jsonify(posts), 200)

class Messages(Resource):
    def get(self):
        messages = [message.to_dict() for message in Message.query.all()]
        return make_response(jsonify(messages), 200)

class Friends(Resource):
    def get(self):
        friends = [friend.to_dict() for friend in Friend.query.all()]
        return make_response(jsonify(friends), 200)

class FriendsByUsername(Resource):
    def get(self, username):
        pass

class Login(Resource):
    def get(self):
        pass

class CheckSession(Resource):
    def get(self):
        pass

class Logout(Resource):
    def get(self):
        pass

api.add_resource(Users, '/users')
api.add_resource(Posts, '/posts')
api.add_resource(Messages, '/messages')
api.add_resource(Friends, '/friends')
api.add_resource(FriendsByUsername, '/friends/<str:username>')
api.add_resource(Login, '/login')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Logout, '/logout')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
