import React,{PropTypes} from 'react'

import Todo from './Todo'

const TodoList = ({ todos, onDelete, onUpdate}) => {

  const createItem = (item) => {
    return <Todo key={item.id} todo={item} onDelete={onDelete} onUpdate={onUpdate} />
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
  onDelete: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  })).isRequired
}

export default TodoList
