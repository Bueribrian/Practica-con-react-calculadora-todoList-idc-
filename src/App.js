import React from 'react';
import { Route } from "react-router-dom";
import Navbar from './Components/Navbar/index'
import Body from './Components/Body/index'
import Calculator from './Components/Calculator/index'
import Imc from './Components/Imc/index'
import appTask from './Components/appTask/index'


const App = () =>(
  <div className="App">
    <Navbar />
    <Route path="/" exact component={Body} />
    <Route path="/calculator" exact component={Calculator} />
    <Route path='/imcCalculator' exact component={Imc} />
    <Route path='/appTask' exact component={appTask} />
  </div>
)


export default App;
