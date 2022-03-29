from django.shortcuts import render

# Create your views here.
from . import models
from django.http import HttpResponse
from django.http import JsonResponse
from .models import logger
from .models import projects
from .models import Employee
from .models import model_rating
from .models import login_table
from kathi import settings
from django.core.mail import send_mail
from django.template import loader
from django.template.loader import render_to_string
from django.core import serializers
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token
import json
import datetime


def index(request):
    wo_type = request.POST.get('wo_type')
    name = request.POST.get('name')
    quantity = request.POST.get('quantity')
    date = request.POST.get('date')
    accepted = request.POST.get('accepted')
    custName = request.POST.get('custName')
    custPh = request.POST.get('custPh')
    custEmail = request.POST.get('custEmail')
    textarea = request.POST.get('textarea')
    val = projects(work_order_type = wo_type,
                status = 1,
                isComplete = False,
                product_name = name,
                expected_date = date,
                wo_issue_date = date,
                accepted_by = accepted,
                assigned_to = "",
                custtomer_name = custName,
                remarks = textarea,
                attachments = "",
                customer_contact = custPh,
                customer_email = custEmail,
                amount_spend = 0,
                quantity = quantity)
    val.save()
    return render(request,'homepage/index.html')
    #display = logger.objects.latest('id')
    #return HttpResponse(display)

def fromMail(request):
        id = request.GET['pk']
        data = projects.objects.get(pk = id)
        context = {
            's_no': data.pk,
            'type': data.work_order_type,
            'name': data.product_name,
            'quantity': data.quantity,
            'e_date': data.expected_date,
            'wo_issuedate': data.wo_issue_date,
            'accepted_by': data.accepted_by,
            'customer': data.custtomer_name,
        }
        return render(request,'homepage/mail.html',context)

def test(request):
    return HttpResponse("Form Submitted Successfully")

def api_wo_pending(request):
    l = []
    try:
        q1 = projects.objects.filter(status = 1)
        l = serializers.serialize('json',list(q1))
    except:
        l = serializers.serialize('json',[])
    return JsonResponse(l,safe = False)

def api_rating(request):
    q1 = models.activity.objects.filter(is_rated = False)
    l = serializers.serialize('json',list(q1))
    return JsonResponse(l,safe = False)

def api_current_projects(request):
    q1 = projects.objects.exclude(status = 1)
    l = serializers.serialize('json',list(q1))
    return JsonResponse(l,safe = False)

@ensure_csrf_cookie
def api_assign_to(request):
    x = datetime.datetime.now()
    values = json.loads(request.body.decode('utf-8'))
    assign_to = values["assigned_to"]
    project = values["project_id"]
    q1 = projects.objects.get(id = project)
    print(q1)
    q1.wo_issue_date = x.strftime("%Y-%m-%d")
    q1.assigned_to = assign_to
    q1.status = 2
    q1.save()
    print(assign_to,project)
    print(request.POST)
    print(values)
    response = JsonResponse(
        {'csrfToken': get_token(request)}
    )
    response["Access-Control-Allow-Origin"] = 'true'
    response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    response["Access-Control-Max-Age"] = "1000"
    response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
    
    #Mailing
    id = project
    employee = int(assign_to.split()[0])
    emp_email = Employee.objects.get(emp_id=employee).email
    print(emp_email)
    mail_url="http://127.0.0.1:8000/logger/fromMail?pk="+str(id)
    mail_content = "Sir this is the new PO received I request you fill in the neccesities required in the form below"+"\n"+mail_url
    send_mail('Approval',mail_content,settings.EMAIL_HOST_USER,[emp_email])

    return response

def api_employee(request):
    q1 = Employee.objects.all()
    l = serializers.serialize("json",list(q1))
    return JsonResponse(l,safe=False)

def api_employee_work(request):
    id = request.GET["id"]
    date = request.GET["date"]
    q1 = models.activity.objects.filter(date = date).filter(emp_id = id)
    l = serializers.serialize('json',list(q1))
    return JsonResponse(l,safe = False)

def api_manager_rating(request):
    values = json.loads(request.body.decode('utf-8'))
    rating = model_rating(
        date = values["date"],
        emp_id = values["emp_id"],
        rating = values["rating"]
    )
    rating.save()
    work = models.activity.objects.filter(date = values["date"]).filter(emp_id = values["emp_id"])
    for i in range(len(work)):
       work[i].is_rated = True
       work[i].save()
    response = JsonResponse(
        {'csrfToken': get_token(request)}
    )
    response["Access-Control-Allow-Origin"] = 'true'
    response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    response["Access-Control-Max-Age"] = "1000"
    response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
    return response

def api_delete_employee(request):
    values = json.loads(request.body.decode('utf-8'))
    print(values["emp_id"])
    Employee.objects.filter(id=values["emp_id"]).delete()
    return HttpResponse("SUCCESS")

def api_authenticate(request):
    values = json.loads(request.body.decode('utf-8'))
    emp_id = values["id"]
    password = values["password"]
    employee = login_table.objects.get(id = emp_id)
    if(employee.password == password):
        return HttpResponse("Success")
    else:
        return HttpResponse("Failed")

def api_add_employee(request):
    login = login_table(
        status = 0,
        password = "welcome123"
    )
    login.save()
    return HttpResponse("Success")

def api_get_id(request):
    login = login_table.objects.filter(status=0)
    l = serializers.serialize('json',list(login))
    return JsonResponse(l,safe = False)

