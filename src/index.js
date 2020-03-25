
import React from 'react';
import ReactDOM from 'react-dom';
import uuid from "uuid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';

import AddContact from "./ContactList/AddContact/AddContact";
import UserList from './ContactList/ContactList';
import Header from "./ContactList/Header/Header";
import EditContact from "./ContactList/EditContact/EditContact";
import NotFoundPage from "./ContactList/NotFoundPage/NotFoundPage";

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
    ],
    currentContact: ""
  };

  onStarChange = id => {
    this.setState(state => {
      const index = this.state.Contacts.findIndex(elem => elem.id === id);
      const newStar = this.state.Contacts.slice();
      newStar[index].star = !newStar[index].star;
      return {
        star: !this.newStar
      }
    })
  };

  onAddContact = (name, address, phone, email, avatar) => {
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
    this.setState(state => {
      return {
        Contacts: newList
      };
    });
  }

  onEditContact = id => {
    const index = this.state.Contacts.findIndex(elem => elem.id === id);
    const currentContact = this.state.Contacts[index];
    this.setState({
      currentContact: currentContact
    });
  };

  onDeleteContact = id => {
    this.setState(state => {
      const index = state.Contacts.findIndex(elem => elem.id === id);
      const stateDeleted = state.Contacts;
      stateDeleted.splice(index, 1);
      return {
        Contacts: stateDeleted
      };
    });
  };

  onEditCurrentContact = (id, name, address, phone, email, avatar) => {
    const index = this.state.Contacts.findIndex(elem => elem.id === id);
    let editedContact = {
      id: id,
      name: name,
      address: address,
      avatar: avatar,
      phone: phone,
      gender: "women",
      email: email,
      star: true
    };
    const partOne = this.state.Contacts.slice(0, index);
    const partTwo = this.state.Contacts.slice(index + 1);
    const editedList = [...partOne, editedContact, ...partTwo];
    this.setState(state => {
      return {
        Contacts: editedList
      };
    });
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
                      onEditContact={this.onEditContact}
                    />
                  )}
                />
                <Route
                  path="/contact"
                  exact
                  render={() => <AddContact onAddContact={this.onAddContact} />}
                />
                <Route
                  path="/edit"
                  exact
                  render={() => (
                    <EditContact
                      currentContact={this.state.currentContact}
                      onEditCurrentContact={this.onEditCurrentContact}
                    />
                  )}
                />
                <Route path="*" component={NotFoundPage} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
