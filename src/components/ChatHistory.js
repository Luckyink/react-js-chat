import React , {
  useState, useRef } from 'react';
import Message from './Message';

const ChatHistory = ({person, chatHistory}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollUpEnabled, setScrollUp] = useState(true);
  const dataLimit = 3;
  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      
      if (scrollTop + clientHeight === scrollHeight && scrollUpEnabled) {
        var currentDataSet = chatHistory.slice(currentPage * dataLimit - dataLimit, currentPage * dataLimit);
        
        if(chatHistory.length > currentDataSet.length)
        {
          setCurrentPage(currentPage + 1)
        }

        setScrollUp(false);

        setTimeout(function() {
          setScrollUp(true);
        }, 1000);
        
      }
    }
  };
  

  return (
    <div className="chat-history overflow-auto" onScroll={onScroll} ref={listInnerRef}>
      <ul className="m-b-0">
        {
            chatHistory.length > 0 &&
            chatHistory.slice(0, currentPage * dataLimit).map(({ from, message, created_at, username }, index) => (
            <Message key={index} person={person} from={from} message={message} created_at={created_at} username={username} />
          ))
        }
      </ul>
    </div>
  )
};

export default React.memo(ChatHistory);