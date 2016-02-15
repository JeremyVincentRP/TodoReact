const TodoApp = props => {
  const todos = renderTodos(props.items)

  return (
    <ul>
      { todos }
    </ul>
  )
}

const renderTodos = items => (
    items.map(item => this.renderTodo(item))
)

const renderTodo = item => (
  <li>{item.name}</li>
)
