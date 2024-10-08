from django.db import models


class employeeModel(models.Model):
    
    name=models.CharField(max_length=50)
    location=models.CharField(max_length=50)
    salary=models.IntegerField()
    joining_date=models.DateField(auto_now_add=True)


    def __str__(self): return self.name

    
