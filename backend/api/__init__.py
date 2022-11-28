import os

from flask import Flask
from flask_restx import Api
from flask_migrate import Migrate

from .auth.views import auth_namespace
from .orders.views import order_namespace
from .products.views import product_namespace
from .config.config import config_dict
from .models.user import User
from .models.orders import Order
from .models.product import Product
from .utils import db

def create_app(config=config_dict['dev']):
    app = Flask(__name__)

    app.config.from_object(config)

    
    api = Api(app)

    api.add_namespace(auth_namespace, "/auth")
    api.add_namespace(order_namespace, "/order")
    api.add_namespace(product_namespace, "/product")

    db.init_app(app)
    migrate = Migrate(app, db)

    @app.shell_context_processor
    def make_shell_context():
        return {
            'db': db,
            'User': User,
            'Order': Order,
            'Product': Product
        }

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World! Nghia'

    @app.route('/test')
    def test():
        return 'Hello, World! Nghia test'

    return app
