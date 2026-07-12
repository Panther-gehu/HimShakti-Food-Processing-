from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from models.order_db import OrderDB

# Database Connection
from database import get_db

# Database Models
from models.cart_db import CartDB
from models.cart import CartCreate
from models.product_db import ProductDB

# JWT Authentication
from auth_middleware import verify_token

# Router Configuration
router = APIRouter(
    prefix="/api/cart",
    tags=["Cart"]
)


# =====================================================
# ADD PRODUCT TO CART
# Endpoint: POST /api/cart
# =====================================================
@router.post("/", status_code=201)
def add_to_cart(
    cart: CartCreate,
    db: Session = Depends(get_db),
    token: dict = Depends(verify_token)
):

    # Check if product exists
    product = db.query(ProductDB).filter(
        ProductDB.id == cart.product_id
    ).first()

    if product is None:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    # Check if product already exists in user's cart
    existing_item = db.query(CartDB).filter(
        CartDB.user_id == cart.user_id,
        CartDB.product_id == cart.product_id
    ).first()

    # Increase quantity if already present
    if existing_item:
        existing_item.quantity += cart.quantity
        db.commit()
        db.refresh(existing_item)

        return {
            "message": "Cart updated successfully",
            "cart": existing_item
        }

    # Add new cart item
    new_item = CartDB(
        user_id=cart.user_id,
        product_id=cart.product_id,
        quantity=cart.quantity
    )

    db.add(new_item)
    db.commit()
    db.refresh(new_item)

    return {
        "message": "Product added to cart",
        "cart": new_item
    }


# =====================================================
# GET ALL CART ITEMS
# Endpoint: GET /api/cart
# =====================================================
@router.get("/")
@router.get("/")
def get_cart(
    db: Session = Depends(get_db),
    token: dict = Depends(verify_token)
):

    cart_items = db.query(CartDB).all()

    result = []

    for item in cart_items:

        product = db.query(ProductDB).filter(
            ProductDB.id == item.product_id
        ).first()

        result.append({
            "id": item.id,
            "user_id": item.user_id,
            "product_id": item.product_id,
            "product_name": product.name if product else "Unknown",
            "price": product.price if product else 0,
            "quantity": item.quantity,
            "created_at": item.created_at
        })

    return result


# =====================================================
# UPDATE CART QUANTITY
# Endpoint: PUT /api/cart/{cart_id}
# =====================================================
@router.put("/{cart_id}")
def update_cart(
    cart_id: int,
    cart: CartCreate,
    db: Session = Depends(get_db),
    token: dict = Depends(verify_token)
):

    item = db.query(CartDB).filter(
        CartDB.id == cart_id
    ).first()

    if item is None:
        raise HTTPException(
            status_code=404,
            detail="Cart item not found"
        )

    item.quantity = cart.quantity

    db.commit()
    db.refresh(item)

    return {
        "message": "Cart updated successfully",
        "cart": item
    }


# =====================================================
# DELETE CART ITEM
# Endpoint: DELETE /api/cart/{cart_id}
# =====================================================
@router.delete("/{cart_id}")
def delete_cart(
    cart_id: int,
    db: Session = Depends(get_db),
    token: dict = Depends(verify_token)
):
    item = db.query(CartDB).filter(
        CartDB.id == cart_id
    ).first()

    if item is None:
        raise HTTPException(
            status_code=404,
            detail="Cart item not found"
        )

    db.delete(item)
    db.commit()

    return {
        "message": "Product removed from cart"
    }
    
# =====================================================
# CHECKOUT
# Endpoint: POST /api/cart/checkout/{user_id}
# =====================================================
@router.post("/checkout/{user_id}")
def checkout(
    user_id: int,
    db: Session = Depends(get_db),
    token: dict = Depends(verify_token)
):

    # Get user's cart items
    cart_items = db.query(CartDB).filter(
        CartDB.user_id == user_id
    ).all()

    if not cart_items:
        raise HTTPException(
            status_code=404,
            detail="Cart is empty"
        )

    # Create orders
    for item in cart_items:

        new_order = OrderDB(
            user_id=item.user_id,
            product_id=item.product_id,
            quantity=item.quantity
        )

        db.add(new_order)

    # Delete cart items
    for item in cart_items:
        db.delete(item)

    db.commit()

    return {
        "message": "Order placed successfully"
    }