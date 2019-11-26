import React, { Component } from 'react';
import classes from './App.css';
import PersonCollection from '../components/PersonCollection/PersonCollection';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass2 from '../components/hoc/withClass2';//lower case as withClass2 is only a function and not a function component
import Auxilliary from '../components/hoc/Auxilliary';
import AuthContext from '../context/auth-context';

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
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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

    this.setState((prevState, props) => {//the only way to guarantee that you are updating your state based on the previous state is to pass in the previous state. otherwise in a resource intensive app, you may access the state before it is updated.
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('[App.js] render()')
    let personsView = null;

    let cockpitView = this.state.showCockpit ? (
      <Cockpit
        title={this.props.appTitle}
        personsLength={this.state.personsLength}
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler}
        login={this.loginHandler} />) :
      null;

    if (this.state.showPersons) {
      personsView =
        <PersonCollection
          personCollection={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
        />
    }

    return (
      <Auxilliary>
        <button onClick={() => this.setState({ showCockpit: !this.state.showCockpit })}>Show Cockpit</button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          {cockpitView}
          <p />
          {personsView}
        </AuthContext.Provider>
      </Auxilliary>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Progress nyana!'));
  }
}

export default withClass2(App, classes.App);