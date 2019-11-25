import React, { PureComponent } from 'react'; //PureComponent is a normal component that by default implements shouldComponentUpdate checking all the component's props.
import Person from '../Person/Person'

class PersonCollection extends PureComponent {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[PersonCollection.js] getDerivedStateFromProps()');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[PersonCollection.js] shouldComponentUpdate()');
    //     return nextProps.personCollection !== this.props.personCollection
    //             || nextProps.changed !== this.props.changed
    //             ||nextProps.clicked !== this.props.clicked
    //             ;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[PersonCollection.js] getSnapshotBeforeUpdate()');
        //supposed to return object [null], but developer tools interpreter didnt complain!!
        return {message: 'snapshot data^'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[PersonCollection.js] componentDidUpdate(): '+prevProps,prevState,snapshot);
    }

    componentWillUnmount(){
        console.log('[PersonCollection.js] componentWillUnmout()');
        //could place to close connections and clean up
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