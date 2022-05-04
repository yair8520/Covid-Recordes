# Generated by Django 4.0.3 on 2022-03-18 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('records', '0005_remove_conditions_conditions_remove_conditions_user_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='conditions',
        ),
        migrations.AddField(
            model_name='user',
            name='conditions',
            field=models.JSONField(default='none'),
        ),
        migrations.DeleteModel(
            name='Conditions',
        ),
    ]
