# FastAPI WebSocket Chat Backend

## Setup

1. Create a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # Mac/Linux
    ```
2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Run the server:
    ```bash
    uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
    ```
4. WebSocket endpoint:
    - ws://localhost:8000/ws/{username}
5. API root:
    - http://localhost:8000
