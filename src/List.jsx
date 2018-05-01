import React, { Component } from 'react';
import listStyles from './css/list.css' 

class List extends Component {


  getEditPrompt(event){
    const result = prompt("Сhange the task, please", event.target.parentElement.textContent);
      if (result&&result.length > 0) {
        return result;
      }
      else {
         alert('Empty string') 
    }
  }
  render(){

    let Li = (
    <div>
      {
        ((tasks) => { //bind context to this - arrow function
          const array = [];
          for (let task in tasks){//important use let, let copy variable each iteration
            array.push (
            <li key = {task} > 
            {tasks[task]} 
                  <i className="far fa-edit edit" onClick = { event => {
                    const text = this.getEditPrompt(event);
                    return text?this.props.onEdit(text, task):false
                    }
                  }></i>
                  <i className="fas fa-times close" onClick = {() => {
                    return this.props.onRemove(task);
                  }}></i>  
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