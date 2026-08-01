from fastapi import APIRouter, HTTPException, Depends, Request
from sqlalchemy.orm import Session

from database import get_db
from models.user_db import UserDB
from models.user import UserSignup, UserLogin

from auth import (
    hash_password,
    verify_password,
    create_access_token
)

from limiter import limiter

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"]
)

# ==========================================
# SIGNUP
# ==========================================
@router.post("/signup", status_code=201)
@limiter.limit("5/minute")
def signup(
    request: Request,
    user: UserSignup,
    db: Session = Depends(get_db)
):

    existing_user = db.query(UserDB).filter(
        UserDB.username == user.username
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Username already exists"
        )

    hashed_password = hash_password(user.password)

    new_user = UserDB(
        username=user.username,
        password=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully",
        "user": {
            "id": new_user.id,
            "username": new_user.username
        }
    }


# ==========================================
# LOGIN
# ==========================================
@router.post("/login")
@limiter.limit("5/minute")
def login(
    request: Request,
    user: UserLogin,
    db: Session = Depends(get_db)
):

    existing_user = db.query(UserDB).filter(
        UserDB.username == user.username
    ).first()

    if existing_user is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    if not verify_password(
        user.password,
        existing_user.password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    access_token = create_access_token(
    data={
        "sub": existing_user.username,
        "user_id": existing_user.id
    }
)

    return {
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": existing_user.id,
            "username": existing_user.username
        }
    }
