import "./design.css";
import React, { Component } from 'react';
import Logout from './Logout'

class Design extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Design</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reloads.
        </p>
        <Logout />
      </div>
    );
  }
}

export default Design;
