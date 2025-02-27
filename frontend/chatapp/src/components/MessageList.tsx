import React from 'react';
import { Message } from '../types/Message';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message.id} className="message">
          <span className="user" style={{ color: 'blue' }}>{message.user}: </span>
          <span className="text" style={{ color: 'darkgray' }}>{message.text}</span>
          <span className="timestamp" style={{ color: 'lightgray' }}>{new Date(message.timestamp).toLocaleTimeString()}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
