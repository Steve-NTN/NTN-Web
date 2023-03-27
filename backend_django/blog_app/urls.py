from django.urls import path
from rest_framework import routers
from .serializers import CommentViewSet
from .views import posts, post_categories, post_detail, tags

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'post-comment', CommentViewSet)

urlpatterns = [
    path('posts/', posts),
    path('post-detail/', post_detail),
    path('post-categories/', post_categories),
    path('tags/', tags),
]
