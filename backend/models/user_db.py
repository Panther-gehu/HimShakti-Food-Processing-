from sqlalchemy import Column, Integer, String, Boolean
from database import Base


class UserDB(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    username = Column(String, unique=True, nullable=False, index=True)

    email = Column(String, unique=True, nullable=True, index=True)

    password = Column(String, nullable=False)

    is_google_user = Column(Boolean, default=False)

    # User Role
    role = Column(String, default="user")
