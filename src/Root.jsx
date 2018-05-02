import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import  Controls from './Controls';
import  List from './List';


class Root extends Component {

  state = {
    tasks: {}
  }
  
  iterator = 0;

  handleAddItem = (value = '') => {
    const { tasks } = this.state;

    this.setState({
      tasks: {
        ...tasks,
        [this.iterator++]: value
      }
    });
  }

  handleEditItem = (key, newValue) => {
    const { tasks } = this.state;
    const newItems = Object.assign({}, tasks);
    newItems[key] = newValue;

    this.setState({ tasks: newItems });
  }

  handleRemoveItem = (key) => {
    const { tasks } = this.state;
    const newItems = Object.assign({}, tasks);
    delete newItems[key];

    this.setState({ tasks: newItems });
  }

  render() {
    const { tasks } = this.state;

    return (
      <Fragment>
        <Controls
          placeholder="Entr task"
          onAdd={this.handleAddItem}
        />
        <List
          tasks={tasks}
          onEdit={this.handleEditItem}
          onRemove={this.handleRemoveItem}
        />
      </Fragment>
    );
  }
}
/*class Root extends Component {
    state = {
      tasks:{

      }
    };
    counterForState = null;
    handleAddItem = (value) => {

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
  removeItemFromState = (keyId) => {
   
    let newState = {...this.state.tasks}; //temporary state for a copy state

      if(newState[keyId]){
        delete newState[keyId];
        return this.setState({tasks:newState} 
        )
      };
  };

  editItemFromState = (value,keyId) => {
    
    const newState = {...this.state.tasks}; //temporary state for a copy state 

      if(newState[keyId]){
        newState[keyId] = value;
        return this.setState({tasks:newState} 
        )
      };
  };
  render() {
    return (
      <div>
        <Controls onPress = {this.handleAddItem}/>
        <List
          tasks={this.state.tasks}
          onEdit={this.editItemFromState}
          onRemove={this.removeItemFromState}
        />
      </div>
    );
  }
}*/

export default Root;

