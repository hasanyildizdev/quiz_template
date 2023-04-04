import './style.css';
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Signup extends Component {
  render() {
    return (
      <div className="login-container">
        <form className="login-form">
          <div className='goBack'>
            <Link style={{ textDecoration: 'none' }} to={'/'}>
              <button type="submit" className="goBackButton"> X</button>
            </Link>
          </div>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" placeholder="Enter your email" required className="form-input" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" placeholder="Enter your password" required className="form-input" />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" placeholder="Confirm your password" required className="form-input" />
          </div>
          <div className='buttons'>
            <button type="submit" className="form-button">Sign Up</button>
            <Link style={{ textDecoration: 'none' }} to={'/login'}>
              <button type="submit" className="form-button2">Login</button>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

