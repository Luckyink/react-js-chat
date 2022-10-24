import React from 'react';

const Message = ({ person, from, created_at, message, username}) => {
  return (
    <li class="clearfix">
        <div className={"message-data " + (person === from ? 'text-right' : '')}>
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"></img>
          <span class="message-data-time">{username}</span>
        </div>
        <div className={"message " + (person === from ? ' float-right other-message' : ' my-message')}> {message} </div>
    </li>
  )
};

export default React.memo(Message);