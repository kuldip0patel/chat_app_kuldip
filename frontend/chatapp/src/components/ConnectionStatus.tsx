
import React from 'react';

type Props = {
  isConnected: boolean;
};

const ConnectionStatus: React.FC<Props> = ({ isConnected }) => {
  return (
    <div style={{ color: isConnected ? 'green' : 'red' }}>
      {isConnected ? 'Connected' : 'Disconnected'}
    </div>
  );
};

export default ConnectionStatus;