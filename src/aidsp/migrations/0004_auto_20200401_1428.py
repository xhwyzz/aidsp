# Generated by Django 2.2.7 on 2020-04-01 14:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('aidsp', '0003_auto_20200331_1643'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project_task', to='aidsp.Project', verbose_name='所属项目'),
        ),
    ]