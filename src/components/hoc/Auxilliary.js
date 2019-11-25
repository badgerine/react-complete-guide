//higher order components are components that wrap other components, in this case- to fulfill React's requirement of having a wrapping/single jsx element.
import React from 'react';

const auxilliary = (props) => props.children;

export default auxilliary;