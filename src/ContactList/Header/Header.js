import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li className="Header">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="Header">
                    <Link to="/contact">Add Contact</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;