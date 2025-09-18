from pydantic import BaseModel, EmailStr

class ContactForm(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    phone: str | None = None
    address: str | None = None
    message: str