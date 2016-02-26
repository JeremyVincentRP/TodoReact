import {
  ADD_TODO,
  DEL_TODO,
  UPDATE_STATUS,
  UPDATE_FILTER,
  UPDATE_INPUT,
  LOADED_TODOS,
  LOADING_TODOS,
  MERGE
} from '../actions'

// Initial state
const initialState = {
  todos: [],
  filter: 'filterAll',
  input: '',
  loading: false
}
//////////////////////

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
        todos: state.todos.filter((todo) => todo.id !== action.todo.id)
      }
    case UPDATE_INPUT:
      return {
        ...state,
        input: action.inputValue
      }
    case UPDATE_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return (todo.id === action.todo.id)
            ? action.todo
            : todo
          })
      }
    case UPDATE_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    case MERGE:
      return {
        ...state,
        todos: [...state.todos, ...action.todos]
      }
    case LOADING_TODOS:
      return {
        ...state,
        loading: true
      }
    case LOADED_TODOS:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
