import React, {Component} from 'react';
import classes from './Person.module.css';



class Person extends Component{
    constructor(props){
        super(props);
        this.props = props;
        console.log('[Person js} constructor')
    }
    render(){
        console.log('[Person js] rendering');

        return (
        <div className={classes.Person}>
            <div className={classes['delete-person']} onClick={this.props.delete}>&#10006;</div>
            <h2>
                I am a {this.props.name},
                I am {this.props.age} years old.</h2>
            <p> {this.props.children} </p>
            <input type="text" className={classes['name-input']} onChange={this.props.changed} value={this.props.name}/>
        </div >
        );
    }
}



export default Person;
