from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import generics, status, permissions
from .serializers import RegisterSerializer, LoginSerializer, UserSerializer, NBTFileSerializer, CreateNBTSerializer, ProfileSerializer, CreateProfileSerializer, CommentsSerializer, CreateCommentsySerializer, RatingSerializer, CreateRatingSerializer, CategorySerializer, CreateCategorySerializer
from .models import NBTFile, Category, Profile, Comments, Rating
from rest_framework.views import APIView
from rest_framework.response import Response
from knox.models import AuthToken

# Create your views here.

# TEMP - placeholder
def main(request):
    return HttpResponse("Hello, Nothing to see here!")

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

class UserView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

# POSTS
class CreateCategoryView(APIView):
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

class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
        })

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": token
        })


