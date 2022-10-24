import React from 'react';

const PeopleItem = ({ username, id}) => {
  return (
      <li className="clearfix">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
              <div className="about">
                <div className="name">{username}</div>
                <div className="status"> <i className="fa fa-circle online"></i></div>                                            
              </div>
      </li>
  )
};

export default React.memo(PeopleItem);