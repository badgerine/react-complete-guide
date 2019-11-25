import React, { Component } from 'react';
import personClasses from './Person.css';
import WithClass from '../hoc/WithClass';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <WithClass classes={[personClasses.Person]}>
                < input type="text" onChange={this.props.liveMod} value={this.props.name} />
                <p onClick={this.props.click}>i'm {this.props.name} and i am {this.props.age} years old! {this.props.children}</p>
            </WithClass>

        )
    };
}

export default Person;