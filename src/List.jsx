import React, { Component, Fragment } from 'react';
import listStyles from './css/list.css'
import Radium from 'radium'

class List extends Component {

  state = {
    selected: []
  }

  handleEdit = (key, event) => {
    const newValue = window.prompt('Eenter new value', event.target.parentElement.textContent);

    if (newValue&&!!newValue.trim() === true) {
      this.props.onEdit(key, newValue);
    }
    else {
      alert('Empty string');
    }
  }

  handleRemove = (key) => {
    this.props.onRemove([key]);
  }

  handleChahgeCheckbox = (key) => {
    const { selected } = this.state;

    const newSelected = selected.includes(key)
      ? selected.filter(oldKey => oldKey !== key)
      : [ ...selected, key ];

    this.setState({ selected: newSelected });
  }

  handleClearState = () => {
    const newSelected  = [];
    this.setState({ selected: newSelected});
  }

  render() {
    const { tasks = {} } = this.props;

    return (
<Fragment>
  <ul>
    {Object.keys(tasks).map((key, index) => {
      const value = tasks[key];

      let selectItem = this.state.selected.includes(key);

      return (
        <li key={index} className = {selectItem?'select':'unselect'}>
          <input type="checkbox" value={index} onChange={() => this.handleChahgeCheckbox(key)} 
          checked = {selectItem}
          />
          {value}
          <i className="far fa-edit edit" onClick = {(event) => this.handleEdit(key, event)}></i>
          <i className="fas fa-times close" onClick = {() => !selectItem?this.handleRemove(key):false}></i>
        </li>
      );
    })}
  </ul>
  <input type="button" value="Unselect" onClick = {this.handleClearState}/>
  <input type="button" value="Delete Selected" onClick = {() => this.props.onRemove(this.state.selected)}/>
</Fragment>
    );
  }
}

export default Radium(List);