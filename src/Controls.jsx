import React, { Component } from 'react';

class Controls extends Component {

  state = {
    value: ''
  }

  handleInput = (event) => {
    const { value = '' } = event.target;
    this.setState({ value });
  }

  handlePress = () => {
    const { value } = this.state;
    if (!!value === true){
      this.props.onAdd(value);
      this.setState({ value: '' });
    }
    else {
      alert('Empty Input!!!');
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <input
          placeholder="Enter task"
          onChange={this.handleInput}
          value={value}
        />
        <button onClick={this.handlePress}>
          ADD
        </button>
      </div>
    );
  }

}

export default Controls;