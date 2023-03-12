# from ..models
from http import HTTPStatus
from flask import jsonify, request
import json
# from app import ma

from . import product
from ..models import Product

# class ProductSchema(ma.ModelSchema):
#   class Meta:
#     fields = ("id", "product_name", "price", "image")


@product.route("/products")
def get():
    limit = request.args.get('limit', 8, type=int)
    offset = request.args.get('offset', 0, type=int)
    print(limit, offset)
    products = [product.serialize() for product in Product.query.all()]
    return jsonify({"products": products, "total": len(products)}), HTTPStatus.OK


def post():
    return {"message": "Post products"}
