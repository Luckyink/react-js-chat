import React, { useState, useCallback } from 'react';

// HELPER
import { getFromLocalStorage, saveToLocalStorage, isLogin, getTabLogin } from './helpers';

// STYLE

const Chat = () => {
  
  const [peopleList, setPeopleItems] = useState(getFromLocalStorage('usernames') || [])
  const [chatHistory, setChatHistory] = useState(saveToLocalStorage('chat-history') || [])

  const [isLoginedIn, setLogin] = useState(isLogin() || false)


  if (isLoginedIn)
  {
    return (
        <div class="card chat-app">
          
        </div>
      );
  }
  else
  {
    return (
        <></>
      );
  }
  

}

export default React.memo(Chat);
