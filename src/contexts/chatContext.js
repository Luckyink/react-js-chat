import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react';


export function createCtxOne() {
  const ctx = createContext('chat');
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider];
}

export const [useChat, ChatContextProvider] = createCtxOne();

const ChatProvider = ({ children }) => {

  const [chat, setChat] = useState([]);

  const updateChatStorage = useCallback((e) => {
    const { key, newValue } = e;
    if (key === 'chats') {
      const newArr = JSON.parse(newValue);
      const newList = [...newArr];
      setChat(newList);
    }
  }, []);

  const updateChat = (person) => {
    const newList = [...chat, person];
    setChat(newList);
    localStorage.setItem('chats', JSON.stringify(newList));
  };

  useEffect(() => {
    async function getChat() {
      const chatList = localStorage.getItem('chats');

      if (chatList) {
        return setChat(JSON.parse(chatList));
      }
      localStorage.setItem('chats', '[]');
    }
    getChat();
  }, []);

  useEffect(() => {
    window.addEventListener('chatStorage', updateChatStorage);
    return () => {
      window.removeEventListener('chatStorage', updateChatStorage);
    };
  }, [updateChatStorage]);

  return (
    <ChatContextProvider value={{ chat, updateChat }}>
      {children}
    </ChatContextProvider>
  );
};

export default ChatProvider;