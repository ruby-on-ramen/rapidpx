import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        RapidP<span>x</span> © 2022
      </div>
      <NavLink to="/Home" className="nav-link-footer">
        Home
      </NavLink>
    </footer>
  );
};

export default Footer;
