from rest_framework import serializers, viewsets
from .models import Post, PostCategory, Comment
from taggit.models import Tag

class PostSerializer(serializers.ModelSerializer):
    category_title = serializers.CharField(
        source="category.title", read_only=True)
    category_slug = serializers.CharField(
        source="category.slug", read_only=True)

    class Meta:
        model = Post
        fields = ['title', 'content', 'preview_img',
                  'created_on', 'category', 'author', 'slug', 'category_title', 'category_slug']


class PostCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostCategory
        fields = ['title', 'img', 'slug']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['name', 'email', 'content', 'post']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['name', 'slug']


# ViewSets define the view behavior.

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostCategoryViewSet(viewsets.ModelViewSet):
    queryset = PostCategory.objects.all()
    serializer_class = PostCategorySerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
