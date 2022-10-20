import React from 'react';
import ChatHistory from './ChatHistory';
import PostMessage from './PostMessage';

// COMPONENT
const ChatArea = ({chatHistory,onPostMessage}) => {
  return (
      <div class="chat">
        <ChatHistory chatHistory={chatHistory}/>
        <PostMessage onPostMessage = {onPostMessage} />
      </div>
  )
};

export default React.memo(ChatArea);