import React from 'react'

class TodoList extends React.Component {

  render = () => {
    let createItem = (item) => {
      return  <li onClick={this.props.delete(item.id)} key={item.id}>
                {item.text}
              </li>
    }
    return <ul>{this.props.todos.map(createItem)}</ul>
  }

}

export class TodoApp extends React.Component {

  state = { todos: [], id: 0, input: '' }

  onInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  delTodo = (id) => (e) => {
    e.preventDefault()
    let newTodos = this.state.todos.filter((obj) => id !== obj.id)
    this.setState({ todos: newTodos })
  }

  addTodo = (e) => {
    e.preventDefault()
    let newTodos = this.state.todos.concat([
      { id: this.state.id+1, text: this.state.input }
    ])
    this.state.id = this.state.id + 1
    this.setState({ todos: newTodos, input: '' })
  }

  render = () => {
    return (
      <div>
        <h3>Todo-List</h3>
        <TodoList todos={this.state.todos} delete={::this.delTodo} />
        <form onSubmit={::this.addTodo}>
          <input onChange={::this.onInputChange} value={this.state.input} />
          <button>{'Add todo #' + (this.state.todos.length + 1)}</button>
        </form>
      </div>
    )
  }

}
