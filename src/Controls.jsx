import React, { Component } from 'react';

class Controls extends Component {

    state = { value: '' };
    handleInput = this.handleInput.bind(this);
    handlePress = this.handlePress.bind(this);
 
  handleInput(event) {
    const { value = '' } = event.target;
    this.setState({ value });
  }

  handlePress() {
    const { value } = this.state;
    this.props.onPress(value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <input
          placeholder = "Enter task"
          onChange = {this.handleInput}
          value = {value}
        />
        <button
          onClick={this.handlePress}
        >
          ADD
        </button>
      </div>
    );
  }

}

export default Controls;