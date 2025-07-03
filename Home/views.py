

from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect

# Create your views here.
def index(request):
    # Render the homepage
    return render(request, 'index.html')

def login(request):
    # Render the login page
    return render(request, 'login.html')

def signup(request):
    # Render the signup page
    return render(request, 'sign.html')