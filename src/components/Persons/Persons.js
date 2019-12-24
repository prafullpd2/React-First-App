import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person,index) =>{
  console.log('[Persons js] rendering');
    return (
      <ErrorBoundary key = {person.id}>
        <Person
        name = {person.name}
        age = {person.age}
        changed={(event) => {props.changeName(event, person.id);}} 
        delete = {(e) => {
          e.preventDefault();
          e.stopPropagation(); 
          props.deletePerson(index);}}
        />
      </ErrorBoundary>
    );
  });

  export default persons;