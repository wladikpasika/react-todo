import React, { Component } from 'react';
import listStyles from './css/list.css' 

class List extends Component {

  handleEdit = (key, event) => {
    const newValue = window.prompt('Eenter new value', event.target.parentElement.textContent);
    
    if (!!newValue.trim() === true) {
      this.props.onEdit(key, newValue);
    }
    else{
      alert('Empty string');
    }
  }

  handleRemove = (key) => {
    this.props.onRemove(key);
  }

  render() {
    const { tasks = {} } = this.props;

    return (
      <ul>
        {Object.keys(tasks).map((key, index) => {
          const value = tasks[key];

          return (
            <li key={index}>
              {value}
              <i className="far fa-edit edit" onClick={(event) => this.handleEdit(key, event)}></i>
              <i className="fas fa-times close" onClick={() => this.handleRemove(key)}></i>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;