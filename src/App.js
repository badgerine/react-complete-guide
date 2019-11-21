import React, { Component } from 'react';
// import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px,
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black
  }
`;

class App extends Component {

  state = {
    persons: [
      { id: 'p1', name: 'Stevovo', age: 23 },
      { id: 'p2', name: 'Bongo', age: 33 },
      { id: 'p3', name: 'Tumi', age: 24 }
    ],
    showPersons: true
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
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) =>
          (<Person
            click={() => { this.deletePersonHandler(index) }}
            name={person.name}
            age={person.age}
            key={person.id}
            liveMod={(event) => {
              this.nameChangeHandler(event, person.id);
            }} />//
          ))
        }
      </div>);
    }

    const styleclass = [];
    if (this.state.persons.length <= 2) {
      styleclass.push('red');
    }
    if (this.state.persons.length <= 1) {
      styleclass.push('bold');
    }
    console.log(styleclass);

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={styleclass.join(' ')}>I'm growing</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Show People</StyledButton>
        <p />
        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Progress nyana!'));
  }
}

export default App;
// export default app;
