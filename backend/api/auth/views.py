from flask_restx import Namespace, Resource

auth_namespace = Namespace('auth', description="Space for auth")


@auth_namespace.route("/signup")
class Signup(Resource):

    def post(self):
        return {"message": "Hello auth"}

@auth_namespace.route("/login")
class Login(Resource):

    def post(self):
        return {"message": "Hello auth"}
