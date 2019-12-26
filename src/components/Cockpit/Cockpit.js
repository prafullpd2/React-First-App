import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';

let clearTimeoutID = null;

const Cockpit = (props) => {
    
/*     useEffect(() => {

    //this useEffect will run only first time. 
    // BCz empty array is passed in second argument.

    }, []); */
    /*     useEffect(() => {

    //this useEffect will props.persons will be changed. 
    //BCz empty array is passed in second argument.

    }, [props.persons]); */
    useEffect(() => {
        console.log('[Cockpit js] useEffect');
        if(clearTimeoutID){
            clearTimeout(null);
        }
        clearTimeoutID = setTimeout(() => {
            console.log('[Cockpit js] saved data to the cloud')
        }, 1500);
        //http request.
        return () => { 
            console.log('[Cockpit js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit js] 2nd useEffect');

        return () => { 
            console.log('[Cockpit js] cleanup work in 2nd useEffect');
        };
    });

    console.log('[Cockpit js] constructor function');

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


export default Cockpit;