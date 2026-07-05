from fastapi import APIRouter, HTTPException, Query, Depends
from sqlalchemy.orm import Session

from database import get_db
from models.product_db import ProductDB
from models.product import Product

router = APIRouter(
    prefix="/api/products",
    tags=["Products"]
)


# SEARCH PRODUCTS
@router.get("/search")
def search_products(
    name: str = Query(None),
    db: Session = Depends(get_db)
):
    if not name:
        return db.query(ProductDB).all()

    products = db.query(ProductDB).filter(
        ProductDB.name.ilike(f"%{name}%")
    ).all()

    return products


# GET ALL PRODUCTS
@router.get("/")
def get_products(db: Session = Depends(get_db)):
    return db.query(ProductDB).all()


# GET PRODUCT BY ID
@router.get("/{product_id}")
def get_product(
    product_id: int,
    db: Session = Depends(get_db)
):
    product = db.query(ProductDB).filter(
        ProductDB.id == product_id
    ).first()

    if product is None:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    return product




# ADD PRODUCT
@router.post("/", status_code=201)
def add_product(product: Product, db: Session = Depends(get_db)):

    existing = db.query(ProductDB).filter(ProductDB.id == product.id).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Product ID already exists"
        )

    new_product = ProductDB(
        id=product.id,
        name=product.name,
        price=product.price,
        category=product.category,
        description=product.description,
    )

    db.add(new_product)
    db.commit()
    db.refresh(new_product)

    return {
        "message": "Product added successfully",
        "product": new_product
    }

# UPDATE PRODUCT
@router.put("/{product_id}")
def update_product(
    product_id: int,
    updated_product: Product,
    db: Session = Depends(get_db)
):
    product = db.query(ProductDB).filter(
        ProductDB.id == product_id
    ).first()

    if product is None:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    product.name = updated_product.name
    product.price = updated_product.price
    product.category = updated_product.category
    product.description = updated_product.description

    db.commit()
    db.refresh(product)

    return {
        "message": "Product updated successfully",
        "product": product
    }


# DELETE PRODUCT
@router.delete("/{product_id}")
def delete_product(
    product_id: int,
    db: Session = Depends(get_db)
):
    product = db.query(ProductDB).filter(
        ProductDB.id == product_id
    ).first()

    if product is None:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    db.delete(product)
    db.commit()

    return {
        "message": "Product deleted successfully"
    }
