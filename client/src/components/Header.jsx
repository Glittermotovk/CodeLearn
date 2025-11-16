import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>CodeLearn</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/feedback">Feedback</Link>
      </nav>
    </header>
  );
}

export default Header;
