import React from 'react';

const withClass2 = (WrappedComponent, className) => (//this is now no longer a component, but just a function however; which returns a function component.
    props => (
    <div className={className}>
        <WrappedComponent/>
    </div>
    )
)

export default withClass2;