def api_change_password(request):
    values = json.loads(request.body.decode('utf-8'))
    id = values["id"]
    oldPassword = values["old"]
    newPassword = values["password"]
    password = login_table.objects.get(id=id)
    if(password.password != oldPassword):
        return HttpResponse("Incorrect Password")
    else:
        password.password = newPassword
        password.save()
        return HttpResponse("Updated Successfully")

# App

def loginapi(request):
    try:
        print(request.body)
        request_values = json.loads(request.body.decode('utf-8'))
        eid = int(request_values['userid'])
        password=request_values['password']
        data = models.login_table.objects.all().filter(id = eid)    
        result=serializers.serialize('json',data)[1:-1]    
        to_Send = {}
        if(data.count()==0):
            to_Send["status"]="0"
            to_Send["error"]="Invalid ID"
        else:
            result=eval(result)            
            pwd = result['fields']['password']
            isfirst = result['fields']['status']
            if password == pwd:
                if isfirst == 0:
                    to_Send["status"] = "2"
                    to_Send['error'] = "None"
                else:
                    to_Send["status"] = "1"
                    to_Send['error'] = "None"
            else:
                to_Send["status"] = "0"
                to_Send['error'] = "INVALID_PASSWORD"
    except Exception as e:
        to_Send["status"]="-1"
        to_Send["error"]=str(e)
    print(to_Send)
    return JsonResponse(to_Send,safe = False)


def activity(request):
    #eid=request.POST.get('empid')
    print(request.body)
    request_values = json.loads(request.body.decode('utf-8'))
    eid=int(request_values['userid'])
    data = models.activity.objects.order_by('date').reverse().values('date').distinct().filter(emp_id=eid)
    result = {}
    i=0
    for e in data:
        result[str(i)] =e
        i+=1
    print(result)
    return JsonResponse(result)

def dateActivity(request):
    #eid=request.POST.get('empid')
    print(request.body)
    request_values = json.loads(request.body.decode('utf-8'))
    eid= int(request_values['userid'])
    date = request_values['Date']
    date = datetime.datetime.strptime(date, r"%Y-%m-%d")
    data = models.Activity.objects.all().filter(emp_id = eid,date = date)
    result = {}
    i=0
    for e in data:
        result[str(i)] ={'empid':e.emp_id,'workid':e.work_order_no,'activity':e.activity,'plannedtime':e.planned_time,'actualtime':e.actual_time,'remark':e.work_remark,'submission_remark':e.submission_remark,'completedDate':e.date,'iscomplete':e.is_complete,'Dependancy':e.dependancy}
        i+=1
    print(result)
    return JsonResponse(result)


def completework(request):    
    request_values = json.loads(request.body.decode('utf-8'))
    print("Completework",request_values)
    eid = int(request_values['0']['empid'])
    for i in request_values:
        if i=='Rating':
            continue
        eid = int(request_values[i]['empid'])
        dependancy= request_values[i]['dependancy']
        actual_time = int(request_values[i]['time'])  
        remark=request_values[i]['remark']
        wid = request_values[i]['WorkID']
        isComplete = request_values[i]['isComplete']
        workevent=models.activity.objects.get(work_order_no=wid,emp_id = eid,date = datetime.date.today())
        workevent.is_complete=isComplete
        workevent.actual_time = actual_time
        workevent.submission_remark = remark
        workevent.dependancy = dependancy
        workevent.save() 
    rating = request_values['Rating']['Rating']
    event=models.employee_rating(emp_id=eid,date = datetime.date.today(),rating = int(rating)
    )
    event.save()
    result={'status':"success",'error':"None"}       
    return JsonResponse(result)

def creatework(request):
    request_values = json.loads(request.body.decode('utf-8'))
    print(request_values)
    workid=request_values['workid']
    activity=request_values['name']
    eid=request_values['empid']
    plannedtime=request_values['plannedtime']
    remark=request_values['remarks'] 
    event=models.activity(emp_id=eid,
    work_order_no=workid,
    activity=activity,
    planned_time=plannedtime,
    work_remark=remark,
    date = datetime.date.today())
    event.save()
    result={'status':"success",'error':"None"}        
    return JsonResponse(result)


def employeedetail(request):
    request_values = json.loads(request.body.decode('utf-8'))
    print(request_values)
    fname=request_values['fname']
    lname=request_values['lname']
    eid=int(request_values['empid'])
    phone=request_values['phone']
    email=request_values['email']
    address=request_values['address']   
    district=request_values['district']
    state=request_values['state']
    qualification=request_values['education']
    date = datetime.datetime.strptime(request_values['DOJ'], r"%Y-%m-%d")
    experience=int(request_values['experience'])
    event=models.Employee(emp_id=eid,
    first_name=fname,
    last_name=lname,
    phone_no=phone,
    email=email,
    street=address,
    district = district,
    state = state,
    educational_qualification = qualification,
    date_of_joining = date,
    experience = experience)
    event.save()
    workevent=models.login_table.objects.get(id = eid)
    workevent.status = 1
    workevent.save()
    result={'status':"success",'error':"None"}        
    return JsonResponse(result)

def changePass(request):
    request_values = json.loads(request.body.decode('utf-8'))
    print(request_values)
    eid =request_values['empid']
    password = request_values['password']
    event = models.login.objects.get(empid = eid)
    event.password = password
    event.save()
    result={'status':"success",'error':"None"}        
    return JsonResponse(result)


     


#To save file in server
# path = 'homepage/templates/homepage/file.html'
 #   template = r'C:\Users\DELL\Desktop\kathi\kathi\homepage\templates\homepage\index.html'
  #  render_to_file(template_name=template,
   #                   file_path=path)

#def render_to_file(template_name, file_path, context={}):
 #   open(file_path, "w").write(render_to_string(template_name, context))
