from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from .models import *


def index(request):
    items = Product.objects.all()
    context = {
        'items' : items,
    }
    return render(request,'index.html',context)


def login_user(request):
    items = User.objects.all()
    for i in items:
        print(i)
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username)
        print(password)
        user = authenticate(request, username=username, password=password)
        print(user)
        print('posted')
        if user is not None:
            login(request, user)
            return redirect('home')  
        else:
            error_message = "Invalid username or password"
            return render(request, 'login.html', {'error_message': error_message})
    else:
        print('no')
        return render(request, 'login.html')
    

def menu(request):
    course = Category.objects.all()
    items = Product.objects.all()
    context = {
            'course':course,
            'item':items,
        }
    return render(request,'menu.html',context)

def logout_user(request):
    logout(request)
    return redirect('home')

list = []
def add(request,id):
    item = Product.objects.get(id=id)
    list.append(item)
    if item != None:
        context = {
            'item':list,
        }
        return render(request,'cart.html',context)
    return render(request,'index.html')

def cart(request):
    sum=0
    for i in list:
        sum = sum + i.price
    context = {
        'item' : list,
        'sum':sum,
    }
    return render(request,'cart.html',context)

def delete_item(request, id):
    cart = request.session.get('cart', [])
    for item in cart:
        if item.id == id:
            cart.remove(item)
            break
    request.session['cart'] = cart
    return redirect('cart')

def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')

        if password1 == password2:
            user = User.objects.create_user(username=username, email=email, password=password1)
            # Additional user-related operations if needed
            return redirect('login')
        else:
            error_message = "Passwords do not match"
            return render(request, 'register.html', {'error_message': error_message})

    return render(request, 'register.html')