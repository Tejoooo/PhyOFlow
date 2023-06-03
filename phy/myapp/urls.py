
from django.contrib import admin
from django.urls import path,include
from .views import *
from . import views
urlpatterns = [
    path('', views.index,name='home'),
    path('cart/add/<int:id>', views.add,name='add'),
    path('cart/add/<int:id>', views.add,name='additem'),
    path('cart', views.cart,name='cart'),
    path('login', views.login_user,name='login'),
    path('menu', views.menu,name='menu'),
    path('logout', views.logout_user,name='logout'),
    path('register', views.register,name='register'),
    path('delete/<int:id>', views.delete_item, name='delete_item'),
    
]
