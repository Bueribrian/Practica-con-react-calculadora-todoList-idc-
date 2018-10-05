import React,{Component} from 'react'
import './style.css'

class Imc extends Component{
    state = {
        IMC:'',
    }

    getValue = ()=>{
        let  peso,altura,result;
        peso = document.querySelector('#peso').value;
        altura = document.querySelector('#altura').value;
        result = peso / (altura * altura);
        result = String(result)
        result = result[4]+result[5]+','+result[6]+result[7]
        this.setState({IMC:this.state.IMC = result})

         
    }

    render(){
        return(
           <div className="container body">
                <h2>Bienvenido a la calculadora de indice de masa corporal o IMC</h2>
                <p>Esta calculadora se encarga, valga la redundancia de hacer el calculo de altura por peso para sacar el indice de masa corporal </p>
               <label htmlFor="peso">Peso</label>
                <input className='inputImc'  type="number" id="peso" placeholder="Ingrese su peso en kilogramos" maxLength='3'/>
                <label htmlFor="altura">Altura</label>
                <input className='inputImc'  type="number" id="altura" placeholder="Ingrese su altura en cm" maxLength='3'/>
                <button onClick={this.getValue}>Calcular</button>
                <p>Tu indice de masa corporal es: <span className="resultImc">{this.state.IMC}</span></p>
                <br/>
                <hr/>
                <table border='1' cellspacing='0' cellpadding='2' bordercolor="000000" cellPadding='5px 10px'>
                    <tr>
                        <th>Indice de masa corporal</th>
                        <th>Clasificacion</th>
                    </tr>
                    <tr>
                        <td> &#60;  16.00 </td>
                        <td>Infrapeso: Delgadez Severa</td>
                    </tr>
                    <tr>
                        <td>16.00 - 16.99</td>
                        <td>Infrapeso: Delgadez moderada</td>
                    </tr>
                    <tr>
                        <td>17.00 - 18.49</td>
                        <td>Infrapeso: Delgadez aceptable</td>
                    </tr>
                    <tr>
                        <td>18.50 - 24.99</td>
                        <td>Peso Normal</td>
                    </tr>
                    <tr>
                        <td>25.00 - 29.99</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td>30.00 - 34.99</td>
                        <td>Obeso: Tipo 1</td>
                    </tr>
                    <tr>
                        <td>35.00 - 40.00</td>
                        <td>Obeso: Tipo 2</td>
                    </tr>
                    <tr>
                        <td> &#62;  40.00</td>
                        <td>Obeso: Tipo 3</td>
                    </tr>
                </table>
           </div> 
        )
    }
}
export default Imc;