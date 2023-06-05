#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, jsonify, make_response, session
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import User, Post, Message, Friend
# Views go here!

app.secret_key = b'\xae\x8e\x94[\xe4^\x90\x9a\xb8\xeb\x8a\x9b\xf6\xf4H\xd7'

class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(jsonify(users), 200)

class Posts(Resource):
    def get(self):
        posts = [post.to_dict() for post in Post.query.all()]
        return make_response(jsonify(posts), 200)

    def post(self):
        data = request.form
        new_post = Post(
            content=data['content'],
            title=data['title'],
            user_id=data['user_id'],
        )
        db.session.add(new_post)
        db.session.commit()
        return make_response(jsonify(new_post.to_dict()), 201)

class Messages(Resource):
    def get(self):
        messages = [message.to_dict() for message in Message.query.all()]
        return make_response(jsonify(messages), 200)

    def post(self):
        data = request.form
        new_message = Message(
            subject=data['subject'],
            content=data['content'],
            sender_id=data['sender_id'],
            reciever_id=data['reciever_id'],
        )
        db.session.add(new_message)
        db.session.commit()
        return make_response(jsonify(new_message.to_dict()), 201)

class MessagesById(Resource):
    def get(self, id):
        try:
            message = Message.query.filter_by(id=id).first()
            return make_response(jsonify(message.to_dict()), 200)
        except:
            return make_response({'error': 'Message not found.'})

    def patch(self, id):
        data = request.form
        message = Message.query.filter_by(id=id).first()
        for attr in data:
            setattr(message, attr, data[attr])
        db.session.add(message)
        db.session.commit()
        return make_response(jsonify(message.to_dict()), 202)

    def delete(self, id):
        message = Message.query.filter_by(id=id).first()
        db.session.delete(message)
        db.session.commit()
        response_dict = {'message': 'Message successfully deleted.'}
        return make_response(jsonify(response_dict), 200)

class Friends(Resource):
    def get(self):
        friends = [friend.to_dict() for friend in Friend.query.all()]
        return make_response(jsonify(friends), 200)

class FriendsByUsername(Resource):
    def get(self, username):
        try:
            friends = Friend.query.filter_by(username=username).first()
            return make_response(jsonify(friends.to_dict()), 200)
        except:
            return make_response({'error': 'Friend not found'})

class Login(Resource):
    def post(self):
        user = User.query.filter(User.username == request.form()['username']).first()
        session['user_id'] = user.id
        return user.to_dict(), 200

class CheckSession(Resource):
    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict(), 200
        else:
            return {}, 401

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {'message': '204: No Content'}, 204

api.add_resource(Users, '/users')
api.add_resource(Posts, '/posts')
api.add_resource(Messages, '/messages')
api.add_resource(MessagesById, '/messages/<int:id>')
api.add_resource(Friends, '/friends')
api.add_resource(FriendsByUsername, '/friends/<string:username>')
api.add_resource(Login, '/login')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Logout, '/logout')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
