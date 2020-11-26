from django.urls import path, include
from .views import main, NBTView, CategoryView, CommentsView, ProfileView, RatingView, LoginView, UserView, RegisterView
from knox import views as knox_views

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
    path('create-comments', main),

    path('auth', include('knox.urls')),
    path('auth/register', RegisterView.as_view()),
    path('auth/login', LoginView.as_view()),
    path('auth/user', UserView.as_view()),
    path('auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]