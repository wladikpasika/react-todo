import React, { Component } from 'react';

class Controls extends Component {

  constructor(props, context, updater) {
    super(props, context, updater);

    this.state = "";
    this.handleInput = this.handleInput.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  clearInput(){
    if(!this.state){
      return "";
    }
      return this.state.value;
  }

  handleInput(event) {
    const { value = '' } = event.target;
    this.setState({ value });
  }

  handlePress() {
    const { value } = this.state;
    this.props.onPress(value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <input
          placeholder = "Enter task"
          onChange = {this.handleInput}
          value = {this.clearInput()}
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