from flask_restx import Namespace, Resource

product_namespace = Namespace('product', description="Space for product")


@product_namespace.route("/products")
class GetProducts(Resource):

    def get(self):
        return {"message": "Hello products"}

    def post(self):
        return {"message": "Post products"}


@product_namespace.route("/product/<int:product_id>")
class ProductDetail(Resource):

    def get(self, product_id):
        return {"message": f"Product detail: {product_id}"}

    def put(self, product_id):
        return {"message": "put product"}

    def delete(self, product_id):
        return {"message": "delete product"}
