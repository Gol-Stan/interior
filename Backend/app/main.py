from fastapi import FastAPI

from app.routers import contacts

app = FastAPI()

app.include_router(contacts.router, prefix="/contacts")

@app.get('/')
def root():
    return {"message": "hello, friend"}

