from ..utils import db
from enum import Enum
from datetime import datetime

class OrderStatus(Enum):
  PENDING='pending'
  IN_TRANSIT='in-transit'
  DELIVEVED='delivered'

class Order(db.Model):
  __tablename__="orders"
  id=db.Column(db.Integer(), primary_key=True)
  order_status=db.Column(db.Enum(OrderStatus), default=OrderStatus.PENDING)
  date_created=db.Column(db.DateTime(), default=datetime.utcnow)
  user=db.Column(db.Integer(), db.ForeignKey("users.id"))
  
  def __repr__(self) -> str:
    return f"<Order {self.id}>"