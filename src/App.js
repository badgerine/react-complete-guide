import React, { Component } from 'react';
// import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Stevovo', age: 23},
      {name: 'Bongo', age: 33},
      {name: 'Tumi', age: 24}
    ],
    showPersons : true
  }
 
  switchNameHandler = (newName) => {
    // console.log("switch name was clicked")
    // DONT DO THIS!! personsState.persons[0].name = "dumza";
    this.setState({persons: [
      {name: 'Stevovo', age: 23},
      // {name: 'Bongo', age: 33},
      {name: newName, age: 24}
      ]
    });
    // console.log('after setPersonState');
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 55},
        {name:  'Bongo', age: 33}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const bstyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px', 
      cursor: 'pointer'
    };

    let persons = this.state.showPersons ? (
      <div>
        {this.state.persons.map((person, index) => 
          (<Person 
            click={() => {this.deletePersonHandler(index)}} 
            name={person.name} 
            age={person.age}/>
          ))
        }
      </div>)
      : null;


    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button 
          style={bstyle}
          onClick={this.togglePersonsHandler} >People</button>
        <p/>
        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Progress nyana!'));
  }
}

export default App;
// export default app;
