import React, { Component, Fragment } from 'react';
import './ContactItem.css';

class UserItem extends Component {     

  state = {
    name: this.props.name,
    adress: this.props.adress,
    phone: this.props.phone,
    email: this.props.email,
    avatar: this.props.avatar,
    gender: this.props.gender,
    star: this.props.star
  };

  onRandomAvatar = () => {
    const avatar = Math.floor(Math.random() * Math.floor(99));
    this.setState({
      avatar: avatar
    });
  }

  render() {
    const { name, adress, phone, email, avatar, gender } = this.state;
    const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

    if (this.props.star) {
      var favoriteStyle = "far fa-star fa-2x";
    }
    else {
      var favoriteStyle = "fas fa-star fa-2x";
    }

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
              <span className="float-right pulse text-warning"><i className={favoriteStyle} aria-hidden="true" onClick={this.props.onStarChange} ></i></span>
            </div>
          </div>
        </li>
        <button className="btn btn-success col-2 mx-auto" onClick={this.onRandomAvatar}>Random avatar</button>
      </Fragment>
    )
  }
}

export default UserItem;