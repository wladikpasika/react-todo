import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Controls } from './Controls';

class Root extends Component {

  state = {
    
  }

  render() {
    return (
      <div>
        <Controls />
        <List />
      </div>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
