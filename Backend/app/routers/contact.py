from fastapi import APIRouter
from app.schemas.contact import ContactForm

router = APIRouter()

@router.post("/")
async def send_contact(form: ContactForm):
    print(form)
    return {"status": "success", "message": "Сообщение получено"}