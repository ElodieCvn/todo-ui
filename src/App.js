import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import './App.css';
import TodosApp from './components/TodosApp';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render(){
    return (
    <Provider store ={store}>
       <TodosApp/>
    </Provider>
    );
  }
}

