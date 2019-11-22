import React, { Component } from 'react';
// import React, {useState} from 'react';
import classes from './App.css';
import Person from '../components/Person/Person';
import PersonCollection from '../components/PersonCollection/PersonCollection';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  state = {
    persons: [
      { id: 'p1', name: 'Stevovo', age: 23 },
      { id: 'p2', name: 'Bongo', age: 33 },
      { id: 'p3', name: 'Tumi', age: 24 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    //always update state in an immutable fashion, without initially changing the original state
    const persons = this.state.persons.slice();//slice copies the object to the new reference, as opposed to a reference to the original object
    //or const persons = [...this.state.persons]; //using the spread operator.
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {

    let personsView = null;

    if (this.state.showPersons) {
      personsView =
        <PersonCollection
          personCollection={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          personCollection={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        <p />
        {personsView}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Progress nyana!'));
  }
}

export default App;