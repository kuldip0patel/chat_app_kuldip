// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import ChatInput from '../components/ChatInput';
import MessageList from '../components/MessageList';
import ConnectionStatus from '../components/ConnectionStatus';
import { Message } from '../types/Message';
import { v4 as uuidv4 } from 'uuid';


//TODO: Take input from the user with full auth module later
const randomWord = Array.from({ length: 10 }, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join('');
const username = randomWord + "@mailinator.com"
console.log(username);

const WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL || `ws://localhost:8000/ws/${username}`;
console.log(WEBSOCKET_URL)


const HomePage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [currentTime, setCurrentTime] = useState(Date.now());

  const [isClient, setIsClient] = useState(false);
  
  const [initialTimestamp] = useState(Date.now()); // Store the initial timestamp


  useEffect(() => {
    setIsClient(true);

    if (typeof window !== 'undefined') {
      const socket = new WebSocket(WEBSOCKET_URL);

      socket.onopen = () => {
        setIsConnected(true);
      };

      socket.onmessage = (event) => {
        console.log(event.data)
        const newMessage: Message = JSON.parse(event.data);
        setMessages((prev) => [...prev, newMessage]);
      };

      socket.onclose = () => {
        setIsConnected(false);
      };

      setWs(socket);

      return () => {
        socket.close();
      };
    }
  }, []);

  useEffect(() => {
    setCurrentTime(Date.now());
  }, []);

  const handleSendMessage = (text: string) => {
    console.log("INSIDE handle msg");
    console.log(text);
    if (ws && ws.readyState === WebSocket.OPEN) {
      const newMessage = {
        id: uuidv4(), // Use uuidv4 to generate a UUID
        user: username,
        text,
        timestamp: new Date(initialTimestamp).toISOString(),
      };
      ws.send(JSON.stringify(newMessage));
    }
  };

  if (!isClient) {
    return null; // Or a loading spinner
  }

  
  return (
    <div>        <h1>Real-Time Chat</h1>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
      <div>
        <ConnectionStatus isConnected={isConnected} />
        <MessageList messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
    </div>
  );
};

export default HomePage;
