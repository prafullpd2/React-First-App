import React from 'react';
import classes from './Cockpit.module.css';


const cockpit = (props) => {
    let toggleButtonClasses = [classes.ToggleButton];

    if(props.showPersons){
        toggleButtonClasses.push(classes.Green);
    }

    return (
        <div >
            <h1>I am React App</h1>
            <button 
                className={toggleButtonClasses.join(' ') }
                onClick={props.clicked} >Toggle Persons</button>
        </div> 
    );
}


export default cockpit;