import React, { Component} from 'react';
import './style.css'
import { Link } from "react-router-dom"
class Navbar extends Component{
  
  render(){
    return (
      <nav className='navbar '>
        <ul className='container'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculadora</Link></li>
          <li><Link to="/imcCalculator">Calculadora de IMC</Link></li>
          <li><Link to="/appTask">App task</Link></li>
        </ul>
      </nav>
   )
  }
}




export default Navbar;
