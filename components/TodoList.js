import React,{PropTypes} from 'react'

const TodoList = ({del, update, todos}) => {
  const createItem = (item) => {
    status = item.status ? 'bg-success' : 'bg-danger'
    return  <p className={status} key={item.id}>
              <button className='btn btn-danger btn-sm' onClick={del(item.id)}>✖</button>
              <button className='btn btn-info btn-sm' onClick={update(item.id)}>⟳</button>
              {item.text}
            </p>
  }
  return  <div className='todo'>
            {todos.length > 0
              ? todos.map(createItem)
              : 'No todo'}
          </div>
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
