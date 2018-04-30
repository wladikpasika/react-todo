import React, { Component } from 'react';

class List extends Component {


  render(){
    
    let Li = (
    <div>
      {
        ((tasks) => { //bind context to this - arrow function
          let array = [];
          for (let task in tasks){//important use let, let copy variable each iteration
            array.push (
            <li key = {task} onClick = { event => this.props.changeList(event, task) }> 
            {tasks[task]} 
                  <i className="far fa-edit edit"></i>
                  <i className="fas fa-times close"></i>  
            </li>);
          }
          return array;
        })(this.props.tasks)
      } 
    </div>
    );

    return (
      <ul>
        {Li}
      </ul>
    );
  }
  
}

export default List;