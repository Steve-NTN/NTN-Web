from app import db
from enum import Enum
from datetime import datetime


class OrderStatus(Enum):
    PENDING = 'pending'
    IN_TRANSIT = 'in-transit'
    DELIVEVED = 'delivered'


class Order(db.Model):
    __tablename__ = "orders"
    id = db.Column(db.Integer(), primary_key=True)
    order_status = db.Column(db.Enum(OrderStatus), default=OrderStatus.PENDING)
    date_created = db.Column(db.DateTime(), default=datetime.utcnow)
    user = db.Column(db.Integer(), db.ForeignKey("users.id"))

    def __repr__(self) -> str:
        return f"<Order {self.id}>"


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(45), nullable=False)
    email = db.Column(db.String(45), nullable=False, unique=True)
    password_hash = db.Column(db.Text(), nullable=False)
    is_staff = db.Column(db.Boolean(), default=False)
    is_active = db.Column(db.Boolean(), default=False)
    orders = db.relationship('Order', backref='customer', lazy=True)

    def __repr__(self) -> str:
        return f"<User {self.username}>"

    def save(self):
        db.session.add(self)
        db.session.commit()


class Product(db.Model):
    __tablename__ = "products"
    id = db.Column(db.Integer(), primary_key=True)
    product_name = db.Column(db.Text(), nullable=False)
    price = db.Column(db.Integer(), nullable=False)
    image = db.Column(db.Text())

    def __repr__(self) -> str:
        return f"<Product {self.id}>"

    def serialize(self):
        return {"id": self.id,
                "product_name": self.product_name,
                "price": self.price, "image": self.image}
