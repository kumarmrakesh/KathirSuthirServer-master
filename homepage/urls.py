from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('build/', views.build, name='admin-app'),
    path('build/<str:test>', views.build_test, name='admin-app-test'),
]