# Generated by Django 3.0.3 on 2020-07-13 16:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('logger', '0010_employee_emp_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='activity',
            name='description',
        ),
    ]
