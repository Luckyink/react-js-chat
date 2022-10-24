import React from 'react';
import ChatHistory from './ChatHistory';
import PostMessage from './PostMessage';

// COMPONENT
const ChatArea = ({person, chat, onPostMessage }) => {

  return (
      <div className="chat">
        <ChatHistory chatHistory={chat} person={person}/>
        <PostMessage onPostMessage = {onPostMessage } />
      </div>
  )
};

export default React.memo(ChatArea);