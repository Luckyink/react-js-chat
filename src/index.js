import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import ChatProvider from './contexts/chatContext';
import PeopleProvider from './contexts/peopleContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        
        <React.StrictMode>
          <div className="container">
            <div className="row clearfix">
                <div className="col-lg-12">
                  <ChatProvider>
                    <PeopleProvider>
                      <Chat />
                    </PeopleProvider>
                  </ChatProvider>
              </div>
            </div>
          </div>
        </React.StrictMode>,
        document.getElementById('root')
);

serviceWorker.unregister();
