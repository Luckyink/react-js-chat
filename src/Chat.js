import React, { useState } from 'react';

// COMPONENT
import PeopleList from './components/PeopleList';
import ChatArea from './components/ChatArea';
import Login from './Login';
import { usePeople } from './contexts/peopleContext';
import { useChat } from './contexts/chatContext';

// STYLE

const Chat = () => {
  
  const { people, updatePeople } = usePeople();
  const [letChat, setChat] = useState(false);
  const [person, setPerson] = useState('');
  const { chat, updateChat } = useChat();
 
 

  const login1Handler = (username) => {
      setChat(true);
      updatePeople(username)
      setPerson(username);
    };

  const addChatHandler = (message) => {
    console.log(person)
    let postComment = 
          {
          from: person,
          username: person,
          message,
          created_at: Date.now(),
        };
        
        updateChat(postComment);
  }

  return !letChat ? (
    <Login loginHandler={login1Handler} />
  ) : (
    <div class="card chat-app">
        <ChatArea person={person} chat={chat} onPostMessage={addChatHandler} />
        <PeopleList peopleList={people} /> 
    </div>
  );
};

export default React.memo(Chat);
