from rest_framework import serializers
from .models import NBTFile, Category, Rating, Comments, Profile
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# NBT
class NBTFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = NBTFile
        fields = ('id', 'name', 'description', 'download_count', 'store_location', 'category', 'created_by', 'created_at')


class CreateNBTSerializer(serializers.ModelSerializer):
    class Meta:
        model = NBTFile
        fields = ('name', 'description', 'store_location', 'category', 'created_by')

# PROFILE
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'message', 'user', 'created_at')

class CreateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('message', 'user')

# USERS
# User Serializer
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

    return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")

# CATEGORIES
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'created_at')


class CreateCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name')

# RATING
class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('id', 'rating', 'nbt_file', 'created_by', 'created_at')


class CreateRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('rating', 'nbt_file', 'created_by')
        
# COMMENTS
class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ('id', 'title', 'message', 'nbt_file', 'created_by', 'created_at')

class CreateCommentsySerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ('title', 'message', 'created_by', 'nbt_file')
