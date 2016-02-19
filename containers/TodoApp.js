import React,{PropTypes} from 'react'

import TodoList from './../components/TodoList'
import TodoInput from './../components/TodoInput'
import TodoFilter from './../components/TodoFilters'

import {
  addTodo,
  delTodo,
  updateStatus,
  updateFilter,
  updateInput
} from '../actions'

import './TodoApp.css'

// Filters
export const filter = {
  filterAll: obj => true,
  filterTrue: obj => obj.status === true,
  filterFalse: obj => obj.status === false
}
/////////////////////////////////

export class TodoApp extends React.Component {

  state = {}

  componentWillMount = () => {
    const {store} = this.props
    store.subscribe(() => {
      const state = store.getState()
      this.setState(
        { todos: state.todos, filter: state.filter, input: state.input }
      )
    })
    //////////////////////////////////////////////////////////////////
    // In theory this is useless
    this.setState( store.getState() )
    //////////////////////////////////////////////////////////////////
  }

  onAddTodo = () => {
    this.props.store.dispatch( addTodo({ text: this.state.input }) )
  }

  onDeleteTodo = (id) => {
    this.props.store.dispatch( delTodo(id) )
  }

  onUpdateTodoStatus = (id) => {
    this.props.store.dispatch( updateStatus(id) )
  }

  onInputChange = (val) => {
    this.props.store.dispatch( updateInput(val) )
  }

  onFilterTodo = (f) => {
    this.props.store.dispatch( updateFilter(f) )
  }

  render = () => {

    const todoProps = {
      todos:    this.state.todos.filter(filter[this.state.filter]),
      onDelete: this.onDeleteTodo,
      onUpdate: this.onUpdateTodoStatus
    }

    return (
      <div className='container'>
        <h3>Todo-List</h3>

        <TodoInput onAdd={this.onAddTodo} onInputChange={this.onInputChange} inputValue={this.state.input} />

        <TodoFilter filterTodo={this.onFilterTodo} currentFilter={this.state.filter} />

        <div className='well center-block'>
          <TodoList {...todoProps} />
        </div>

      </div>
    )
  }

}
