
import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './componentlist.js';

const App = () => {
  return (
    <Fragment>
        <div className="container">
            <div className="card card-default" id="card_contacts">
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <UserList />
                </div>
            </div>
        </div>
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
