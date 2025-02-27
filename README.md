# Chat Application Using Next.JS and Fast API


## BACKEND:

### FastAPI WebSocket Chat Backend

#### Setup

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


### Deployed Live Chat Server:
https://chat-app-kuldip-server.onrender.com/

## FRONTEND:

### Getting Started


```bash
npm run dev
```


### ENV:
- Create .env.local file in /frontend/chatapp folder.
- Define the following variable: NEXT_PUBLIC_WEBSOCKET_URL
- e.g. NEXT_PUBLIC_WEBSOCKET_URL=ws://localhost:8000/ws/

####  WebSocket Connection
``` const ws = new WebSocket("ws://localhost:8000/ws/${username}"); ```

### Use:
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployed Live Site:
https://chat-app-kuldip-website.onrender.com/
