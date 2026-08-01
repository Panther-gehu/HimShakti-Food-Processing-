from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

# Database Connection
from database import get_db

# Database Models
from models.order_db import OrderDB
from models.product_db import ProductDB

# Pydantic Model
from models.order import OrderCreate
# JWT Authentication
from auth_middleware import verify_token


# -------------------------------
# ROUTER CONFIGURATION
# -------------------------------
router = APIRouter(
    prefix="/api/orders",
    tags=["Orders"]
)


# =====================================================
# CREATE ORDER
# Endpoint: POST /api/orders
# Purpose: Place a new order
# =====================================================
@router.post("/", status_code=201)
def create_order(
    order: OrderCreate,
    db: Session = Depends(get_db),
    token: dict = Depends(verify_token)
):

    # Check whether product exists
    product = db.query(ProductDB).filter(
        ProductDB.id == order.product_id
    ).first()

    if product is None:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    # Create new order
    new_order = OrderDB(
        user_id=order.user_id,
        product_id=order.product_id,
        quantity=order.quantity
    )

    # Save order into database
    db.add(new_order)
    db.commit()
    db.refresh(new_order)

    return {
        "message": "Order placed successfully",
        "order": new_order
    }


# =====================================================
# GET ALL ORDERS
# Endpoint: GET /api/orders
# Purpose: Fetch all orders with product details
# =====================================================
@router.get("/")
def get_orders(
    db: Session = Depends(get_db),
    token: dict = Depends(verify_token)
):

    # Get logged-in user's ID from JWT
    user_id = token.get("user_id")

# Fetch only this user's orders
    orders = db.query(OrderDB).filter(
    OrderDB.user_id == user_id
).all()

    result = []

    # Attach product information with every order
    for order in orders:

        product = db.query(ProductDB).filter(
            ProductDB.id == order.product_id
        ).first()

        result.append({
            "id": order.id,
            "user_id": order.user_id,
            "product_id": order.product_id,
            "product_name": product.name if product else "Unknown",
            "price": product.price if product else 0,
            "quantity": order.quantity,
            "created_at": order.created_at
        })

    return result


# =====================================================
# GET ORDER BY ID
# Endpoint: GET /api/orders/{order_id}
# Purpose: Fetch a single order with product details
# =====================================================
@router.get("/{order_id}")
def get_order(
    order_id: int,
    db: Session = Depends(get_db),
    token: dict = Depends(verify_token)
):

    # Find order by ID
    order = db.query(OrderDB).filter(
        OrderDB.id == order_id
    ).first()

    if order is None:
        raise HTTPException(
            status_code=404,
            detail="Order not found"
        )

    # Get product information
    product = db.query(ProductDB).filter(
        ProductDB.id == order.product_id
    ).first()

    return {
        "id": order.id,
        "user_id": order.user_id,
        "product_id": order.product_id,
        "product_name": product.name if product else "Unknown",
        "price": product.price if product else 0,
        "quantity": order.quantity,
        "created_at": order.created_at
    }


# =====================================================
# DELETE ORDER
# Endpoint: DELETE /api/orders/{order_id}
# Purpose: Delete an existing order
# =====================================================
@router.delete("/{order_id}")
def delete_order(
    order_id: int,
    db: Session = Depends(get_db),
    token: dict = Depends(verify_token)
):

    # Find order
    order = db.query(OrderDB).filter(
        OrderDB.id == order_id
    ).first()

    if order is None:
        raise HTTPException(
            status_code=404,
            detail="Order not found"
        )

    # Delete order
    db.delete(order)
    db.commit()

    return {
        "message": "Order deleted successfully"
    }
