from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db

from models.product_db import ProductDB
from models.order_db import OrderDB
from models.cart_db import CartDB
from models.user_db import UserDB

router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"]
)

@router.get("/stats")
def get_dashboard_stats(db: Session = Depends(get_db)):
    product_count = db.query(ProductDB).count()
    order_count = db.query(OrderDB).count()
    cart_count = db.query(CartDB).count()
    user_count = db.query(UserDB).count()

    return {
        "products": product_count,
        "orders": order_count,
        "cart": cart_count,
        "users": user_count,
    }