import React,{PropTypes} from 'react'

import TodoList from './../components/TodoList'

import {addTodo} from '../actions'

import './TodoApp.css'

// Filters
const filter = {
  filterAll: obj => true,
  filterTrue: obj => obj.status === true,
  filterFalse: obj => obj.status === false
}
/////////////////////////////////

export class TodoApp extends React.Component {

  state = {}

  // addTodo = (e) => {
  //   e.preventDefault()
  //   const inputElem = e.currentTarget.parentNode.childNodes[0]
  //   const value = inputElem.value.trim()
  //   if (!value || value === '') return
  //   const newTodos = this.state.todos.concat([
  //     { id: this.id+1, text: value, status: false }
  //   ])
  //   inputElem.value = ''
  //   this.id = this.id + 1
  //   this.setState({ todos: newTodos, input: '' })
  // }

  addTodo = (e) => {
    e.preventDefault()
    const inputElem = e.currentTarget.parentNode.childNodes[0]
    const value = inputElem.value.trim()

    this.props.store.dispatch(addTodo({text: value}))
  }

  componentWillMount = () => {
    const {store} = this.props
    store.subscribe(() => {
      const state = store.getState()
      this.setState({todos: state.todos, filter: state.filter})
    })
  }
  //
  // componentWillMount = () => {
  //   const get = (url) => {
  //     this.HttpReq = new XMLHttpRequest()
  //     this.HttpReq.open('GET', url, true)
  //     this.HttpReq.onload = (e) => {
  //       let json = JSON.parse(this.HttpReq.responseText)
  //       this.setState({ todos: json })
  //       this.id = json.length
  //     }
  //     this.HttpReq.send(null)
  //   }
  //   get(this.props.source)
  // }
  //
  // componentWillUnmount = () => {
  //   this.HttpReq.abort()
  // }

  deleteTodo = (id) => (e) => {
    e.preventDefault()
    const newTodos = this.state.todos.filter((obj) => obj.id !== id)
    this.setState({ todos: newTodos })
  }

  updateTodoStatus = (id) => (e) => {
    e.preventDefault()
    let todo = this.state.todos.find((obj) => obj.id === id)
    todo.status = !todo.status
    this.setState({ todos: this.state.todos })
  }

  filterTodo = (f) => (e) => {
    e.preventDefault()
    this.setState({ filter: f })
  }

  render = () => {
    const todoProps = {
      todos:  this.state.todos.filter(filter[this.state.filter]),
      del:    this.deleteTodo,
      update: this.updateTodoStatus
    }

    const classNameFilterAll = 'btn todoFilter' + (this.state.filter == 'filterAll' ? ' active' : '')
    const classNameFilterTrue = 'btn btn-success todoFilter' + (this.state.filter == 'filterTrue' ? ' active' : '')
    const classNameFilterFalse = 'btn btn-danger todoFilter' + (this.state.filter == 'filterFalse' ? ' active' : '')

    return (
      <div className='container'>
        <h3>Todo-List</h3>

        <form className='center' onSubmit={this.addTodo}>
          <input className='formInput'/>
          <button className='btn btn-primary btn-xs' onClick={this.addTodo}>Add</button>
        </form>

        <button onClick={this.filterTodo('filterAll')} className={classNameFilterAll}>⭑</button>
        <button onClick={this.filterTodo('filterTrue')} className={classNameFilterTrue}>⭑</button>
        <button onClick={this.filterTodo('filterFalse')} className={classNameFilterFalse}>⭑</button>

        <div className='well center-block'>
          <TodoList {...todoProps} />
        </div>
      </div>
    )
  }

}