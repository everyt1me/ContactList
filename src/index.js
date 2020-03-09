
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './ContactList/ContactList';

const App = () => {
  return (
      <div className="container">
        <div className="card card-default" id="card_contacts">
          <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
            <h1>Contact List App</h1>
            <UserList />
          </div>
        </div>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
