import React,{PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TodoList from './../components/TodoList'
import TodoInput from './../components/TodoInput'
import TodoFilter from './../components/TodoFilters'

import * as TodoActionCreators from '../actions'

import './TodoApp.css'

// Filters
export const filter = {
  filterAll:   obj => true,
  filterTrue:  obj => obj.status === true,
  filterFalse: obj => obj.status === false
}
/////////////////////////////////

const TodoApp = props => {
    const { input, todos, filter, dispatch, boundActions } = props

    return (
      <div className='container'>
        <h3>Todo-List</h3>

        <TodoInput onAdd={boundActions.addTodo} onInputChange={boundActions.updateInput} inputValue={input} />

        <TodoFilter filterTodo={boundActions.updateFilter} currentFilter={filter} />

        <div className='well center-block'>
          <TodoList todos={todos} onDelete={boundActions.delTodo} onUpdate={boundActions.updateStatus} />
        </div>

      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    ...state,
    todos: state.todos.filter(filter[state.filter])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    boundActions: bindActionCreators(TodoActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
