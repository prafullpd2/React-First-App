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
    showPersons: false,
    showCockpit: true

  }  

  static getDerivedStateFromProps(props, state){
    console.log('[App js] getDerivedStateFromProps', props, state);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[App js] getSnapshotBeforeUpdate');
    return {mesage: '[App js] Snapshot'};
    
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[App js] componentDidUpdate', snapshot);

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
      console.log('[App js] render');

      let persons = null;
      if(this.state.showPersons && this.state.showCockpit){
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
          <button onClick={() => {this.setState({
            ...this.state,
            showCockpit: !this.state.showCockpit
          })}}>Toggle Cockpit</button>
          {
            this.state.showCockpit ?
                      <Cockpit 
                      showPersons = {this.state.showPersons} 
                      persons={this.state.persons}
                      clicked = {this.togglePersonsState}
                      /> : null 
          }

          {persons}
        </div> 
        );
    }
  
}
export default App;


