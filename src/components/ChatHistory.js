import React from 'react';
import Message from './Message';

const ChatHistory = ({chatHistory}) => {

  return (
    <div class="chat-history">
      <ul class="m-b-0">
        {
          chatHistory && // Check if todoItems exists
          Array.isArray(chatHistory) && // Check if it's an array
          chatHistory.length > 0 && // The array should not be empty
          chatHistory.map(({ from, message, created_at, username }) => (
            <Message from={from} message={message} created_at={created_at} username={username} />
          ))
        }
      </ul>
    </div>
  )
};

export default React.memo(ChatHistory);