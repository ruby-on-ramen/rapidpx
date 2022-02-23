import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../../assets/stylesheets/Header.css";
const Header = () => {
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
  } = this.props;
  return (
    <nav>
      <div className="logo">
        RapidP<span>x</span>
      </div>
      <div>
        <NavLink to="/about" className="nav-link">
          About Us
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact Us
        </NavLink>
        <NavLink to="/signout" className="nav-link">
          Sign Out
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
