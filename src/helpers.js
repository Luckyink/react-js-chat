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

  console.log(tabId)

  if(typeof(tabId) === undefined)
  return false;

  const login = localStorage.getItem("login-id-"+tabId);
  //
  if(login === null)
  return false;

  return true;
}

