from fastapi import APIRouter

import os
from dotenv import load_dotenv
from google.genai import Client
from fastapi import HTTPException
from models.ai import ProductDescriptionRequest


from pathlib import Path

env_path = Path(__file__).resolve().parent.parent / ".env"
print("ENV Path:", env_path)
print("ENV Exists:", env_path.exists())

load_dotenv(dotenv_path=env_path)
print("Gemini Key:", os.getenv("GEMINI_API_KEY"))

client = Client(api_key=os.getenv("GEMINI_API_KEY"))

router = APIRouter(
    prefix="/api/ai",
    tags=["AI"]
)

@router.get("/test")
def test_gemini():
    try:
        response = client.models.generate_content(
            model="gemini-flash-latest",
            contents="Say Hello from HimShakti AI."
        )

        return {
            "success": True,
            "response": response.text
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.post("/generate-description")
def generate_description(request: ProductDescriptionRequest):
    prompt = f"""
You are an expert e-commerce copywriter.

Generate a product listing for this product.

Product Name: {request.product_name}
Weight: {request.weight}
Price: {request.price}
Description: {request.short_description}
Tone: {request.tone}

Rules:
- Plain text only.
- No Markdown.
- No *, #, bullets or numbering.
- Keep it under 180 words.

Return EXACTLY in this format:

Product Title:
<one line>

Marketing Tagline:
<one line>

Product Description:
<one paragraph>
"""

    response = client.models.generate_content(
        model="gemini-flash-latest",
        contents=prompt
    )

    return {
        "success": True,
        "result": response.text
    }