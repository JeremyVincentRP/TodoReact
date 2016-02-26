import { createSelector } from 'reselect'

const todoList = state => state.todos.todos
const todoFilter = state => state.todos.filter
const state = state => state.todos

// Filters
const filter = {
  filterAll:   obj => true,
  filterTrue:  obj => obj.status === true,
  filterFalse: obj => obj.status === false
}
/////////////////////////////////

const filteredTodos = createSelector(
  todoList,
  todoFilter,
  state,
  (items, f, state) => ({
    ...state,
    todos: items.filter(filter[f])
  })
)

export default filteredTodos
