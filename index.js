import React from 'react'
import ReactDOM from 'react-dom'

import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import todos from './reducers/reducer'
import counter from './reducers/counter'
import TodoApp from './containers/TodoApp'

import { addTodo, fetchTodosIfNeeded } from './actions'

////////////////////////////////////////////////////////////////////////////////
// Store creation

const store = createStore(
  combineReducers({
    todos,
    counter
  }),
  applyMiddleware(
    thunkMiddleware
  )
)

// Dispatch an addTodo
// store.dispatch(addTodo('b2c', 0))

// Dispatch Async fetch
store.dispatch(fetchTodosIfNeeded('/todos'))

// Dispatch an addTodo
store.dispatch(addTodo('b2c', 1))

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
