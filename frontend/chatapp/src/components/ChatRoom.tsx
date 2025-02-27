import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Message } from '../types/Message';

interface ChatRoomProps {
  messages: Message[];
  username: string;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ messages, username }) => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        height: '70vh',
        overflowY: 'auto',
        p: 2,
        borderRadius: '8px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <h2>Welcome, {username}</h2>
      {messages.map((msg, index) => (
        <Box 
          key={index} 
          mb={1} 
          p={1}
          sx={{
            backgroundColor: msg.user === username ? '#d1e7dd' : '#ffffff',
            borderRadius: '8px',
            maxWidth: '75%',
            alignSelf: msg.user === username ? 'flex-end' : 'flex-start',
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            {msg.user}
          </Typography>
          <Typography variant="body1">{msg.text}</Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default ChatRoom;