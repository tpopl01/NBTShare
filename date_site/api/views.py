from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import generics, status
from .serializers import NBTFileSerializer, CreateNBTSerializer, ProfileSerializer, CreateProfileSerializer, CommentsSerializer, CreateCommentsySerializer, RatingSerializer, CreateRatingSerializer, CategorySerializer, CreateCategorySerializer
from .models import NBTFile, Category, Profile, Comments, Rating
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

# TEMP - placeholder
def main(request):
    return HttpResponse("Hello")

# GETS
class NBTView(generics.ListAPIView):
    queryset = NBTFile.objects.all()
    serializer_class = NBTFileSerializer

class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProfileView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class CommentsView(generics.ListAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    
class RatingView(generics.ListAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

# POSTS
class CreateCategoryView(generics.ListAPIView):
    serializer_class = CreateCategorySerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            cat = Category(name=name)
            cat.save()
            return Response(CategorySerializer(cat).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

