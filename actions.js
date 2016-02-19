export const ADD_TODO = 'ADD_TODO'

let id = 0

function maker (todo) {
  todo.id = id++
  todo.createdAt = new Date()
  return todo
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo: maker(todo)
  }
}
