import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
    render(){
        return <h1>Hello, react</h1>
    }
}

ReactDOM.render(<Layout/>, document.getElementById('root'))