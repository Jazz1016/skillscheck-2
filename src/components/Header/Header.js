import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img alt="logo" />
      <section>SHELFIE</section>
      <Link to="/">
        <section className="header-button">Dashboard</section>
      </Link>
      <Link to="/form">
        <section className="header-button">Add Inventory</section>
      </Link>
    </div>
  );
}

export default Header;
