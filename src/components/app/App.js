import React, { Component } from 'react';
import Header from '../header/Header'
import Main from '../main/Main'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
          <Main/>
      </>
    );
  }
}

export default App;
