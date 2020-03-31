# Generated by Django 2.2.7 on 2020-03-30 11:21

from django.conf import settings
import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('name', models.CharField(max_length=10, unique=True, verbose_name='姓名')),
                ('phone', models.CharField(max_length=11, verbose_name='手机')),
                ('position', models.PositiveIntegerField(choices=[(0, '算法工程师'), (1, '生产管理员'), (2, '标注员')], null=True, verbose_name='职位')),
                ('current_task', models.IntegerField(blank=True, null=True, verbose_name='当前任务')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('type', models.PositiveSmallIntegerField(choices=[(0, '需求文档'), (1, '采集文档'), (2, '标注文档')], verbose_name='文档类型')),
                ('title', models.CharField(blank=True, max_length=50, null=True, verbose_name='标题')),
                ('content', models.TextField(verbose_name='文档内容')),
                ('old_content', models.TextField(blank=True, null=True, verbose_name='文档内容历史版本')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(blank=True, null=True, verbose_name='更新时间')),
                ('author', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL, to_field='name', verbose_name='姓名')),
            ],
        ),
        migrations.CreateModel(
            name='Label',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50, verbose_name='标签名')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('project_id', models.CharField(max_length=50, verbose_name='项目id')),
                ('project_name', models.CharField(max_length=50, verbose_name='项目名称')),
                ('status', models.CharField(max_length=20, verbose_name='状态')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('end_time', models.DateTimeField(blank=True, null=True, verbose_name='结束时间')),
                ('background', models.TextField(blank=True, help_text='填写此项目的需求背景，必须是markdown格式', null=True, verbose_name='项目背景')),
                ('total_demand', models.PositiveIntegerField(verbose_name='需求总量')),
                ('total_describe', models.CharField(blank=True, max_length=200, null=True, verbose_name='需求数量描述')),
                ('deadline', models.DateTimeField(verbose_name='截止时间')),
                ('collection_documents', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='采集文档', to='aidsp.Document', verbose_name='采集文档')),
                ('labeling_documents', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='标注文档', to='aidsp.Document', verbose_name='标注文档')),
                ('labels', models.ManyToManyField(blank=True, null=True, related_name='labels', to='aidsp.Label', verbose_name='标签')),
                ('requirement_documents', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='需求文档', to='aidsp.Document', verbose_name='需求文档')),
                ('users_attend', models.ManyToManyField(blank=True, null=True, related_name='users_attend', to=settings.AUTH_USER_MODEL, verbose_name='参与人')),
                ('users_found', models.ManyToManyField(blank=True, null=True, related_name='users_found', to=settings.AUTH_USER_MODEL, verbose_name='创建人')),
                ('users_manager', models.ManyToManyField(blank=True, null=True, related_name='users_manager', to=settings.AUTH_USER_MODEL, verbose_name='管理人')),
            ],
        ),
        migrations.CreateModel(
            name='QA',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('author', models.CharField(max_length=50, verbose_name='作者')),
                ('avatar', models.TextField(verbose_name='区分Q或A的头像')),
                ('content', models.TextField(verbose_name='内容')),
                ('datetime', models.DateTimeField(verbose_name='评论时间')),
                ('documents', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aidsp.Document', verbose_name='文档')),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('task_name', models.CharField(max_length=20, unique=True, verbose_name='任务名称')),
                ('belong_task', models.CharField(max_length=20, verbose_name='所属大任务')),
                ('task_link', models.URLField(verbose_name='任务链接')),
                ('begin_time', models.DateTimeField(blank=True, null=True, verbose_name='开始时间')),
                ('done_time', models.DateTimeField(blank=True, null=True, verbose_name='完成时间')),
                ('time_label', models.DateTimeField(blank=True, null=True, verbose_name='重启标签')),
                ('used_time', models.CharField(blank=True, max_length=20, null=True, verbose_name='任务用时')),
                ('total_time', models.CharField(blank=True, max_length=20, null=True, verbose_name='任务历时')),
                ('gross', models.IntegerField(blank=True, null=True, verbose_name='此任务工作总量')),
                ('quantity_available', models.IntegerField(blank=True, null=True, verbose_name='此任务有效工作量')),
                ('status', models.PositiveSmallIntegerField(choices=[(0, '未开始'), (1, '正在进行'), (2, '待审核'), (3, '通过'), (4, '未通过'), (5, '暂停')], verbose_name='状态')),
                ('number_of_reviews', models.PositiveSmallIntegerField(blank=True, default=0, null=True, verbose_name='审核次数')),
                ('task_type', models.PositiveSmallIntegerField(choices=[(1, '采集任务'), (2, '标注任务')], verbose_name='任务类型')),
                ('assignee', models.ManyToManyField(blank=True, null=True, related_name='assignee_task', to=settings.AUTH_USER_MODEL, verbose_name='标注员')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='project_task', to='aidsp.Project', verbose_name='所属项目')),
                ('reviewer', models.ManyToManyField(blank=True, null=True, related_name='reviewer_task', to=settings.AUTH_USER_MODEL, verbose_name='审核员')),
            ],
        ),
        migrations.CreateModel(
            name='Suggestion',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(verbose_name='更新时间')),
                ('index', models.IntegerField(verbose_name='图片序号')),
                ('problem', models.TextField(help_text='填写此图片的问题详情，必须是markdown格式', verbose_name='问题内容')),
                ('task', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='suggestion_task', to='aidsp.Task', to_field='task_name', verbose_name='任务')),
            ],
        ),
        migrations.CreateModel(
            name='Reply',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('author', models.CharField(max_length=50, verbose_name='作者')),
                ('avatar', models.TextField(verbose_name='区分Q或A的头像')),
                ('content', models.TextField(verbose_name='内容')),
                ('datetime', models.DateTimeField(verbose_name='评论时间')),
                ('toquestion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='aidsp.QA', verbose_name='问题')),
            ],
        ),
        migrations.CreateModel(
            name='Performance',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('performance', models.CharField(max_length=10, verbose_name='绩效')),
                ('date', models.DateField(auto_now_add=True, verbose_name='打分日期')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='user_performance', to=settings.AUTH_USER_MODEL, to_field='name', verbose_name='姓名')),
            ],
        ),
        migrations.CreateModel(
            name='Dataset',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20, verbose_name='数据集名称')),
                ('describe', models.CharField(blank=True, max_length=200, null=True, verbose_name='数据集描述')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('quantity_detials', models.CharField(blank=True, max_length=200, null=True, verbose_name='数量详情')),
                ('path', models.CharField(blank=True, max_length=200, null=True, verbose_name='存储路径')),
                ('img', models.TextField(blank=True, null=True, verbose_name='略缩图')),
                ('project', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='project_dataset', to='aidsp.Project', verbose_name='所属项目')),
            ],
        ),
    ]
