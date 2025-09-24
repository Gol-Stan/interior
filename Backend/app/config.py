import os
from dotenv import load_dotenv

load_dotenv()

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")
EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER", EMAIL_USER)

# Проверка
print("EMAIL_USER:", EMAIL_USER)
print("EMAIL_PASS:", EMAIL_PASS)
print("EMAIL_RECEIVER:", EMAIL_RECEIVER)