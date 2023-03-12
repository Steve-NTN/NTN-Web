from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_marshmallow import Marshmallow

from config import config_dict

db = SQLAlchemy()
login_manager = LoginManager()
ma = None


def create_app(config_name):
  app = Flask(__name__, instance_relative_config=True)
  CORS(app)
  app.config.from_object(config_dict[config_name])
  db.init_app(app)

  login_manager.init_app(app)
  login_manager.login_message = "Bạn phải đăng nhập để truy cập vào trang này."
  login_manager.login_view = "auth.login"
  
  migrate = Migrate(app, db)
  from app import models

  from .products import product as product_blueprint
  app.register_blueprint(product_blueprint, url_prefix='/product')
  ma = Marshmallow(app)

  return app
