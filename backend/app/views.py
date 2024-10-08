from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import employeeModel
from .serializers import employeeSerializer



class EmployeeAPI(APIView):

    def get(self,request):

        try:
            obj=employeeModel.objects.all()
            serializer=employeeSerializer(obj,many=True)

            return Response(serializer.data,status=status.HTTP_200_OK)

        except Exception as e:
            print(e)

    def post(self,request):

        try:
            
            serializer=employeeSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            
            return Response(serializer.errors,status=status.HTTP_406_NOT_ACCEPTABLE)

        except Exception as e:
            print(e)

class EmployeeUpdate(APIView):

    def get(self,request,pk):
        
        obj=employeeModel.objects.get(id=pk)
        serializer=employeeSerializer(obj)

        return Response(serializer.data,status=status.HTTP_200_OK)
    
    def put(self,request,pk):

        try:
            data=request.data 
            obj=employeeModel.objects.get(id=pk)

            serializer=employeeSerializer(obj,data=data,partial=True)

            if serializer.is_valid():
                serializer.save()

                return Response(serializer.data,status=status.HTTP_200_OK)
            
            return Response(serializer.errors,status=status.HTTP_304_NOT_MODIFIED)

        except Exception as e:
            print(e)


    def delete(self,request,pk):

        try:
            obj=employeeModel.objects.get(id=pk)
            obj.delete()

            return Response(status=status.HTTP_204_NO_CONTENT)

        except Exception as e:
            print(e)


            
        
