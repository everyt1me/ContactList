import React from 'react';
import './ContactList.css';
import UserItem from './ContactItem/ContactItem';

const UserList = ({ Contacts, onStarChange, onDeleteContact }) => {       //function based component
  console.log("UserList =>", Contacts);

  const item = Contacts.map(item => {
    return (
      <UserItem
        key={item.id}

        id={item.id}

        name={item.name}
        address={item.address}
        phone={item.phone}
        email={item.email}
        avatar={item.avatar}
        gender={item.gender}
        star={item.star}
        onStarChange={() => onStarChange(item.id)}
        onDeleteContact={() => onDeleteContact(item.id)}
      />
    );
  });

  return (
    <ul className="list-group pull-down" id="contact-list">
      {item}
    </ul>
  );
};

export default UserList;