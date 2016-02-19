import {
  ADD_TODO,
  DEL_TODO,
  UPDATE_STATUS,
  UPDATE_FILTER,
  UPDATE_INPUT
} from '../actions'

const initialState = {
  todos: [],
  filter: 'filterAll',
  input: ''
}

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
        input: ''
      }
    case DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((obj) => obj.id !== action.id)
      }
    case UPDATE_INPUT:
      return {
        ...state,
        input: action.inputValue
      }
    case UPDATE_STATUS:
      let todo = state.todos.find((obj) => obj.id === action.id)
      todo.status = !todo.status
      return {
        ...state,
        todos: state.todos
      }
    case UPDATE_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state
  }
}
