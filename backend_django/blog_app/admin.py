from django.contrib import admin
from blog_app.models import Post, Comment, PostCategory
# Register your models here.

admin.site.register(PostCategory)
admin.site.register(Post)
admin.site.register(Comment)
