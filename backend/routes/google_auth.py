from fastapi import APIRouter
from authlib.integrations.starlette_client import OAuth
from starlette.config import Config
import os
from fastapi import Request

from fastapi import Depends
from sqlalchemy.orm import Session
from database import get_db

from models.user_db import UserDB
from auth import create_access_token, hash_password
from fastapi.responses import RedirectResponse

config = Config(".env")

oauth = OAuth(config)

oauth.register(
    name="google",
    client_id=os.getenv("GOOGLE_CLIENT_ID"),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={
        "scope": "openid email profile"
    },
)

router = APIRouter(
    prefix="/api/auth",
    tags=["Google OAuth"]
)

@router.get("/google/login")
async def google_login(request: Request):
    redirect_uri = os.getenv("GOOGLE_REDIRECT_URI")
    return await oauth.google.authorize_redirect(
    request,
    redirect_uri,
    prompt="select_account"
)
    
@router.get("/google/callback")
async def google_callback(
    request: Request,
    db: Session = Depends(get_db)
):
    token = await oauth.google.authorize_access_token(request)
    user_info = token.get("userinfo")

    email = user_info["email"]
    name = user_info["name"]

    # Check if user already exists
    user = db.query(UserDB).filter(
        UserDB.email == email
    ).first()

    # Create new Google user if not exists
    if not user:
        user = UserDB(
            username=email.split("@")[0],
            email=email,
            password=hash_password("google_oauth_user"),
            is_google_user=True
        )

        db.add(user)
        db.commit()
        db.refresh(user)

    # Generate JWT
    access_token = create_access_token(
        data={
            "sub": user.username
        }
    )

    frontend_url = (
    "http://localhost:5173/oauth-success"
    f"?token={access_token}"
    f"&id={user.id}"
    f"&username={user.username}"
    f"&email={user.email}"
)

    return RedirectResponse(url=frontend_url)