from django.urls import path
from .views import main, NBTView, CategoryView, CommentsView, ProfileView, RatingView

urlpatterns = [
    path('nbt', NBTView.as_view()),
    path('create-nbt', main),
    path('profile', ProfileView.as_view()),
    path('create-profile', main),
    path('category', CategoryView.as_view()),
    path('create-category', main),
    path('rating', RatingView.as_view()),
    path('create-rating', main),
    path('comments', CommentsView.as_view()),
    path('create-comments', main)
]