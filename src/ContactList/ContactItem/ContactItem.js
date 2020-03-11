import React, { Component, Fragment } from 'react';
import './ContactItem.css';

class UserItem extends Component {         //class based component

  state = {
    name: "Mike Tyson",
    adress: "Rivne, Stepana Banderu str.",
    phone: "(097) 685-2545",
    email: "mike.tyson@ukr.net",
    avatar: 25,
    gender: "men",
    favorite: 'far fa-star fa-2x'
  };

  onRandomAvatar = () => {
    const avatar = Math.floor(Math.random() * Math.floor(99));
    this.setState({
      avatar: avatar
    });
  }

  setFavoriteStar = () => {
    if(this.state.favorite === 'far fa-star fa-2x'){
      const favorite = 'fas fa-star fa-2x';
      this.setState ({
        favorite: favorite
      });
    }
    else {
      const favorite = 'far fa-star fa-2x';
      this.setState ({
        favorite: favorite
      });
    }
  }

  render() {
    const { name, adress, phone, email, avatar, gender, favorite } = this.state;
    const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
    return (
      <Fragment>
        <li className="list-group-item">
          <div className="row w-100">
            <div className="col-12 col-sm-6 col-md-3 px-0">
              <img src={URL} alt={name} className="rounded-circle mx-auto d-block img-fluid" />
            </div>
            <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
              <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
              <label className="name lead">{name}</label>
              <br />
              <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title=""></span>
              <span className="text-muted">{adress}</span>
              <br />
              <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title=""></span>
              <span className="text-muted small">{phone}</span>
              <br />
              <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title="" title=""></span>
              <span className="text-muted small text-truncate">{email}</span>
              <br />
              <span className="float-right pulse text-warning"><i className = { favorite } onClick = { this.setFavoriteStar } ></i></span>
            </div>
          </div>
        </li>
        <button className="btn btn-success col-2 mx-auto" onClick={this.onRandomAvatar}>Random avatar</button>
      </Fragment>
    )
  }
}

export default UserItem;