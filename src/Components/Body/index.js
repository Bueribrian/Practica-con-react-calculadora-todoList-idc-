import React, {Component} from 'react'
import './style.css'

class Body extends Component {
  state = {
    count: 0,
    tags:['Hola','Como','Te','Va']
  }
  increment = () =>{
    this.setState({count:this.state.count + 1});

  }
  decrement = () =>{
    this.setState({count:this.state.count - 1});

  }

  render () {
    return (
      <div className=" container body">
        <h2 className='title-body'>Bienvenido a mi primera app Con REACT</h2>
        <p className='p-body'>Aca voy a poner una serie de aplicacion hechas con los componentes
        de REACT como ejemplos una calculadora, un TODO LIST y una calculadora de indice
        de masa corpolar o IDC, proximamente tambien estare realizado un Portfolio y un blog hechos con
        el stack MERN.</p>
        <h2>Count = {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }

}

export default Body;
