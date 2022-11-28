from flask_restx import Namespace, Resource

order_namespace = Namespace('order', description="Space for order")


@order_namespace.route("/orders")
class GetOrders(Resource):

    def get(self):
        return {"message": "Hello orders"}

    def post(self):
        return {"message": "Hello post auth"}


@order_namespace.route("/order/<int:order_id>")
class GetOrderDetail(Resource):

    def get(self, order_id):
        return {"message": f"order detail: {order_id}"}

    def put(self, order_id):
        return {"message": "put order"}

    def delete(self, order_id):
        return {"message": "delete order"}
