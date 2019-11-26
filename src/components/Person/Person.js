import React, { Component } from 'react';
import personClasses from './Person.css';
import WithClass from '../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context';

class Person extends Component {

    constructor(props) {//always add props to ensure app works as expected!!
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log('[Person.js].componentDidMount() | context value: ' + this.context.authenticated);
    }

    componentDidUpdate() {
        console.log('[Person.js].componentDidUpdate() context value: ' + this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <WithClass classes={[personClasses.Person]}>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                <input
                    type="text"
                    // ref={(inputEl) => {this.inputElement = inputEl;}}//only works in class based components!!
                    ref={this.inputElementRef}
                    onChange={this.props.liveMod}
                    value={this.props.name} />
                <p onClick={this.props.click}>i'm {this.props.name} and i am {this.props.age} years old! {this.props.children}</p>
            </WithClass>

        )
    };
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    liveMod: PropTypes.func
}

export default Person;