import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoReducer from './reducers/reducer'
import TodoApp from './containers/TodoApp'

////////////////////////////////////////////////////////////////////////////////
// Store creation

const store = createStore(
  todoReducer
)

////////////////////////////////////////////////////////////////////////////////
// Render TodoApp

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('content')
)

////////////////////////////////////////////////////////////////////////////////
