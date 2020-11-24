from rest_framework import serializers
from .models import Profile, NBTFile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'name', 'email', 'message',
                  'owner', 'created_at')

class CreateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('name', 'email', 'message', 'owner')

class NBTFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = NBTFile
        fields = ('id', 'name', 'description', 'download_count',
                  'created_by', 'created_at')


class CreateNBTSerializer(serializers.ModelSerializer):
    class Meta:
        model = NBTFile
        fields = ('name', 'description', 'created_by')