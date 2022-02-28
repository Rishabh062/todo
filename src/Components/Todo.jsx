import React, { Component } from 'react';
import '../App.css';
class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks: [
                {task:'Kindly add some task',id:1}
            ],
            currtask:'',
        }
    }
    handelChange=(e)=>{
       
        this.setState({
            currtask:e.target.value
        })
    }
    handelSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currtask,id:this.state.tasks.length+1}],
            currtask:''
        })
    }
    handelDelete=(id)=>{
        let narr=this.state.tasks.filter((task)=>{
            return task.id!==id
        });
        this.setState({
            tasks:[...narr]
        })
    }
  render() {
    return (
    <div>
        
    <input type="text" placeholder='Eg: Want to bath' value={this.state.currtask} onChange={this.handelChange}/>
    <button onClick={this.handelSubmit}>Submit</button>
    <ul>
    {
        this.state.tasks.map((task)=>(
          <li key={task.id}>
              {task.task}
              <button onClick={()=>this.handelDelete(task.id)}>Delete</button>
              </li>
        ))
    }
    </ul>
    </div>
    );
  }
}

export default Todo;