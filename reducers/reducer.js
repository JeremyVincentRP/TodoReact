import {ADD_TODO} from '../actions'

const initialState = {
  todos: [],
  filter: 'filterAll'
}

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }
    default:
      return state
  }
}
