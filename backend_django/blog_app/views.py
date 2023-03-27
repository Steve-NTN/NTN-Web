from django.shortcuts import render
from .serializers import PostSerializer, PostCategorySerializer, TagSerializer
from .models import Post, PostCategory
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from taggit.models import Tag
# Create your views here.
from django.views.decorators.csrf import csrf_exempt 

@api_view(['GET', 'POST'])
@csrf_exempt
def posts(req):
    try:
        category_slug, category = (req.data or {}).get('category_slug'), None
        if category_slug:
            category = PostCategory.objects.filter(
                slug=category_slug).first()

        posts = Post.objects.filter(
            category=category) if category_slug else Post.objects.all()
        serializer = PostSerializer(posts, many=True)

        return Response({'list': serializer.data})
    except (KeyError):
        return None


@api_view(['GET', 'POST' ])
def tags(req):
    try:
        common_tags = Tag.objects.all()
        return Response(TagSerializer(common_tags, many=True).data)
    except (KeyError):
        return None


@api_view(['GET', 'POST'])
def post_detail(req):
    try:
        req_data = req.data or {}
        category = PostCategory.objects.filter(
            slug=req_data.get('category_slug'))

        if len(category) > 0:
            post = Post.objects.filter(
                category=category[0], slug=req_data.get('post_slug')).first()
            if post:
                serializer = PostSerializer(post)
                return Response(serializer.data)
        return Response({}, status=status.HTTP_404_NOT_FOUND)
    except (KeyError):
        return None


@api_view(['GET'])
def post_categories(req):
    categories = PostCategory.objects.all()

    default_category = [{"title": "Tất cả", "slug": ""}]
    serializer = PostCategorySerializer(categories, many=True)
    return JsonResponse({'list': default_category + serializer.data})
