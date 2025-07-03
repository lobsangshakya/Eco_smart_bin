from django.urls import path
from Home import views

urlpatterns = [
    path('', views.index, name='home'),  # Homepage
    path('login/', views.login, name = 'login'), # Login page
    path('signup/', views.signup, name = 'signup') # signup page
]