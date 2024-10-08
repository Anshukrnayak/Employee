from django.contrib import admin
from .models import employeeModel


@admin.register(employeeModel)
class EmployeeAdmin(admin.ModelAdmin):
    list_display=['name','location','salary','joining_date']

    
