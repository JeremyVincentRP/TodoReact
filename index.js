import React from 'react'
import ReactDOM from 'react-dom'

import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import todoReducer from './reducers/reducer'
import TodoApp from './containers/TodoApp'

import {addTodo, fetchTodos} from './actions'

////////////////////////////////////////////////////////////////////////////////
// Store creation

const store = createStore(
  todoReducer,
  applyMiddleware(
    thunkMiddleware
  )
)

store.dispatch(fetchTodos('/todos'))

////////////////////////////////////////////////////////////////////////////////
// Render Wrapper
//
// class Wrapper extend React.Component {
//   constructor () {
//
//   }
// }
//
////////////////////////////////////////////////////////////////////////////////
// Render TodoApp

ReactDOM.render(
  <div>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </div>,
  document.getElementById('content')
)

////////////////////////////////////////////////////////////////////////////////
