export const getFromLocalStorage = key => {
  const value = localStorage.getItem(key); 

  let items = null; 
  try {
    const parsedJSON = JSON.parse(value);

    if (Array.isArray(parsedJSON)) {
      items = parsedJSON;
    }
  } catch(e) {
    items = [];
  }
  
  return items;
}

export const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

//check if user is login
export const isLogin = () =>  {

  let tabId = document.getElementById('tab-id').getAttribute('content');

  if(typeof(tabId) === undefined)
  return false;

  const login = localStorage.getItem("login-id-"+tabId);
  //
  if(login === null)
  return false;

  return true;
}

export const getTabLogin = () =>  {

  const tabId = localStorage.getItem("tab-id");
  //
  if(tabId === null)
  {
    localStorage.setItem("tab-id", 2)

    return 1;
  }

  localStorage.setItem("tab-id", parseInt(tabId)  + 1)

  return tabId;
}

// login user
export const Login = username => localStorage.setItem("login-id", username);

