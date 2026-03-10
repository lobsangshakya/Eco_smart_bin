from django.urls import path
from Home import views, api_views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('', views.index, name='home'),  # Homepage
    path('login/', views.login, name='login'),  # Login page
    path('signup/', views.signup, name='signup'),  # signup page
    
    # API Routes
    path('api/signup/', api_views.SignupView.as_view(), name='api_signup'),
    path('api/login/', api_views.LoginView.as_view(), name='api_login'),
    path('api/profile/', api_views.ProfileView.as_view(), name='api_profile'),
    path('api/logout/', api_views.LogoutView.as_view(), name='api_logout'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]