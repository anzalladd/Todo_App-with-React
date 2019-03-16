import React, { Component } from 'react';
import './App.css';
import MyHeader from './components/MyHeader';
import MyMain from './components/MyMain';
import MyFooter from './components/MyFooter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader/>
        <MyMain/>
        <MyFooter/>
      </div>
    );
  }
}

export default App;
