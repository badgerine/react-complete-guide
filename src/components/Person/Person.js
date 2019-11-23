import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person}>
                < input type="text" onChange={this.props.liveMod} value={this.props.name} />
                <p onClick={this.props.click}>i'm {this.props.name} and i am {this.props.age} years old! {this.props.children}</p>
            </div>

        )
    };
}

export default Person;