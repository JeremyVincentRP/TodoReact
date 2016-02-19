import React,{PropTypes} from 'react'

const TodoInput = ({onAdd, onInputChange, inputValue}) => {

  const handleAdd = (e) => {
    e.preventDefault()
    onAdd()
  }
  const handleChange = (e) => {
    e.preventDefault()
    onInputChange(e.target.value)
  }

  return (
    <form className='center' onSubmit={handleAdd}>
      <input type='text' className='formInput' onChange={handleChange} value={inputValue} />
      <button className='btn btn-primary btn-xs' onClick={handleAdd}>Add</button>
    </form>
  )
}

TodoInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired
}

export default TodoInput
