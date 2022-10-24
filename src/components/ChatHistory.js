import React from 'react';
import Message from './Message';

const ChatHistory = ({person, chatHistory}) => {

  return (
    <div class="chat-history overflow-auto">
      <ul class="m-b-0">
        {
          chatHistory?.map(({ from, message, created_at, username }, index) => (
            <Message key={index} person={person} from={from} message={message} created_at={created_at} username={username} />
          ))
        }
      </ul>
    </div>
  )
};

export default React.memo(ChatHistory);