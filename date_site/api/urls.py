from django.urls import path
from .views import main, ProfileView, NBTView

urlpatterns = [
    path('profile', ProfileView.as_view()),
    path('create-profile', main),
    path('nbt', NBTView.as_view()),
    path('create-nbt', main)
]