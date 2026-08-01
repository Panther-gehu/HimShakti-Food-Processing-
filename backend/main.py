from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import os
from dotenv import load_dotenv

from database import engine, Base

from routes.products import router as product_router
from routes.auth import router as auth_router
from routes.orders import router as orders_router
from routes.cart import router as cart_router
from routes.ai import router as ai_router

from limiter import limiter
from slowapi.middleware import SlowAPIMiddleware

from routes.google_auth import router as google_router
from starlette.middleware.sessions import SessionMiddleware
from routes.dashboard import router as dashboard_router

# ==========================================
# Load Environment Variables
# ==========================================
load_dotenv()

# ==========================================
# Create FastAPI App
# ==========================================
app = FastAPI(title="HimShakti Backend API")

app.add_middleware(
    SessionMiddleware,
    secret_key=os.getenv("JWT_SECRET")
)

# ==========================================
# Rate Limiter
# ==========================================
app.state.limiter = limiter
app.add_middleware(SlowAPIMiddleware)

# ==========================================
# CORS Configuration
# ==========================================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],          # Temporary for deployment
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================================
# Create Database Tables
# ==========================================
Base.metadata.create_all(bind=engine)

# ==========================================
# Home Route
# ==========================================
@app.get("/")
def home():
    return {
        "message": "Welcome to HimShakti Backend"
    }

# ==========================================
# Register Routers
# ==========================================
app.include_router(product_router)
app.include_router(auth_router)
app.include_router(orders_router)
app.include_router(cart_router)
app.include_router(google_router)
app.include_router(ai_router)
app.include_router(dashboard_router)
