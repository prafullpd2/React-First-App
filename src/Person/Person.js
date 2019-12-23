import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const PersonDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    padding: 16px;
    text-align: center;
    position: relative;

   &:before {
    content: "";
    position: absolute;
    background-color: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    box-shadow:  -20px 20px 40px 0px #ccc;
    }

    @media (min-width: 500px) {
        width: 450px;
}`;
const DeleteIcon = styled.div`
    position: absolute;
    right: 24px;
    top: 24px;
    background-color: #f5512b;
    border-radius: 56%;
    height: 24px;
    width: 24px;
    color: #fff;
    cursor: pointer;
    `;

    const PersonNameInput = styled.input`
    border: 2px solid #c8c5c5;
    outline: transparent;
    padding: 5px;
    text-align: center;
    font-family: roboto, sans-serif;
    font-size: 16px;
    border-radius: 9px;
    border-top: 1px solid #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
    position: relative; 

    &:before{
        content: " ";
        position: absolute;
        background-color: #fff;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        box-shadow: -20px 17px 50px -8px black;
    }
    `;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    return (
        
    <PersonDiv>
        <DeleteIcon onClick={props.delete}>&#10006;</DeleteIcon>
        <h2>
            I am a {props.name},
            I am {props.age} years old.</h2>
        <p> {props.children} </p>
        <PersonNameInput type="text" onChange={props.changed} value={props.name}/>

    </PersonDiv>

    );
};


export default person;
