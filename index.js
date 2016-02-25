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
  // combineReducers({
  //   todoReducer,
  //   todoReducer
  // }),
  todoReducer,
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
    console.log(this.props);
    return (
      <div>
        <TodoApp />
        <TodoApp />
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
