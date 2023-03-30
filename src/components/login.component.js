import './style.css';
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <form className="login-form">
                    <h2>Login Form</h2>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="Enter your email" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Enter your password" required className="form-input" />
                    </div>
                    <div className='buttons'>
                        <button type="submit" className="form-button">Login</button>
                        <Link style={{ textDecoration: 'none' }} to={'/signup'}> 
                            <button type="submit" className="form-button2">Sign Up</button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }
}

