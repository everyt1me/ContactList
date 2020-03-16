
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './ContactList/ContactList';

class App extends React.Component {

  state = {
    Contacts: [
      {
        id: 1,
        name: "Mike Tyson",
        adress: "Rivne, Stepana Banderu str.",
        phone: "(097) 685-2545",
        email: "mike.tyson@ukr.net",
        avatar: 25,
        gender: "men",
        star: true
      },
      {
        id: 2,
        name: "Vitalii Klitchko",
        adress: "Kyiv, Stepana Banderu str.",
        phone: "(097) 685-9845",
        email: "v.klitchko@ukr.net",
        avatar: 67,
        gender: "men",
        star: true
      },
      {
        id: 3,
        name: "Yvayne Stone",
        adress: "NY, 5 avenue",
        phone: "+1 (916) 514-3459",
        email: "y.stone@ukr.net",
        avatar: 56,
        gender: "women",
        star: false
      },
      {
        id: 4,
        name: "Arthur Fleck",
        adress: "Gotham City",
        phone: "+1 (916) 513-3257",
        email: "first.joker@gmail.com",
        avatar: 33,
        gender: "men",
        star: false
      },
      {
        id: 5,
        name: "Harley Quinn",
        adress: "Arkham Asylum",
        phone: "+1 (916) 713-9957",
        email: "birdofprey@gmail.com",
        avatar: 28,
        gender: "women",
        star: false
      }
    ]
  };

  onStarChange = id => {
    this.setState(state => {
      const index = this.state.Contacts.findIndex(elem => elem.id === id);
      const newStar = this.state.Contacts.slice();
      newStar[index].star = !newStar[index].star;
      return {
        star: !this.newStar
      };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card card-default" id="card_contacts">
          <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
            <h1>Contact List App</h1>
            <UserList Contacts={this.state.Contacts} 
            onStarChange = {this.onStarChange} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
