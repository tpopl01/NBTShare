from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import generics, status
from .serializers import ProfileSerializer, CreateProfileSerializer, NBTFileSerializer, CreateNBTSerializer
from .models import Profile, NBTFile
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
def main(request):
    return HttpResponse("Hello")

class ProfileView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class NBTView(generics.ListAPIView):
    queryset = NBTFile.objects.all()
    serializer_class = NBTFileSerializer



