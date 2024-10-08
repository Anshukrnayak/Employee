from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.EmployeeAPI.as_view(),name='employee'),
    path('update/<int:pk>',views.EmployeeUpdate.as_view(),name='update'),


]
