import React from 'react';
import Person from '../Person/Person'

const personCollection = (props) => props.personCollection.map((person, index) =>
    <Person
        click={() => { props.clicked(index) }}
        name={person.name}
        age={person.age}
        key={person.id}
        liveMod={(event) => {
            props.changed(event, person.id);
        }} />
);

export default personCollection;