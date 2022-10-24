import React from 'react';

const PeopleItem = ({ username, id}) => {
  return (
      <li class="clearfix">
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
              <div class="about">
                <div class="name">{username}</div>
                <div class="status"> <i class="fa fa-circle online"></i></div>                                            
              </div>
      </li>
  )
};

export default React.memo(PeopleItem);