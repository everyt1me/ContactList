
import React from 'react';
import ReactDOM from 'react-dom';
import uuid from "uuid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
// import firebase from "./ContactList/Firebase/firebase";

import AddContact from "./ContactList/AddContact/AddContact";
import UserList from './ContactList/ContactList';
import Header from "./ContactList/Header/Header";
import EditContact from "./ContactList/EditContact/EditContact";
import NotFoundPage from "./ContactList/NotFoundPage/NotFoundPage";

class App extends React.Component {
  URL = "https://contactlist-79742.firebaseio.com/Contacts.json";

  componentDidMount() {
    this.updateContactList();
  }

  updateContactList = () => {
    fetch(this.URL).then(response => {
      return response.json();
    })
      .then(list => {
        this.setState({
          Contacts: list
        });
      })
      .catch(err => console.log(err));
  };

  state = {
    Contacts: [],
    currentContact: "",
    findContact: ""
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
    this.onSaveData(newList);
    this.setState(state => {
      return {
        Contacts: newList
      };
    });
  };

  onEditContact = id => {
    const index = this.state.Contacts.findIndex(elem => elem.id === id);
    const currentContact = this.state.Contacts[index];
    this.setState({
      currentContact: currentContact
    });
  };

  async onSaveData (newList) {
    await fetch(this.URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newList)
    }).then(response => {
      console.log(response);
    }).catch(err => console.log(err.Message));
    // this.updateContactList();
  };

  onDeleteContact = id => {
    const index = this.state.Contacts.findIndex(elem => elem.id === id);

    const partOne = this.state.Contacts.slice(0, index);
    const partTwo = this.state.Contacts.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.onSaveData(newList);
    this.setState(state => {
      return {
        List: newList
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
    const newList = [...partOne, editedContact, ...partTwo];
    this.onSaveData(newList);
    this.setState(state => {
      return {
        Contacts: newList
      };
    });
  };

  onSearch = contactName => {
    this.setState({
      findContact: contactName
    });
  };

  onShowContactList = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    })
  };

  render() {
    const showContacts = this.onShowContactList(this.state.Contacts, this.state.findContact);
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
              <Header onSearch={this.onSearch} />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <UserList
                      Contacts={showContacts}
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
