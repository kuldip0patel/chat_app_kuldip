# Chat Application Using Next.JS and Fast API


## BACEKEND:

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



## FRONT END:

### Getting Started


```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

###  WebSocket Connection
``` const ws = new WebSocket("ws://localhost:8000/ws/${username}"); ```

### Project Structure
/frontend

│-- /components

│   │-- ChatInput.tsx

│   │-- MessageList.tsx

│   │-- ConnectionStatus.tsx

│-- /types

│   │-- Message.ts

│-- /app

│   │-- page.tsx

│-- /public

│-- /styles

│-- /node_modules

│-- .gitignore

│-- next.config.js

│-- package.json

│-- tsconfig.json

│-- README.md

