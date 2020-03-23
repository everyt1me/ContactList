import React from "react";
import "./AddContact.css";

class AddContact extends React.Component {

    state = {
        name: null,
        address: null,
        gender: "men",
        phone: null,
        email: null,
        avatar: null
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
        const {name, address, phone, email, avatar} = this.state;
        this.props.onAddContact(name, address, phone, email, avatar);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSendData}>
                    <input type="text" placeholder="Name" className="form-control" onChange={this.getName} required />
                    <input type="text" placeholder="Address" className="form-control" onChange={this.getAddress} required />
                    <input type="number" min="1" max="99" placeholder="Avatar" className="form-control" onChange={this.getAvatar} required />
                    <input type="text" placeholder="Phone" className="form-control" onChange={this.getPhone} required />
                    <input type="text" placeholder="Email" className="form-control" onChange={this.getEmail} required />
                    {/* <input type="radio" name="gender" className="form-check-input" value="men" id="gender_men" />
                    <label htmlFor="gender_men" className="form-check-label">Men</label>
                    <input type="radio" name="gender" className="form-check-input" value="men" id="gender_women" />
                    <label htmlFor="gender_women" className="form-check-label">Women</label> */}
                    <button className="btn btn-success">Add new contact</button>
                </form>
            </div>
        );
    }
}

export default AddContact;