from flask_restx import Namespace, Resource, fields
from flask import request
from werkzeug.security import generate_password_hash, check_password_hash
from http import HTTPStatus

from models.user import User

auth_namespace = Namespace('auth', description="Space for auth")

signup_model=auth_namespace.model(
    'User', {
        'id': fields.Integer(),
        'username': fields.String(required=True, description="A username"),
        'email': fields.String(required=True, description="A email"),
        'password': fields.String(required=True, description="A password"),
    }
)

@auth_namespace.route("/signup")
class Signup(Resource):

    @auth_namespace.expect(signup_model)
    @auth_namespace.marshal_with(signup_model)
    def post(self):
        data = request.get_json()
        print(data)
        new_user = User(
            username=data.get('username'),
            email=data.get('email'),
            password_hash=generate_password_hash(data.get('password')),
        )

        new_user.save()
        return new_user, HTTPStatus.CREATED

@auth_namespace.route("/login")
class Login(Resource):

    def post(self):
        return {"message": "Hello auth"}
