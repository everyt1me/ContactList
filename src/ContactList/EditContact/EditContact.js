import React from "react";
import { Redirect } from "react-router-dom";
import "./EditContact.css";

class EditContact extends React.Component {

    state = {
        id: this.props.currentContact.id,
        name: this.props.currentContact.name,
        address: this.props.currentContact.address,
        gender: this.props.currentContact.gender,
        phone: this.props.currentContact.phone,
        email: this.props.currentContact.email,
        avatar: this.props.currentContact.avatar,
        isRedirect: false
    };

    getName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    getAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    getPhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    getEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    getAvatar = (event) => {
        this.setState({
            avatar: event.target.value
        })
    }

    onSendData = (event) => {
        event.preventDefault();
        const {id, name, address, phone, email, avatar} = this.state;
        this.props.onEditCurrentContact(id, name, address, phone, email, avatar);
        this.setState({
            isRedirect: true
        });
    };

    render() {
        const {name, address, phone, email, avatar, gender} = this.state;
        if (this.state.isRedirect) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <form onSubmit={this.onSendData}>
                    <input type="text" placeholder={name} className="form-control" onChange={this.getName} required />
                    <input type="text" placeholder={address} className="form-control" onChange={this.getAddress} required />
                    <input type="number" min="1" max="99" placeholder={avatar} className="form-control" onChange={this.getAvatar} required />
                    <input type="text" placeholder={phone} className="form-control" onChange={this.getPhone} required />
                    <input type="text" placeholder={email} className="form-control" onChange={this.getEmail} required />
                    {/* <input type="radio" name="gender" className="form-check-input" value="men" id="gender_men" />
                    <label htmlFor="gender_men" className="form-check-label">Men</label>
                    <input type="radio" name="gender" className="form-check-input" value="men" id="gender_women" />
                    <label htmlFor="gender_women" className="form-check-label">Women</label> */}
                    <button className="btn btn-success">Save Changes</button>
                </form>
            </div>
        );
    }
}

export default EditContact;