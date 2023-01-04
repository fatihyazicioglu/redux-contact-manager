import React from "react";
import ReactDOM from "react-dom";
import PeopleList from "./components/PeopleList";
import AddPersonForm from "./components/AddPersonForm";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";

const initialState = {
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"],
};

// Reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PERSON":
      // Reducers are functions that handle the actions.
      // The function takes the current state and the action as its parameters and returns the new state.
      // A reducer can handle multiple actions, so usually it includes a switch statement for each action case.
      // In the code above, our reducer function uses a switch statement to handle the appropriate actions.
      // As the default case, it just returns the current state.
      // Remember, the reducer has to be a pure function, meaning it cannot modify the current state. It has to return a new state object instead.
      return { ...state, contacts: [...state.contacts, action.data] };
    default:
      return state;
  }
}

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    {/* <Provider> makes the "store" available to any nested child component.Provider takes the store as an attribute and makes it available to its child component. */}
    <AddPersonForm />
    <PeopleList />
  </Provider>,
  document.getElementById("root")
);
