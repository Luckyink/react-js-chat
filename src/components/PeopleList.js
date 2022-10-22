import React from 'react';

// COMPONENT
import PeopleItem from './PeopleItem';

const PeopleList = ({peopleList}) => {
  return (
    <div id="plist" class="people-list  overflow-auto h-100">
      <p class="text-center">PEOPLE JOINED</p>
      <ul class="list-unstyled chat-list mt-2 mb-0">
        {
          peopleList && // Check if  exists
          Array.isArray(peopleList) && // Check if it's an array
          peopleList.length > 0 && // The array should not be empty
          peopleList.map(({ id, username }) => (
            <PeopleItem
              key={id}
              id={id}
              username={username}
            />
          ))
        }
      </ul>
    </div>
  )
};

export default React.memo(PeopleList);