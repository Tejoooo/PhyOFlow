from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=50,null=False)
    subject  = models.CharField(max_length=50,default=None)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=50)
    category = models.ForeignKey(Category,default=None ,on_delete=models.CASCADE)
    price = models.FloatField()
    image = models.ImageField(upload_to='images/')


    def __str__(self):
        return self.name


class Customer(models.Model):
    itemname = models.ForeignKey(Product,on_delete=models.CASCADE,max_length=50)
    total_price = models.CharField(max_length=50)
    noofitems = models.CharField(max_length=50)

    def __str__(self):
        return self.itemname
     
    