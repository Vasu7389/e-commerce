import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__brandName">SHOPNINE</div>
      <div className="header__options">
        <div className="header__cart">CART</div>
        <div className="header__signin">SIGN IN</div>
      </div>
    </header>
  );
};

export default Header;
