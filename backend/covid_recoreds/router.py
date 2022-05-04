
from records.viewsets import UserViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('user', UserViewset)
#localhost/api/user ----list()
#localhost/api/user/5 ----retrive
