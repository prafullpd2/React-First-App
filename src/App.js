import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  
  state = {
    persons:[
      { id: 'sasa', name: 'neon', age: 29 },
      { id: 'kjsda', name: 'Bee', age: 24 }
    ],
    showPersons: true

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


    render(){

      let persons = null
      if(this.state.showPersons){
        persons = (
          <div>
            {
            this.state.persons.map((person,index) =>{
              return (
                <Person
                key = {person.id}
                name = {person.name}
                age = {person.age}
                changed={(event) => {this.nameChangeHandler(event, person.id)}} 
                delete = {(e) => {
                  e.preventDefault();
                  e.stopPropagation(); 
                  this.deletePersonHandler(index)}}
                />
              );
            })
            }
          </div> 
        );

        // style.backgroundColor = '#ff5e00';
      }
      return  ( 
        <div className="App">
          <h1>I am React App</h1>
          <button className='toggle-btn'
            onClick={this.togglePersonsState} >
              Toggle Persons
          </button>
              
              {persons}
        </div> 
        );
    }
  
}
export default App;


