import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
    render() {
        const { firstName, lastName, logoutKey } = this.props;

        const handleLogout = () => {
            try{
                localStorage.removeItem('currentUser');
                logoutKey();
            } catch(error){
                console.error('Error during logout:', error);
            }
        };

        return (
            <nav className="navbar">
                <ul className="navbar-list">
                    {/* Display first and last name if available */}
                    {firstName && lastName && (
                        <li className="navbar-item">
                          {firstName} {lastName}
                        </li>
                    )}
                    <li className="navbar-item">
                        <Link to="/">Homepage</Link>
                    </li>
                    {(!firstName || !lastName) && (
                        <>
                            <li className="navbar-item">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/signup">Signup</Link>
                            </li>
                        </>
                    )}
                    {firstName && lastName && (
                        <>
                            <li className="navbar-item">
                                <Link to="/companies">Companies</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/jobs">Jobs</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/profileeditpage">Profile Edit Page</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/logoutconfirmation" onClick={handleLogout}>Logout</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        );
    }
}

export default NavBar;

