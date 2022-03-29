from django.db import models
import datetime

# Create your models here.

class logger(models.Model):
    wo_type = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    quantity = models.IntegerField()
    e_date = models.DateField()
    wo_issuedate = models.DateField()
    accepted_by =models.CharField(max_length=50)
    customer = models.CharField(max_length=50)
    remarks = models.CharField(max_length=200)

class employee_rating(models.Model):
    date = models.DateField(default=datetime.datetime(2000, 1, 1))
    rating = models. IntegerField()
    emp_id = models.IntegerField()

class model_rating(models.Model):
    date = models.DateField(default=datetime.datetime(2000, 1, 1))
    rating = models. IntegerField()
    emp_id = models.IntegerField()

class activity(models.Model):
    emp_id = models.IntegerField()
    date = models.DateField()
    activity = models.CharField(max_length=500)
    work_order_no = models.IntegerField()
    planned_time = models.IntegerField()
    actual_time = models.IntegerField(default = 0)
    work_remark = models.CharField(max_length=500)
    submission_remark = models.CharField(max_length=500)
    is_complete = models.BooleanField(default = False)
    dependency = models.CharField(max_length=500)
    is_rated = models.BooleanField(default=False)

class projects(models.Model):
    work_order_type = models.CharField(max_length=5)
    status = models.IntegerField()
    isComplete = models.BooleanField()
    product_name = models.CharField(max_length=50)
    expected_date = models.DateField()
    wo_issue_date = models.DateField()
    accepted_by = models.CharField(max_length=50)
    assigned_to = models.CharField(max_length=50)
    custtomer_name = models.CharField(max_length=50)
    remarks = models.CharField(max_length=200)
    attachments = models.CharField(max_length=50)
    customer_contact = models.CharField(max_length=20)
    customer_email = models.EmailField()
    amount_spend = models.IntegerField()
    quantity = models.IntegerField()

class Employee(models.Model):
    emp_id = models.IntegerField()
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_no = models.CharField(max_length=20)
    email = models.EmailField()
    street = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    educational_qualification = models.CharField(max_length=50)
    date_of_joining = models.DateField()
    experience = models.IntegerField()

class login_table(models.Model):
    status = models.IntegerField(default=0)
    password = models.CharField(max_length=50)
