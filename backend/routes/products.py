from fastapi import APIRouter, HTTPException, Query
from data.products import products
from models.product import Product

router = APIRouter(
    prefix="/api/products",
    tags=["Products"]
)


# SEARCH PRODUCTS
@router.get("/search")
def search_products(name: str = Query(None)):
    if name is None:
        return products

    result = []

    for product in products:
        if name.lower() in product["name"].lower():
            result.append(product)

    return result


# GET ALL PRODUCTS
@router.get("/")
def get_products():
    return products


# GET PRODUCT BY ID
@router.get("/{product_id}")
def get_product(product_id: int):

    for product in products:
        if product["id"] == product_id:
            return product

    raise HTTPException(
        status_code=404,
        detail="Product not found"
    )


# ADD PRODUCT
@router.post("/", status_code=201)
def add_product(product: Product):

    # Check duplicate ID
    for p in products:
        if p["id"] == product.id:
            raise HTTPException(
                status_code=400,
                detail="Product ID already exists"
            )

    products.append(product.model_dump())

    return {
        "message": "Product added successfully",
        "product": product
    }


# UPDATE PRODUCT
@router.put("/{product_id}")
def update_product(product_id: int, updated_product: Product):

    for product in products:

        if product["id"] == product_id:

            product["id"] = updated_product.id
            product["name"] = updated_product.name
            product["price"] = updated_product.price
            product["category"] = updated_product.category
            product["description"] = updated_product.description

            return {
                "message": "Product updated successfully",
                "product": product
            }

    raise HTTPException(
        status_code=404,
        detail="Product not found"
    )


# DELETE PRODUCT
@router.delete("/{product_id}")
def delete_product(product_id: int):

    for index, product in enumerate(products):

        if product["id"] == product_id:

            deleted_product = products.pop(index)

            return {
                "message": "Product deleted successfully",
                "product": deleted_product
            }

    raise HTTPException(
        status_code=404,
        detail="Product not found"
    )