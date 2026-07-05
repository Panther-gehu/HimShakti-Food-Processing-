from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from database import get_db
from models.user_db import UserDB
from models.user import UserSignup, UserLogin

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"]
)


# SIGNUP
@router.post("/signup", status_code=201)
def signup(
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

    new_user = UserDB(
        username=user.username,
        password=user.password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully",
        "user": new_user
    }


# LOGIN
@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    existing_user = db.query(UserDB).filter(
        UserDB.username == user.username,
        UserDB.password == user.password
    ).first()

    if existing_user:
        return {
            "message": "Login successful",
            "user": existing_user
        }

    raise HTTPException(
        status_code=401,
        detail="Invalid username or password"
    )
