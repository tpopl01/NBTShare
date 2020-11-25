from django.db import models
from django.contrib.auth.models import User
import string
import random


def generate_unique_code():
    length = 8

    while True:
        l = ''.join(random.choices(string.ascii_uppercase, k=length))
        if NBTFile.objects.filter(store_location=l).count() == 0:
            break

    return l

# Create your models here.
class Profile(models.Model):
    message = models.CharField(max_length=600, unique=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

class NBTFile(models.Model):
    name = models.CharField(max_length=50, unique=False)
    description = models.CharField(max_length=600, unique=False)
    download_count = models.IntegerField(null=False, default=0)
    store_location = models.CharField(max_length=8, default=generate_unique_code, unique=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)

class Rating(models.Model):
    rating = models.PositiveIntegerField(null=False, default=3)
    nbt_file = models.ForeignKey(NBTFile, on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class Comments(models.Model):
    title = models.CharField(max_length=50, unique=False)
    message = models.CharField(max_length=150, unique=False)
    nbt_file = models.ForeignKey(NBTFile, on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)



