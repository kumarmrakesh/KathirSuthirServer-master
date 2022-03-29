from django.urls import path

from . import views
from django.views.decorators.csrf import csrf_exempt 


urlpatterns = [
    path('logger/fromMail',views.fromMail,name='fromMail'),
    path('logger/', views.index, name='index'),
    path('logger/test',views.test,name='test'),
    path('logger/api/web/get/wo_pending',views.api_wo_pending,name="api_wo_pending"),
    path('logger/api/web/get/rating',views.api_rating,name="api_rating"),
    path('logger/api/web/get/current_projects',views.api_current_projects,name="api_current_projects"),
    path('logger/api/web/post/assign_to',views.api_assign_to,name="api_assign_to"),
    path('logger/api/web/get/employee',views.api_employee,name="api_employee"),
    path('logger/api/web/get/employee_work',views.api_employee_work,name="activity"),
    path('logger/api/web/post/manager_rating',views.api_manager_rating,name="rating"),
    path('logger/api/web/post/delete_employee',views.api_delete_employee,name="delete"),
    path('logger/api/web/post/authenticate',views.api_authenticate,name="authenticate"),
    path('logger/api/web/get/add_employee',views.api_add_employee,name="add"),
    path('logger/api/web/get/get_id',views.api_get_id,name="getId"),
    path('logger/api/web/post/change_password',views.api_change_password,name="change_password"),

    #App
    path('kathi/mobile/loginapi', csrf_exempt(views.loginapi), name='loginapi'),
    path('kathi/mobile/creatework', csrf_exempt(views.creatework), name='creatework'),
    path('kathi/mobile/completework', csrf_exempt(views.completework), name='completework'),
    path('kathi/mobile/activity', csrf_exempt(views.activity), name='activity'),
    path('kathi/mobile/dateActivity', csrf_exempt(views.dateActivity), name='dateActivity'),
    path('kathi/mobile/employeedetail', csrf_exempt(views.employeedetail), name='employeedetail'),
    path('mobile/changepass', csrf_exempt(views.changePass), name='changepass'),
]