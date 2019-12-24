import React from 'react';
import classes from './Person.module.css';



const person = (props) => {
    // const rnd = Math.random()
    // if(rnd < 0.4){
    //     throw new Error('Something Went Wrong', rnd);
    // }
    console.log('[Person js] rendering');

    return (
        
    <div className={classes.Person}>
        <div className={classes['delete-person']} onClick={props.delete}>&#10006;</div>
        <h2>
            I am a {props.name},
            I am {props.age} years old.</h2>
        <p> {props.children} </p>
        <input type="text" className={classes['name-input']} onChange={props.changed} value={props.name}/>

    </div >

    );
};


export default person;
