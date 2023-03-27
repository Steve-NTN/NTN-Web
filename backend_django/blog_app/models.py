from django.db import models
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
from django.urls import reverse
from markdownfield.models import MarkdownField, RenderedMarkdownField
from markdownfield.validators import VALIDATOR_STANDARD
from taggit.managers import TaggableManager


class PostCategory(models.Model):
    STATUS_OPTIONS = [
        ("1", "SHOW"),
        ("2", "HIDDEN"),
    ]
    title = models.CharField(max_length=255, unique=True)
    slug = models.CharField(max_length=255, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    img = models.FileField(upload_to='uploads/imgs', blank=True)
    status = models.CharField(
        max_length=1, choices=STATUS_OPTIONS, default="1")

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(PostCategory, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


class Post(models.Model):
    STATUS_OPTIONS = [
        ("1", "SHOW"),
        ("2", "HIDDEN"),
        ("3", "PREVIEW"),
    ]
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=255, blank=True)
    content = MarkdownField(
        rendered_field='content_rendered', validator=VALIDATOR_STANDARD)
    content_rendered = RenderedMarkdownField()
    created_on = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(PostCategory, on_delete=models.CASCADE)
    preview_img = models.FileField(upload_to='uploads/imgs', blank=True)
    status = models.CharField(
        max_length=1, choices=STATUS_OPTIONS, default="1")
    tags = TaggableManager()

    def get_absolute_url(self):
        return reverse('blog_post_detail', args=[self.slug])

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Post, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['created_on']

        def __unicode__(self):
            return self.title


class Comment(models.Model):
    name = models.CharField(max_length=42)
    email = models.EmailField(max_length=75)
    website = models.URLField(max_length=200, null=True, blank=True)
    content = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    created_on = models.DateTimeField(auto_now_add=True)
