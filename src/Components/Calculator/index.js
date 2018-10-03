import React, {Component} from 'react'
import './styles.css'

class Calculator extends Component {
  state = {
    numbers:['7','8','9','4','5','6','1','2','3','0',','],
    operators:['+','-','*','/'],
    number1:0,
    number2:0,
    operation:'',
    coma:1
  }

  getNum1 = (e)=>{
  let inputNumber = e.target.value

    if(inputNumber === ',' && this.state.coma === 1){
                if(this.state.number1 === 0){
                  this.setState({number1: this.state.number1 ='0,'})
                }else{
                  this.setState({number1: this.state.number1 +=','})
                }
                this.state.coma = 0

    }else if(inputNumber === ',' && this.state.coma === 0) {

    }else{
          if(this.state.number1 === 0 && inputNumber === '0' ||this.state.number1 === '0' && inputNumber === '0' ){

          }else if(this.state.number1 === 0){
                this.setState({number1: this.state.number1= inputNumber})
          }else{
                this.setState({number1: this.state.number1+= inputNumber})
          }
    }
}


  getNum2 = (e)=>{
    this.state.number2 = this.state.number1
    this.setState({number1:this.state.number1 = 0})
    this.state.operation = e.target.value
  };

  DeleteOneNumber = () =>{
    if(this.state.number1.length === 1){
      this.setState({number1:this.state.number1 = 0})
      this.state.coma = 1
    }else if(this.state.number1.length > 1){
      this.setState({number1: this.state.number1.slice(0,-1)})

    }

  }
  DeleteAll = () =>{
    this.setState({number1:this.state.number1 = 0})
     this.setState({number2:this.state.number2 = 0})
     this.setState({coma:this.state.coma = 1})
     this.setState({operation:this.state.operation = ''})

  }
  Equal = () =>{
    switch(this.state.operation){
      case '+':
            var result = (parseFloat(this.state.number2))+(parseFloat(this.state.number1))
            this.setState({number1:result.toString()})
            break
      case '-':
              var result = (parseFloat(this.state.number2))-(parseFloat(this.state.number1))
              console.log(result)
              this.setState({number1:result.toString()})
              break
      case '*':
              var result = (parseFloat(this.state.number2))*(parseFloat(this.state.number1))
              this.setState({number1:result.toString()})
              break
      case '/':
              var result = (parseFloat(this.state.number2))/(parseFloat(this.state.number1))
              this.setState({number1:result.toString()})
              break

    }
    this.setState({coma:this.state.coma = 1})
  }
  render () {
    return (
      <div className="container">
        <div className="calculadora">
          <div className="input">{this.state.number1}</div>
            <button className='delBtn' onClick={this.DeleteAll} >C</button>
            <button className='delBtn' onClick={this.DeleteOneNumber}> X </button>
          <div className='Keyboard'>
            <div className="numbers">{this.state.numbers.map(num => <button key={num.id} value={num} onClick={this.getNum1} className='numBtn'>{num}</button>)}</div>
            <div className="operators">{this.state.operators.map(ope => <button key={ope.id} value={ope} onClick={this.getNum2} className='opeBtn'>{ope}</button>)}
              <button className='Equal' onClick={this.Equal}>=</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}



export default Calculator;
