from email.message import Message

from fastapi import APIRouter, HTTPException
from app.schemas.contact import ContactForm
from fastapi.responses import JSONResponse
import smtplib
from email.mime.text import MIMEText

router = APIRouter()

@router.post("/")
async def send_contact(form: ContactForm):
    print(form)
    return {"status": "success", "message": "Сообщение получено"}

def send_email(contact: ContactForm):
    try:
        sender_email = "your_email"
        receive_email = "your email"
        password = "app_password"

        msg = MIMEText(f"""
        First name: {contact.first_name}
        Last Name: {contact.last_name}
        Email: {contact.email}
        Phone: {contact.phone}
        Address: {contact.address}
        Message: {contact.message}
        """)

        msg['Subject'] = f'New contact from {contact.first_name} {contact.last_name}'
        msg['From'] = sender_email
        msg['To'] = receive_email

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, password)
            server.send_message(msg)
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail="Failed to send email")

@router.post("/send")
async def send_contact(contact: ContactForm):
    send_email(contact)
    return JSONResponse(content={"message": "Message sent successfully"})
