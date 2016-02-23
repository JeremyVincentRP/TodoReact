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

const store2 = createStore(
  todoReducer
)

////////////////////////////////////////////////////////////////////////////////
// Render TodoApp

ReactDOM.render(
  <div>
    <Provider store={store}>
      <TodoApp />
    </Provider>
    <Provider store={store2}>
      <TodoApp />
    </Provider>
  </div>,
  document.getElementById('content')
)

////////////////////////////////////////////////////////////////////////////////
