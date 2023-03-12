import os

from decouple import config

BASE_DIR = os.path.dirname(os.path.realpath(__file__))

class Config:
  SECRET_KEY = config('SECRET', 'secret')
  SQLALCHEMY_TRACK_MODIFICATIONS=False

class DevConfig(Config):
  DEBUG=True
  SQLALCHEMY_ECHO=True
  SQLALCHEMY_DATABASE_URI='sqlite:///' + os.path.join(BASE_DIR, 'db.sqlite3')

class TestConfig(Config):
  pass

class ProductConfig(Config):
  pass

config_dict = {
  'dev': DevConfig,
  'test': TestConfig,
  'product': ProductConfig
}