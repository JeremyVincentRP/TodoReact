import React,{PropTypes} from 'react'

import TodoList from './TodoList'
import TodoInput from './TodoInput'
import TodoFilter from './TodoFilters'

import './TodoApp.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TodoActionCreators from '../actions'

// Filters
export const filter = {
  filterAll:   obj => true,
  filterTrue:  obj => obj.status === true,
  filterFalse: obj => obj.status === false
}
/////////////////////////////////

const TodoApp = ({id, actions, ...props}) => {
  console.log(props);
    const { input, todos, filter } = props[id]
    return (
      <div className='container'>
        <h3>Todo-List</h3>

        <TodoInput onAdd={actions.addTodo} onInputChange={actions.updateInput} inputValue={input} />

        <TodoFilter filterTodo={actions.updateFilter} currentFilter={filter} />

        <div className='well center-block'>
          <TodoList todos={todos} onDelete={actions.delTodo} onUpdate={actions.updateStatus} />
        </div>

      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(TodoActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
