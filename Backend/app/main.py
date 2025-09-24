from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import contact

import os
import uvicorn

app = FastAPI()

PORT = int(os.environ.get("PORT", 8000))

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router, prefix="/contact")

@app.get('/')
def root():
    return {"message": "hello, friend"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=PORT)