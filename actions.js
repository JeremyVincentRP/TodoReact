export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const UPDATE_INPUT = 'UPDATE_INPUT'
export const UPDATE_FILTER = 'UPDATE_FILTER'
export const MERGE = 'MERGE'
export const LOADING_TODOS = 'LOADING_TODOS'
export const LOADED_TODOS = 'LOADED_TODOS'

let __id = 42

const newTodo = function (text) {
  return {
    id: __id++,
    createdAt: new Date(),
    status: false,
    text
  }
}

function _addTodo(text) {
  return {
    type: 'ADD_TODO',
    todo: newTodo(text)
  }
}

export function addTodo(text) {
  return (dispatch, getState) => {
    dispatch({type:'INCR'})
    dispatch(_addTodo(text))
  }
}

export function addTodos(tab) {
  return {
    type: 'MERGE',
    todos: tab
  }
}

export function delTodo(todo) {
  return {
    type: DEL_TODO,
    todo
  }
}

export function updateStatus(todo) {
  return {
    type: UPDATE_STATUS,
    todo: {
      ...todo,
      status: !todo.status
    }
  }
}

export function updateInput(val) {
  return {
    type: UPDATE_INPUT,
    inputValue: val
  }
}

export function updateFilter(f) {
  return {
    type: UPDATE_FILTER,
    filter: f
  }
}

function loadingTodos() {
  return {
    type: LOADING_TODOS
  }
}

function loadedTodos() {
  return {
    type: LOADED_TODOS
  }
}

export function fetchTodos(url) {
  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(addTodos(json)))
  }
}

function shouldFetchTodos(state) {
  return state.todos.length == 0
    ? true
    : false
}

export function fetchTodosIfNeeded(url) {
  return (dispatch, getState) => {
    dispatch(loadingTodos())
    if (shouldFetchTodos(getState().todos)) {
      setTimeout(() => {
        dispatch(fetchTodos(url))
        dispatch(loadedTodos())
      }, 3000)
    } else {
      dispatch(loadedTodos())
      Promise.resolve()
    }
  }
}
