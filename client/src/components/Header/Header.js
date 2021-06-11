import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__leftSection">
        <Link to="/">SHOPNINE</Link>
        <div className="header__midSection">
          <span>About Us</span>
          <span>Offers</span>
          <span>Categories</span>
          <span>Orders</span>
          <span>Delivery</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="header__rightSection">
        <i className="fas fa-search" />
        <span>Log In</span>
        <span>Sign Up</span>
        <i className="fas fa-shopping-cart" />
      </div>
    </header>
  );
};

export default Header;
