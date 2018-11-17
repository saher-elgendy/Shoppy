import React, { Component } from 'react';
import Header from './header';
import Products from './products'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Products />
      </div>
    )
  }
}

export default App;
