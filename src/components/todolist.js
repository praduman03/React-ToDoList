import React, { Component } from 'react'
import '../App.css';
var tasklist=[];
export default class todolist extends Component {
constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);

    this.state =
     { 
        value: ''
    };
}

addItem(){
    if(this.state.value!==""){
            tasklist.push(this.state.value)
    }
    this.setState({value:''})
}
// deleteItem(index){
//     delete tasklist[];
// }
handleChange(e){
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <div>
        <h1>Kalvium To-Do List</h1>
        <div>
            <textarea onChange={this.handleChange} defaultValue={this.state.value}/>
            <button onClick={()=>this.addItem()}>Add</button>
        </div>
        <div>
            {this.state.value}
        </div>
        <div  className='flex'>
            
                {tasklist.map((todos)=>{
                    return <div className='cards'><h3 className='todoh3' contentEditable='true'>{todos}</h3>
                    <p onClick={()=>this.deleteItem()}>X</p>
                    </div>
                })}
        
        </div>
      </div>
    )
  }
}
