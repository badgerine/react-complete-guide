import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

    const personStyle = {
        '@media(min-width:500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={personStyle}>
            <input type="text" onChange={props.liveMod} value={props.name} />
            <p onClick={props.click}>i'm {props.name} and i am {props.age} years old! {props.children}</p>
        </div>

    )
};

export default Radium(person);