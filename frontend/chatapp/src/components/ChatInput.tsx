// src/components/ChatInput.tsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

type Props = {
  onSendMessage: (text: string) => void;
};

const ChatInput: React.FC<Props> = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    console.log("Send button clicked");
    console.log(text);
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as React.FormEvent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        fullWidth
        sx={{ 
          // border: '1px solid #ccc', // reverted change
          // width: '50%' // reverted change
        }}
        value={text} // Bind the input value to state
        onChange={(e) => setText(e.target.value)} // Update state on input change        
        placeholder="Type your message..."
        onKeyDown={handleKeyDown}
      />
      <Button 
        variant="contained" 
        type = "submit"
        style={{ backgroundColor: 'gray', color: 'white' }}
      >
        Send
      </Button>
    </form>
  );
};

export default ChatInput;