import React, { Component } from 'react'
import TaskList from './Components/TaskList/TaskList'
import './App.css'
import AddToDo from './Components/addToDo/AddToDo'

export class App extends Component {
  state={
    taskList:[{
    id:Math.random(),
    task:"Learn HTML",
    isDone:true
  },
  {
    id:Math.random(),
    task:"Learn CSS",
    isDone:true
  },
  {
    id:Math.random(),
    task:"Learn React Hooks",
    isDone:false
  }

]
  }
  handleDelete = (idTask) => {
    this.setState({ taskList: this.state.taskList.filter(elt=>elt.id!==idTask)  });
    
  }
  handleComplete = (idTask) => {
    this.setState({ taskList:this.state.taskList.map(elt=>
      elt.id===idTask?{...elt,isDone:!elt.isDone}:elt
      ) });
    
  }
  handleAdd=(newTask)=>
  {
    if(newTask)
this.setState({ taskList:[...this.state.taskList,{id:Math.random(),task:newTask,isDone:false}]  });
else{
  alert("Enter a task");
}
  }


  
  render() {
    return (
      <div className='app'>
        <h1>To Do App</h1>
        <AddToDo handleAdd={this.handleAdd}/>
        <TaskList produits={this.state.taskList} handleDelete={this.handleDelete} complete={this.handleComplete}/>
      </div>
    )
  }
}

export default App
