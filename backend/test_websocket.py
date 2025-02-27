import asyncio
import websockets

async def test_websocket(username):
    uri = f"ws://localhost:8000/ws/kuldip"  # Adjust the port if necessary
    async with websockets.connect(uri) as websocket:
        # Send a message
        await websocket.send("Hello, WebSocket!")
        print("Message sent!")

        # Wait for a response
        response = await websocket.recv()
        print(f"Response received: {response}")

# Run the test
username = "test_user"
asyncio.run(test_websocket(username)) 