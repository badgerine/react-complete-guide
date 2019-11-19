import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <input type="text" onChange={props.liveMod} value={props.name} />
            <p onClick={props.click}>i'm {props.name} and i am {props.age} years old! {props.children}</p>
        </div>

    )
};

export default Radium(person);