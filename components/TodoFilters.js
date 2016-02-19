import React,{PropTypes} from 'react'

const TodoFilter = ({filterTodo, currentFilter}) => {

  const handleFilter = (f) => (e) => {
    e.preventDefault()
    filterTodo(f)
  }

  const classNameFilterAll = 'btn todoFilter' + (currentFilter == 'filterAll' ? ' active' : '')
  const classNameFilterTrue = 'btn btn-success todoFilter' + (currentFilter == 'filterTrue' ? ' active' : '')
  const classNameFilterFalse = 'btn btn-danger todoFilter' + (currentFilter == 'filterFalse' ? ' active' : '')

  return (
    <div>
      <button onClick={handleFilter('filterAll')} className={classNameFilterAll}>⭑</button>
      <button onClick={handleFilter('filterTrue')} className={classNameFilterTrue}>⭑</button>
      <button onClick={handleFilter('filterFalse')} className={classNameFilterFalse}>⭑</button>
    </div>

  )
}

export default TodoFilter
