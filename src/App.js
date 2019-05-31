import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Roig', age: 29},
      { name: 'Mia', age: 25}

    ]
  }
  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DON'T DO THIS DO NOT MUTATE STATE DIRECTLY this.state.persons[0].name = 'Roig';
    this.setState( {
      persons:  [
      { name: newName, age: 24},
      {  name: 'MiaC', age: 25}

  ]
  } ) 
}

  render() {
    return (
    <div className="App">
      <h1> Hi, I am a react app.</h1>
      <p>This is really working!</p>
      <button onClick={() => this.switchNameHandler.bind(this, 'Roigus')}>Switch name </button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age} 
      Click={this.switchNameHandler.bind(this, 'Roigis')} > My Hobbies: Anime </Person>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age} />
      </div>
  );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
