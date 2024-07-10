// src/components/Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <h1>Progetto BUL</h1>
      </div>
      <div className="navbar-right">
        <span>Nicolò Giornali</span>
      </div>
    </nav>
  );
};

export default Navbar;
