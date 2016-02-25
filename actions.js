export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const UPDATE_INPUT = 'UPDATE_INPUT'
export const UPDATE_FILTER = 'UPDATE_FILTER'
export const MERGE = 'MERGE'

let _todo_id = 0

const newTodo = function (text) {
  return {
    id: _todo_id++,
    createdAt: new Date(),
    status: false,
    text
  }
}

export function addTodo(text) {
  return {
    type: ADD_TODO,
    todo: newTodo(text)
  }
}

export function addTodos(tab) {
  return {
    type: MERGE,
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

export function fetchTodos(url) {
  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(addTodos(json)))
  }
}
