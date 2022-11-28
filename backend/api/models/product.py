from ..utils import db
from datetime import datetime

class Product(db.Model):
  __tablename__="products"
  id=db.Column(db.Integer(), primary_key=True)
  product_name=db.Column(db.Text(), nullable=False)
  price=db.Column(db.Integer(), nullable=False)
  
  def __repr__(self) -> str:
    return f"<Product {self.id}>"