from django.http import JsonResponse
from .models import Service,Signup
from .serializers import ServiceSerializer,SignSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password
from rest_framework import status
@api_view(["POST"])
def Sign_In(request):
 if request.method == "POST":
     email = request.data["email"]  
     password = request.data["password"]
     if email and password:
       try:
            signin = Signup.objects.get(email=email)
       except Signup.DoesNotExist:
            return JsonResponse({"message": "Invalid username or password."}, status=400)
     if check_password(password, signin.password):
       return JsonResponse({"message": "Sign in successful!"})
     else:
       return JsonResponse({"message": "Invalid username or password."}, status=400)
 else:
        return JsonResponse({"message": "Email and password are required fields."}, status=400)
    # return JsonResponse({"message": "Method not allowed."}, status=405)
@api_view(["GET","POST"])
def Sign_up(request):
 if request.method == "GET": 
     signup = Signup.objects.all()
     serializer = SignSerializer(signup,many=True)
     return JsonResponse({"data":serializer.data})    
 if request.method == "POST":
     serializer = SignSerializer(data=request.data)
     if serializer.is_valid():
        serializer.save()
        return JsonResponse({"signupdata":serializer.data},status=status.HTTP_201_CREATED)
     return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   



@api_view(["GET","POST"])
def service_message(request,format=None):
 if request.method == "GET": 
     services = Service.objects.all()
     serializer = ServiceSerializer(services,many=True)
     return JsonResponse({"services":serializer.data})    
 if request.method == "POST":
     serializer = ServiceSerializer(data=request.data)
     if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
