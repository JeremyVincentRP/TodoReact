import React,{PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TodoList from './../components/TodoList'
import TodoInput from './../components/TodoInput'
import TodoFilter from './../components/TodoFilters'

import * as TodoActionCreators from '../actions/actions'
import todoSelector from '../selectors/todoSelector'

import './TodoApp.less'

const TodoApp = ({ input, todos, filter, loading, boundActions }) => {

    const loadingElement = () => {
      return loading
        ? <div>Loading Todos ...</div>
        : <div>Todos loaded</div>
    }

    return (
      <div className='container'>
        <h3>Todo-List</h3>

        {loadingElement()}

        <TodoInput onAdd={boundActions.addTodo} onInputChange={boundActions.updateInput} inputValue={input} />

        <TodoFilter filterTodo={boundActions.updateFilter} currentFilter={filter} />

        <div className='well center-block'>
          <TodoList todos={todos} onDelete={boundActions.delTodo} onUpdate={boundActions.updateStatus} />
        </div>

      </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    boundActions: bindActionCreators(TodoActionCreators, dispatch)
  }
}

export default connect(todoSelector, mapDispatchToProps)(TodoApp)
