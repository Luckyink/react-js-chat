import React from 'react';

// COMPONENT
import PeopleItem from './PeopleItem';

const PeopleList = ({peopleList}) => {
  return (
    <div id="plist" class="people-list  overflow-auto h-100">
      <p class="text-center">PEOPLE JOINED</p>
      <ul class="list-unstyled chat-list mt-2 mb-0">
        {
          peopleList?.length > 0 &&
          peopleList.map((username, key) => (
            <PeopleItem
              key={key}
              username={username}
            />
          ))
        }
      </ul>
    </div>
  )
};

export default React.memo(PeopleList);