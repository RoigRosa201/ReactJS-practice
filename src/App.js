import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Roig', age: 29},
      { name: 'Mia', age: 25},
      { name: 'Aron', age: 23}

    ],
    otherState: 'some other value',
    showPersons: false
  }

nameChangeHandler = ( event ) => {
  this.setState( {
    persons:  [
    { name: 'Roig', age: 24},
    { name: event.target.value, age: 25},
    { name: 'Alisson', age: 22},
  ]
  } ) 
}

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1);
  this.setState( {showPersons: persons})
}


togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState( { showPersons: !doesShow } );

}

  render() {
    const style = {
      backgroudnColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (    
    <div>
      {this.state.persons.map((person, index ) => {
        return < Person
          click={() => this.deletePersonHandler(index) }
          name = {person.name}
          age = {person.age} />
      })}
        </div>
      );
    }

  return (
    <div className="App">
      <h1> Hi, I am a react app.</h1>
      <p>This is really working!</p>
      <button 
        style={style}
        onClick={this.togglePersonsHandler}> Toggle Persons</button>
        {persons}
      </div>
        
  );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}




export default App;
