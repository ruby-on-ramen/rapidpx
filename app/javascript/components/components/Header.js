import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <nav>
        <header className="header-background">
          <NavLink to="/" className="nav-link-footer">
            <div className="logo">
              RapidP<span>x</span>
            </div>
          </NavLink>
          <div>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
            <a href={sign_out_route} className="nav-link">
              Sign Out
            </a>
          </div>
        </header>
      </nav>
    );
  }
}
