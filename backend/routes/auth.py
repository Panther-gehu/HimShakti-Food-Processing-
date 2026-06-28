from fastapi import APIRouter, HTTPException
from data.users import users
from models.user import UserSignup, UserLogin

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"]
)


# SIGNUP
@router.post("/signup", status_code=201)
def signup(user: UserSignup):

    # Check if username already exists
    for existing_user in users:
        if existing_user["username"] == user.username:
            raise HTTPException(
                status_code=400,
                detail="Username already exists"
            )

    # Generate new ID automatically
    new_id = len(users) + 1

    new_user = {
        "id": new_id,
        "username": user.username,
        "password": user.password
    }

    users.append(new_user)

    return {
        "message": "User registered successfully",
        "user": new_user
    }


# LOGIN
@router.post("/login")
def login(user: UserLogin):

    for existing_user in users:

        if (
            existing_user["username"] == user.username
            and existing_user["password"] == user.password
        ):

            return {
                "message": "Login successful",
                "user": existing_user
            }

    raise HTTPException(
        status_code=401,
        detail="Invalid username or password"
    )