from fastapi import FastAPI

from app.routers import contact

app = FastAPI()

app.include_router(contact.router, prefix="/contact")

@app.get('/')
def root():
    return {"message": "hello, friend"}