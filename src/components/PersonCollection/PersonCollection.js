import React, { Component } from 'react';
import Person from '../Person/Person'

class PersonCollection extends Component {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[PersonCollection.js] getDerivedStateFromProps()');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[PersonCollection.js] shouldComponentUpdate()');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[PersonCollection.js] getSnapshotBeforeUpdate()');
        //supposed to return object [null], but developer tools interpreter didnt complain!!
        return {message: 'snapshot data^'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[PersonCollection.js] componentDidUpdate(): '+prevProps,prevState,snapshot);
    }

    render() {
        console.log('[PersonCollection.js] rendering...');
        return (
            this.props.personCollection.map((person, index) => {
                return (
                    <Person
                        click={() => { this.props.clicked(index) }}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        liveMod={(event) => {
                            this.props.changed(event, person.id);
                        }} />);
            })
        );
    }
}

export default PersonCollection;