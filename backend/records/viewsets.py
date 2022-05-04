from rest_framework import viewsets
from . import models
from . import seirializers


class UserViewset(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = seirializers.UserSerializer
