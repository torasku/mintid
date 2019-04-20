import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
            <h1>MinTid</h1>
            <p className="Beta-tag">Beta</p>
        </header>
      </div>
    );
  }
}

export default Header;
