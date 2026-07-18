from pydantic import BaseModel


class ProductDescriptionRequest(BaseModel):
    product_name: str
    weight: str
    price: str
    short_description: str
    tone: str