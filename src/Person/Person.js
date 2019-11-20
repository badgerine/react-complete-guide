import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width:60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width :500px): {
        width: 450px
    }
    `;

const person = (props) => {

    return (
        <StyledDiv>
            < input type="text" onChange={props.liveMod} value={props.name} />
            <p onClick={props.click}>i'm {props.name} and i am {props.age} years old! {props.children}</p>
        </StyledDiv>

    )
};

export default person;