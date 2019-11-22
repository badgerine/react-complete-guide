import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let btnClass = [classes.Button];
    const styleclass = [];
    if (props.personCollection.length <= 2) {
      styleclass.push(classes.red);
    }
    if (props.personCollection.length <= 1) {
      styleclass.push(classes.bold);
    }

    if(props.showPersons){
        btnClass.push(classes.Red);
    }

    return (
        <div>
            <h1>Hi, I'm a react app</h1>
            <p className={styleclass.join(' ')}>I'm growing</p>
            <button className={btnClass.join(' ')} onClick={props.clicked}>
                Show People
        </button>
        </div>
    );
};

export default cockpit;