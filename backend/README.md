# HimShakti Backend

## Tech Stack

- FastAPI
- Python
- Uvicorn

---

## Run Locally

Clone the project

```bash
cd backend
```

Create Virtual Environment

```bash
python -m venv venv
```

Activate Virtual Environment (Windows)

```bash
venv\Scripts\activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Run Server

```bash
uvicorn main:app --reload
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

## Available APIs

- GET /api/products
- GET /api/products/{id}
- POST /api/products
- PUT /api/products/{id}
- DELETE /api/products/{id}
- GET /api/products/search?name=