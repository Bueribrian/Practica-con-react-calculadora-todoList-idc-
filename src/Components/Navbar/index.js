import React from 'react';
import './style.css'
import { Link } from "react-router-dom"
const Navbar = () => (
  <nav className='navbar '>
    <ul className='container'>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/calculator">Calculadora</Link></li>
      <li><Link to="/calculator">Calculadora</Link></li>
      <li><Link to="/calculator">Calculadora</Link></li>
    </ul>
  </nav>
)

export default Navbar;
