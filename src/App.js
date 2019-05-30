import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
    <div className="App">
      <h1> Hi, I am a react app.</h1>
      <p>This is really working!</p>
      <Person name="Roig" age="29" />
      <Person name="Mia" age="25" > My Hobbies: Anime </Person>
      </div>
  );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
