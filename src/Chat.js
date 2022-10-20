import React, { useState, useCallback } from 'react';

// HELPER
import { getFromLocalStorage, saveToLocalStorage, isLogin, getTabLogin } from './helpers';

// STYLE

const Chat = () => {
  
  const [peopleList, setPeopleItems] = useState(getFromLocalStorage('usernames') || [])
  const [chatHistory, setChatHistory] = useState(saveToLocalStorage('chat-history') || [])

  const [isLoginedIn, setLogin] = useState(isLogin() || false)

  const login1Handler = useCallback(async username => {

    let latestItem = null
    if (peopleList.length === 1) {
      latestItem = peopleList[0]
    }
    else if (peopleList.length > 1) {
      const itemsDescendingSortedById = peopleList.sort((a, b) => a.id > b.id)
      latestItem = itemsDescendingSortedById[0]
    }
    
    let tabId = getTabLogin();

    document.getElementById('tab-id').setAttribute('content', tabId);
    document.getElementById('userid').setAttribute('content', username);
    
    const newTodoLogin = [
      {
        id: latestItem ? latestItem.id + 1 : 0,
        username,
      },
      ...peopleList,
    ]

    // Update state
    setPeopleItems(newTodoLogin);

    setLogin(true);
    
    // Save to localStorage
    saveToLocalStorage('usernames', newTodoLogin)
    saveToLocalStorage('login-id-'+ tabId, username)

  }, [peopleList]);

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
        <Login loginHandler={login1Handler}/>
      );
  }
  

}

export default React.memo(Chat);
