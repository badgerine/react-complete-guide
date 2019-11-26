import React, { useEffect, Fragment, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  
  //useEffect runs after a render cycle
  useEffect(() => {
    //simulate Http request ...
    // setTimeout(() => {
    //   console.log('[Cockpit.js] useEffect()1|setTimeOut() saved data to cloud!');
    // }, 1000);
    console.log('[Cockpit.js] useEffect()1 | toggle button to show people');
    toggleBtnRef.current.click();
  }, []); //this empty array indicates to useEffect to only execute the 1st time this component is rendered.

  useEffect(() => {
    console.log('[Cockpit.js] useEffect()2');
    //simulate Http request ...
    setTimeout(() => {
      console.log('[Cockpit.js] useEffect()2|setTimeout() button toggled!');
    }, 1000);
  }, [props.showPersons]);//useEffect will be rum when the value of props.showPersons changes 

  useEffect(() => {
    //simulate http request...
    return () => {
      console.log('[Cockpit.js] useEffect()3|return() clean up work in useEffect.')
    }
  }, []);// the return expression together with the brackets indicate that clean up work should only occur when the component is destroyed?

  let btnClass = [classes.Button];
  const styleclass = [];
  if (props.personsLength <= 2) {
    styleclass.push(classes.red);
  }
  if (props.personsLength <= 1) {
    styleclass.push(classes.bold);
  }

  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  return (
    <Fragment>
      <h1>{props.title}</h1>
      <p className={styleclass.join(' ')}>I'm growing</p>
      <button ref={toggleBtnRef} className={btnClass.join(' ')} onClick={props.clicked}>
        Show People
      </button>
      <AuthContext.Consumer>
      {(context) => <button onClick={context.login} className={btnClass.join(' ')}>Log in</button>}
      </AuthContext.Consumer>
    </Fragment>
  );
};

export default React.memo(cockpit); //functional components do not have lifecycle hooks[shouldComponentUpdate]. React.memo does the same thing as shouldComponentUpdate: stores snapshot of component and only rerenders if the component inputs/props have changed.