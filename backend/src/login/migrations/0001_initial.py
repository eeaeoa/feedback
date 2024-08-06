# Generated by Django 5.0.7 on 2024-08-06 18:03

import django.core.validators
import django.utils.timezone
from django.db import migrations, models

import login.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(max_length=255, verbose_name='имя')),
                ('last_name', models.CharField(max_length=255, verbose_name='фамилия')),
                ('middle_name', models.CharField(blank=True, max_length=255, verbose_name='отчество')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('phone', models.CharField(max_length=10, validators=[django.core.validators.RegexValidator(code='invalid_phone_number', message="Phone number must be entered in the format: '9622397855'. Up to 10 digits allowed.", regex='^\\d{10}$')], verbose_name='телефон')),
                ('job_title', models.CharField(blank=True, max_length=255, verbose_name='должность')),
                ('birth_date', models.DateField(blank=True, null=True, verbose_name='дата рождения')),
                ('gender', models.PositiveIntegerField(blank=True, choices=[(1, 'женский'), (2, 'мужской')], default=None, null=True, verbose_name='пол')),
                ('avatar', models.ImageField(default='static/default_avatar.png', upload_to='', verbose_name='фотография')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
            },
            managers=[
                ('objects', login.models.MyUserManager()),
            ],
        ),
    ]
