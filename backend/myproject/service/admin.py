# Register your models here.
from django.contrib import admin
from service.models import Service,Signup,Signin
class ServiceAdmin(admin.ModelAdmin):
    list_display=("name","email","number","message")
admin.site.register(Service,ServiceAdmin)
class SignUp(admin.ModelAdmin):
    list_display=("username","email","password")
admin.site.register(Signup,SignUp)