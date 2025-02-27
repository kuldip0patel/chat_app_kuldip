from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import uuid;
import json
from datetime import datetime, timezone
chat_server = FastAPI()

# TODO: Allow CORS for frontend for fast dev, later to be updated for better security
chat_server.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Utils:
    def get_formatted_msg(username, text, msg_type="MSG"):
        #TODO: identify message type: e.g. MSG, JOINED, LEFT etc.
        iso_timestamp = datetime.now(timezone.utc).isoformat(timespec="milliseconds").replace("+00:00", "Z")
        msg_dict = {'id': str(uuid.uuid4()), 'user' :username, 'text': text, 'timestamp': iso_timestamp, 'msg_type': msg_type }
        #TODO: add a logger with dev/prod/local configs later.
        print(msg_dict)
        msg_str = json.dumps(msg_dict)
        return msg_str

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []
        self.usernames = {}

    async def connect(self, websocket: WebSocket, username: str):
        await websocket.accept()
        self.active_connections.append(websocket)
        self.usernames[websocket] = username
        msg = Utils.get_formatted_msg(username=username, text=" has *JOINED* the chat ")
        await self.broadcast(msg)

    def disconnect(self, websocket: WebSocket):
        username = self.usernames.pop(websocket, "Someone")
        self.active_connections.remove(websocket)
        return username

    async def send_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)

manager = ConnectionManager()

@chat_server.websocket("/ws/{username}")
async def websocket_endpoint(websocket: WebSocket, username: str):
    await manager.connect(websocket, username)
    try:
        while True:
            data = await websocket.receive_text()
            print(data)
            await manager.broadcast(f"{data}")
    except WebSocketDisconnect:
        username = manager.disconnect(websocket)
        msg = Utils.get_formatted_msg(username=username, text=  " has _LEFT_ the chat ")
        await manager.broadcast(msg)        