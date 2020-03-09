import React from 'react';
import './ContactList.css';
import UserItem from './ContactItem/ContactItem';

const UserList = () => {       //function based component
  return (
      <ul className="list-group pull-down" id="contact-list">
        <UserItem />
      </ul>
  )
}

export default UserList;