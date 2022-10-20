import React from 'react';
import ChatHistory from './ChatHistory';

// COMPONENT
const ChatArea = ({chatHistory,onPostMessage}) => {
  return (
      <div class="chat">
        <ChatHistory chatHistory={chatHistory}/>
      </div>
  )
};

export default React.memo(ChatArea);