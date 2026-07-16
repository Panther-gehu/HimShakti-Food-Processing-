from pydantic import BaseModel, Field


# ===============================
# User Signup Model
# ===============================
class UserSignup(BaseModel):

    username: str = Field(
        ...,
        min_length=3,
        max_length=30,
        description="Username must be between 3 and 30 characters"
    )

    password: str = Field(
        ...,
        min_length=6,
        max_length=50,
        description="Password must be at least 6 characters"
    )


# ===============================
# User Login Model
# ===============================
class UserLogin(BaseModel):

    username: str = Field(
        ...,
        min_length=3,
        max_length=30
    )

    password: str = Field(
        ...,
        min_length=6,
        max_length=50
    )
    
