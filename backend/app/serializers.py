from rest_framework import serializers
from .models import employeeModel

class employeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=employeeModel
        fields='__all__'
        