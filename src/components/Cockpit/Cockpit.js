import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  useEffect(() =>{
    console.log('[Cockpit.js] useEffect()');

    //Http request ...
    setTimeout(() => {
      alert('saved data to cloud!');
    }, 1000);
  }, []); //this empty array indicates to useEffect to only execute the 1st time this component is rendered.

  let btnClass = [classes.Button];
  const styleclass = [];
  if (props.personCollection.length <= 2) {
    styleclass.push(classes.red);
  }
  if (props.personCollection.length <= 1) {
    styleclass.push(classes.bold);
  }

  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={styleclass.join(' ')}>I'm growing</p>
      <button className={btnClass.join(' ')} onClick={props.clicked}>
        Show People
        </button>
    </div>
  );
};

export default cockpit;