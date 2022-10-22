import React from 'react';

const Message = ({ from, created_at, message, username}) => {
  const loginId = document.getElementById('tab-id').getAttribute('content');
  return (
    <li class="clearfix">
        <div className={"message-data " + (loginId === from ? 'text-right'  : '')}>
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar"></img>
          <span class="message-data-time">{username}</span>
        </div>
      <div className={"message " + (loginId === from ?  ' float-right other-message' : ' my-message')}> {message} </div>
    </li>
  )
};

export default React.memo(Message);