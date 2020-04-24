# Generated by Django 2.2.7 on 2020-04-24 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aidsp', '0003_auto_20200424_1550'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='belong_task',
            field=models.CharField(max_length=100, verbose_name='所属大任务'),
        ),
        migrations.AlterField(
            model_name='task',
            name='task_name',
            field=models.CharField(max_length=100, unique=True, verbose_name='任务名称'),
        ),
    ]
