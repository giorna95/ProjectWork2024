// src/components/Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-fixed">
      <div className="navbar-center">
        <h1>Progetto BUL</h1>
      </div>
      <div className="navbar-links">
        <button className="navbar-button">Home</button>
        <button className="navbar-button">Autore</button>
      </div>
    </nav>
  );
};

export default Navbar;
