import React from 'react';
import { Fragment } from 'react';
import './componentlist.css';
import UserItem from './componentitem.js';

const UserList = () => {
  return (
    <Fragment>
        <ul className="list-group pull-down" id="contact-list">
            <li className="list-group-item">
                <div className="row w-100">
                    <UserItem />
                </div>
            </li>   
        </ul> 
    </Fragment>
  )
}

export default UserList;