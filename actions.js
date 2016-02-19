export const ADD_TODO = 'ADD_TODO'
export const DEL_TODO = 'DEL_TODO'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const UPDATE_INPUT = 'UPDATE_INPUT'
export const UPDATE_FILTER = 'UPDATE_FILTER'

let _todo_id = 0

export function addTodo(todo) {
  const make = (todo) => {
    todo.id = _todo_id++
    todo.createdAt = new Date()
    todo.status = false
    return todo
  }
  return {
    type: ADD_TODO,
    todo: make(todo)
  }
}

export function delTodo(todoId) {
  return {
    type: DEL_TODO,
    id: todoId
  }
}

export function updateStatus(todoId) {
  return {
    type: UPDATE_STATUS,
    id: todoId
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
