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
