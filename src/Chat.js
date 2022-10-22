import React, { useState, useCallback } from 'react';

import Login from './Login';
import { usePeople } from './contexts/peopleContext';

// STYLE

const Chat = () => {
  
  const { people, updatePeople } = usePeople();
  const [letChat, setChat] = useState(false);
  const [person, setPerson] = useState('');

  const login1Handler = (
    (username) => {
      setChat(true);
      updatePeople(username);
    }
  );

  return !letChat ? (
    <Login loginHandler={login1Handler} />
  ) : (
    <PeopleList peopleList={people} />
  );
  

}

export default React.memo(Chat);
