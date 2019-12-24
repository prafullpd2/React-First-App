import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  
  constructor(props){
    super(props);
    console.log('[App js] constructor');
  }
  
  state = {
    persons:[
      { id: 'sasa', name: 'neon', age: 29 },
      { id: 'kjsda', name: 'Bee', age: 24 }
    ],
    showPersons: true

  }  

  static getDerivedStateFromProps(props, state){
    console.log('[App js] getDerivedStateFromProps', props, state);
    return state;
  }
  
  nameChangeHandler = ( event , id) =>{

    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    this.setState({
      ...this.state,
      persons:persons
    });

  };

  deletePersonHandler = (index) => {
    this.setState(
      {
        ...this.state,
        persons: this.state.persons.filter((person,ind)=>{
            if(ind === index)
            return false;

            return true;
        })
      }
    );
  }

  togglePersonsState = () => {
    this.setState({
      ...this.state,
      showPersons: !this.state.showPersons
    });
  }

  componentDidMount(){
    console.log('[App js] componentDidMount');
  }

    render(){

      let persons = null;
      if(this.state.showPersons){
        persons = (
          <div>
            <Persons 
              persons = {this.state.persons}
              changeName = {this.nameChangeHandler}
              deletePerson = {this.deletePersonHandler} />
          </div> 
        );
      }
      return  ( 
        <div className={classes.App}>
              <Cockpit 
                showPersons = {this.state.showPersons} 
                persons={this.state.persons}
                clicked = {this.togglePersonsState}
                />
              {persons}
        </div> 
        );
    }
  
}
export default App;


