import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';
import  {createStore}  from 'redux'
import { Provider } from 'react-redux'
import store from './app/store';

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
  </Provider>,
  document.getElementById('root')
);
