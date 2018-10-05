import React, { Component } from 'react';
import './styles.css'

class appTask extends Component{
   
    state={
        tasks:[{
            title:'Cocinando',
            desc:'Aca cocinando unos fideos para no cagarme de hambre'
        },
        { 
            title:'Cocinando 2',
            desc:'Aca cocinando unos fideos para no cagarme de hambre 2'
        }
    ]
    }
    
    postTask = ()=>{
        var title, desc;
        title = document.querySelector('#taskTitle')
        desc = document.querySelector('#taskDesc')
        var  b = {
            title:title.value,
            desc:desc.value
        }
        this.state.tasks.push(b)
        this.setState({tasks:this.state.tasks})
        console.log(this.state.tasks)
    }
    removeTask = (e)=>{
        var itemDeleted = e.target.parentNode;
        itemDeleted.style.display='none'
    }

    render(){
        return(
            <div className="container body">
                <div className="taskForm">
                    <p>Ingrese el titulo de la tarea</p>
                    <input type="text" name="" required="" id="taskTitle"/>
                    <p>Ingrese la descripcion de la tarea</p>
                    <textarea name="" required="" id="taskDesc" cols="30" rows="10"></textarea>
                    <button type="submit" onClick={this.postTask}>Anotar</button>
                </div>
                <div className="containerTaskList">
                    {this.state.tasks.map(task =>{return <div className='taskList taskAnimation'>
                                                                <i onClick={this.removeTask} className='removeTask'>X</i>
                                                                <p>{task.title}</p>
                                                                <p>{task.desc}</p>
                                                            </div>})}
                </div>
            </div> 
           
        )
    }
}

export default appTask;