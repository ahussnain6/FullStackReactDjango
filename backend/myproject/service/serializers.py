from rest_framework import serializers
from .models import Service,Signup
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "id","name","email","number","message"
class SignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signup
        fields = "id","username","email","password"