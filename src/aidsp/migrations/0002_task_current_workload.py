# Generated by Django 2.2.7 on 2020-06-15 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aidsp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='current_workload',
            field=models.IntegerField(blank=True, null=True, verbose_name='实时工作量'),
        ),
    ]
