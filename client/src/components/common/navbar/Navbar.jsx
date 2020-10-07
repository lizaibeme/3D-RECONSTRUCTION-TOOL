import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/about" className="navbar-item">About</Link>
      <Link to="/modeling" className="navbar-item">Modeling</Link>
      <Link to="/resources" className="navbar-item">Resources</Link>
  </section>
  )

}

export default Navbar;