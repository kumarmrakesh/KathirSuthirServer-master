# Generated by Django 3.0.3 on 2020-07-13 16:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('logger', '0012_auto_20200713_2136'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='expirience',
            new_name='experience',
        ),
    ]