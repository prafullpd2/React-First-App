import React, {Component} from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component{
  constructor(props){
    super(props);
    this.props = props;
    console.log('[Persons js} constructor')
}

/*   static getDerivedStateFromProps(props, state){
    console.log('[Persons JS] getDerivedStateFromProps');
    return state;
  } */
  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons JS] shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons JS] getSnapshotBeforeUpdate');
    return {mesage: '[Persons js] Snapshot!!!'};
    
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons JS] componentDidUpdate', snapshot);

  }
  componentWillUnmount(){
    console.log('[Persons JS] componentWillUnmount');

  }

  render(){
    console.log('[Persons js] rendering');
    return this.props.persons.map((person,index) =>{
      return (
        <ErrorBoundary key = {person.id}>
          <Person
            name = {person.name}
            age = {person.age}
            changed={(event) => {this.props.changeName(event, person.id);}} 
            delete = {(e) => {
              e.preventDefault();
              e.stopPropagation(); 
              this.props.deletePerson(index);
            }}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;