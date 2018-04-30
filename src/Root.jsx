import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import  Controls from './Controls';
import  List from './List';

class Root extends Component {
  constructor(){
    super();
    this.state = {tasks:{}};
    this.counterForState = null;
    this.clickOnListHandler = this.handlerClickOnList.bind(this); //bind context
    this.addItemToState = (value) => {

      if(this.counterForState === null){ //check counterForState if null, set number 0, else - use incremnt 
        this.counterForState = 0;
      }
      else {
        this.counterForState +=1;
      }
      if(value){ // check value, if empty - skip
        let newState = {...this.state.tasks}; //temporary state for a copy state
        newState[this.counterForState]= value;
        this.setState({tasks:newState}); 
    }
  }
}

  removeItemFromState(keyId){
    
    let newState = {...this.state.tasks}; //temporary state for a copy state

      if(newState[keyId]){
        delete newState[keyId];
        return this.setState({tasks:newState} 
        )
      };
  };

  editItemFromState(value,keyId){
    
    let newState = {...this.state.tasks}; //temporary state for a copy state

      if(newState[keyId]){
        newState[keyId] = value;
        return this.setState({tasks:newState} 
        )
      };
  };

  handlerClickOnList(event,keyId){
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
  }

  render() {
    return (
      <div>
        <Controls onPress = {this.addItemToState}/>
        <List tasks = {this.state.tasks} changeList = {this.clickOnListHandler}/>
      </div>
    );
  }
}

export default Root;

