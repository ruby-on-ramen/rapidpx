import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        RapidP<span>x</span> © 2022
      </div>
      <NavLink to="/" className="nav-link-footer">
        Home
      </NavLink>
    </footer>
  );
};

export default Footer;
