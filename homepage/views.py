from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    return render(request,'homepage/index.html')

def build(request):
    return render(request,'build/index.html')

def build_test(request,test):
    return render(request,'build/index.html')
