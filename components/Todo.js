import React,{PropTypes} from 'react'

const Todo = ({todo, onDelete, onUpdate}) => {

  const handleDelete = (id) => (e) => {
    e.preventDefault()
    onDelete(id)
  }
  const handleUpdate = (id) => (e) => {
    e.preventDefault()
    onUpdate(id)
  }

  status = todo.status ? 'bg-success' : 'bg-danger'

  return (
    <p className={status}>
      <button className='btn btn-danger btn-sm' onClick={handleDelete(todo.id)}>✖</button>
      <button className='btn btn-info btn-sm' onClick={handleUpdate(todo.id)}>⟳</button>
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
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
}

export default Todo
