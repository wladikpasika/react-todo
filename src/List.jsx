import React, { Component } from 'react';

class List extends Component {

  /*handlerClickOnList(event,keyId){//edit this, separate on different function  onEdit, onRemove
    event.persist(); // important - save event object!
  
    if (event.target.className === 'fas fa-times close') {
      //remove item from object
      this.removeItemFromState(keyId);
    }
    else if (event.target.className === 'far fa-edit edit') {
      const result = prompt("Сhange the task, please", event.target.parentElement.textContent);
      if (result||result.length > 0) {
        //edit task
        this.editItemFromState(result,keyId);
      }
      else { alert('Empty string') }
    }
  }*/


  render(){
    
    let Li = (
    <div>
      {
        ((tasks) => { //bind context to this - arrow function
          let array = [];
          for (let task in tasks){//important use let, let copy variable each iteration
            array.push (
            <li key = {task} onClick = { event => this.props.onList(event, task) }> 
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