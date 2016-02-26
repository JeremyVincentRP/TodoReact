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
  combineReducers({
    '1': todoReducer,
    '2': todoReducer
  }),
  applyMiddleware(
    thunkMiddleware
  )
)

// // Dispatch Async fetch
// store.dispatch(
//   fetchTodos('/todos')
// )

////////////////////////////////////////////////////////////////////////////////
// Render Wrapper
//
class Wrapper extends React.Component {
  render = () => {
    const TodoApp1 = TodoApp('1')
    const TodoApp2 = TodoApp('2')
    return (
      <div>
        <TodoApp1 />
        <TodoApp2 />
      </div>
    )
  }
}

////////////////////////////////////////////////////////////////////////////////
// Render TodoApp

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Wrapper />
    </Provider>
  </div>,
  document.getElementById('content')
)

////////////////////////////////////////////////////////////////////////////////
