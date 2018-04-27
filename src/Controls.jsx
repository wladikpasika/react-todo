import React, { Component } from 'react';

export class Controls extends Component {

  render() {
    return (
      <div>
        <input placeholder="Enter task" />
        <button>ADD</button>
      </div>
    );
  }
}

export default Controls;