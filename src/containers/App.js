import React, { Component } from 'react';
// import React, {useState} from 'react';
import classes from './App.css';
import PersonCollection from '../components/PersonCollection/PersonCollection';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor.')
  }
  state = {
    persons: [
      { id: 'p1', name: 'Stevovo', age: 23 },
      { id: 'p2', name: 'Bongo', age: 33 },
      { id: 'p3', name: 'Tumi', age: 24 }
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[Apps.js] getDerivedStateFromProps()', props, state);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount()');
    // setTimeout(()=>{this.setState({showCockpit:false})}, 9000);

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate()');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate()');
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
    console.log('[App.js] render()')
    let personsView = null;
    
    let cockpitView = this.state.showCockpit ? (
      <Cockpit
        title={this.props.appTitle}
        personsLength={this.state.personsLength}
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler} />) :
        null;

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
        
        <button onClick={() => this.setState({showCockpit: !this.state.showCockpit})}>Show Cockpit</button>
        {cockpitView}
        <p />
        {personsView}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Progress nyana!'));
  }
}

export default App;