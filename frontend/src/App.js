import React, { Component } from 'react';
import './App.css';
import Task from './components/Task/Task'
import About from './components/About/About'
import Menu from './components/templetes/Menu'

class App extends Component {


  render() {
    return (
      <div className="container">
        <Menu />
        <Task />
      </div>
    );
  }
}

export default App;
