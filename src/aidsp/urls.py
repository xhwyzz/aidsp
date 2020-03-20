from django.urls import path, include
from . import views
from django.contrib import admin
from .views import project_index, project_detail, project_display, dataset_display, dataset_detail,\
    dataset_fileupload, dataset_filedownload, aidspRedirect
from .apis import ProjectViewSet, UserViewSet, LabelViewSet, QAViewSet, ProjectdisplayViewSet, ReplyViewSet, DatasetViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('project', ProjectViewSet, basename='api-project')
router.register('user', UserViewSet, basename='api-user')
router.register('label', LabelViewSet, basename='api-label')
router.register('qa', QAViewSet, basename='api-qa')
router.register('pdisplay', ProjectdisplayViewSet, basename='api-pdisplay')
router.register('reply', ReplyViewSet, basename='api-reply')
router.register('dataset', DatasetViewSet, basename='api-dataset')

urlpatterns = [
    path('', aidspRedirect),
    path('<page>', project_index),
    path('detail/<id>/', project_detail),
    path('api/', include((router.urls, str(router)), namespace='api')),
    path('newproject/', project_detail),
    path('display/<id>/', project_display),
    path('dataset_display/<id>/', dataset_display),
    path('newdataset/', dataset_detail),
    path('dataset_detail/<id>/', dataset_detail),
    path('dataset/fileupload/', dataset_fileupload),
    path('dataset/filedownload/<filename>', dataset_filedownload),

]

