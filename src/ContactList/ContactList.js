import React from 'react';
import './ContactList.css';
import UserItem from './ContactItem/ContactItem';

const UserList = ({ Contacts }) => {       //function based component
  console.log("UserList =>", Contacts);

  const item = Contacts.map(item => {
    return (
      <UserItem
        key={item.id}
        name={item.name}
        adress={item.adress}
        phone={item.phone}
        email={item.email}
        avatar={item.avatar}
        gender={item.gender}
        favorite={item.favorite}
      />
    );
  });

  return (
    <ul className="list-group pull-down" id="contact-list">
      {item}
    </ul>
  )
}

export default UserList;