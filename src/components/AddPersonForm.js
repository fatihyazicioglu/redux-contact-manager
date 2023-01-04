// In order to connect our component to the store, we need to call the connect() function.
// The connect() function returns a new component, that wraps the component you passed to it and connects it to the store using its special parameter functions.
// function connect(mapStateToProps?, mapDispatchToProps?) 
// JS
// connect() takes two optional parameters:

// mapStateToProps
// This function is called every time the store state changes. It receives the state as a parameter and returns the state for the component.
// For example, for our Counter, we need to return the count state variable:
// function mapStateToProps(state) {
//   return {
//     count: state.count
//   };
// }
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addPerson } from '../actions'

function AddPersonForm(props) {
  const [person, setPerson] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
    if(person !== '') {
      props.addPerson(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}

const mapDipatchToProps = {
  addPerson
}

export default connect(null, mapDipatchToProps)(AddPersonForm)
// In order to connect our component to the store, we need to call the connect() function.
// The connect() function returns a new component, that wraps the component you passed to it and connects it to the store using its special parameter functions.
// function connect(mapStateToProps?, mapDispatchToProps?) 
// JS
// connect() takes two optional parameters:

// mapStateToProps
// This function is called every time the store state changes. It receives the state as a parameter and returns the state for the component.
// For example, for our Counter, we need to return the count state variable:
// function mapStateToProps(state) {
//   return {
//     count: state.count
//   };
// }