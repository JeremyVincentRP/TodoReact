import React,{PropTypes} from 'react'

const Todo = ({todo, del, update}) => {
  status = todo.status ? 'bg-success' : 'bg-danger'
  return (
    <p className={status}>
      <button className='btn btn-danger btn-sm' onClick={del(todo.id)}>✖</button>
      <button className='btn btn-info btn-sm' onClick={update(todo.id)}>⟳</button>
      {todo.text}
    </p>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  }).isRequired,
  del: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
}

const TodoList = ({todos, del, update}) => {
  const createItem = (item) => {
    return <Todo key={item.id} todo={item} del={del} update={update} />
  }
  return (
    <div className='todo'>
      {todos.length > 0
        ? todos.map(createItem)
        : 'No todo'}
    </div>
  )
}

TodoList.propTypes = {
  del: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  })).isRequired
}

export default TodoList
