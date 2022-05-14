from django.db import models

# Create your models here.

# class Conditions(models.Model):
#     condition = models.CharField(max_length=100, default="none")

class User(models.Model):
    firstname = models.CharField(max_length=100, default="firstname")
    lastname = models.CharField(max_length=100, default="lastname")
    dateofbirth = models.DateField()
    address = models.CharField(max_length=100, default="address")
    city = models.CharField(max_length=100, default="city")
    zipcode = models.CharField(max_length=9, default=000000000)
    landline = models.CharField(max_length=15, default="-")
    cellularphone = models.CharField(max_length=15, default=000000000000000)
    infected = models.BooleanField(default=False)
    conditions = models.JSONField(default=dict)


