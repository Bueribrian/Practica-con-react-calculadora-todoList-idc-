import React from 'react';
import { Route } from "react-router-dom";
import Navbar from './Components/Navbar/index'
import Body from './Components/Body/index'
import Calculator from './Components/Calculator/index'
import './App.css';


const App = () =>(
  <div className="App">
    <Navbar />
    <Route path="/home" exact component={Body} />
    <Route path="/calculator" exact component={Calculator} />
  </div>
)


export default App;
