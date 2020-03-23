
import React from 'react';
import ReactDOM from 'react-dom';
import uuid from "uuid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';

import AddContact from "./ContactList/AddContact/AddContact";
import UserList from './ContactList/ContactList';
import Header from "./ContactList/Header/Header";

class App extends React.Component {

  state = {
    Contacts: [
      {
        id: 1,
        name: "Mike Tyson",
        address: "Rivne, Stepana Banderu str.",
        phone: "(097) 685-2545",
        email: "mike.tyson@ukr.net",
        avatar: 25,
        gender: "men",
        star: true
      },
      {
        id: 2,
        name: "Vitalii Klitchko",
        address: "Kyiv, Stepana Banderu str.",
        phone: "(097) 685-9845",
        email: "v.klitchko@ukr.net",
        avatar: 67,
        gender: "men",
        star: true
      },
      {
        id: 3,
        name: "Yvayne Stone",
        address: "NY, 5 avenue",
        phone: "+1 (916) 514-3459",
        email: "y.stone@ukr.net",
        avatar: 56,
        gender: "women",
        star: false
      },
      {
        id: 4,
        name: "Arthur Fleck",
        address: "Gotham City",
        phone: "+1 (916) 513-3257",
        email: "first.joker@gmail.com",
        avatar: 33,
        gender: "men",
        star: false
      },
      {
        id: 5,
        name: "Harley Quinn",
        address: "Arkham Asylum",
        phone: "+1 (916) 713-9957",
        email: "birdofprey@gmail.com",
        avatar: 28,
        gender: "women",
        star: false
      }
    ]
  };

  onStarChange = id => {
    // console.log("onStarChange", id);
    this.setState(state => {
      const index = this.state.Contacts.findIndex(elem => elem.id === id);
      // console.log("Index = ", index);
      const newStar = this.state.Contacts.slice();
      newStar[index].star = !newStar[index].star;
      return {
        star: !this.newStar
      }
    })
  };

  onAddContact = (name, address, phone, email, avatar) => {
    // console.log("NewName = ", name);
    // console.log("NewAddress = ", address);
    // console.log("NewPhone = ", phone);
    // console.log("NewEmail = ", email);
    let newContact = {
      id: uuid(),
      name: name,
      address: address,
      avatar: avatar,
      phone: phone,
      gender: "women",
      email: email,
      star: true
    };
    const newList = [...this.state.Contacts, newContact];
    // console.log(newList);
    this.setState(state => {
      return {
        Contacts: newList
      };
    });
  }

  onDeleteContact = id => {
    this.setState(state => {
      const index = state.Contacts.findIndex(elem => elem.id === id);
      const stateDeleted = state.Contacts;
      stateDeleted.splice(index, 1);
      return {
        Contacts: stateDeleted
      };
    });
    // console.log("Delete contact = ", id);
    // console.log("Delete contact index = ", index);

  }

  render() {
    return (
      <div className="container">
        <div id="card_contacts">
          <div
            id="contacts"
            className="panel-collapse collapse show"
            aria-expanded="true"
          >
            <h1>Contact List App</h1>
            
            <Router>
            <Header />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <UserList
                      Contacts={this.state.Contacts}
                      onStarChange={this.onStarChange}
                      onDeleteContact={this.onDeleteContact}
                    />
                  )}
                />
                <Route
                  path="/contact"
                  exact
                  render={() => <AddContact onAddContact={this.onAddContact} />}
                />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
