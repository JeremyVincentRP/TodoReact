/* -------------------------------------------------------------------------- */
/*                            TODOAPP TESTS                                   */
/* -------------------------------------------------------------------------- */
import React from 'react'
import ReactDOM from 'react-dom'

import {createRenderer} from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'

import TestUtils from 'react-addons-test-utils'
expect.extend(expectJSX)
/* -------------------------------------------------------------------------- */
import {createStore} from 'redux'
import todoReducer from '../reducers/reducer'

import TodoApp from '../containers/TodoApp.js'
import TodoList from '../components/TodoList.js'
import TodoInput from '../components/TodoInput.js'
import TodoFilters from '../components/TodoFilters.js'
import Todo from '../components/Todo.js'
/* -------------------------------------------------------------------------- */
/*                              STORE CREATION                                */
/* -------------------------------------------------------------------------- */
const store = createStore( todoReducer )
/* -------------------------------------------------------------------------- */
/*              STATEFUL COMPONENT for stateless components render            */
/* -------------------------------------------------------------------------- */
function makeRoot(component) {
  return (
    <div>
      { component }
    </div>
  )
}
/* -------------------------------------------------------------------------- */
/*                            COMPONENTS TESTS                                */
/* -------------------------------------------------------------------------- */
//
// describe('TodoApp', () => {
//   const renderer = createRenderer()
//
//   renderer.render(<TodoApp store={store} />)
//   const actualElement = renderer.getRenderOutput()
//
//   it('creates a TodoApp', () => {
//     expect(actualElement).toNotBe(null, "the element does not exists")
//   })
//
//   it('has a class "container"', () => {
//     expect(actualElement.props.className).toBe('container')
//   })
// })

describe('TodoList', () => {
  const renderer = createRenderer()

  const todos = []
  const del = () => null
  const upd = () => null

  renderer.render(<TodoList todos={todos} onDelete={del} onUpdate={upd} />)
  const actualElement = renderer.getRenderOutput()

  it('creates a TodoList', () => {
    expect(actualElement).toNotBe(null, "the element does not exists")
  })

  it('has a class "todo"', () => {
    expect(actualElement.props.className).toBe('todo')
  })

})

describe('TodoInput', () => {
  const renderer = createRenderer()

  const onAdd = () => console.log('Add item')
  const onInputChange = (v) => console.log(v)
  const inputValue = 'Placeholder'

  renderer.render(<TodoInput onAdd={onAdd} onInputChange={onInputChange} inputValue={inputValue} />)
  const actualElement = renderer.getRenderOutput()
  const input = actualElement.props.children[0]
  const button = actualElement.props.children[1]

  it('creates a TodoInput', () => {
    expect(actualElement).toNotBe(null, "the element does not exists")
  })

  it('has a class "center"', () => {
    expect(actualElement.props.className).toBe('center')
  })

  it('has an input text', () => {
    expect(input.type).toBe('input')
    expect(input.props.type).toBe('text')
  })

  it('has an input with initial value', () => {
    expect(input.props.value).toBe('Placeholder')
  })

  it('has a button', () => {
    expect(button.type).toBe('button')
  })

})

describe('TodoFilters', () => {
  let filterState = ''

  const filterTodo = (f) => filterState = f
  const currentFilter = 'filterAll'

  const component = TestUtils.renderIntoDocument(
    makeRoot(
      <TodoFilters filterTodo={filterTodo} currentFilter={currentFilter} />
    )
  )

  const renderedDOM = ReactDOM.findDOMNode(component)
  const renderedComponent = renderedDOM.children[0]
  const buttons = renderedComponent.children

  it('creates a TodoFilters', () => {
    expect(renderedDOM).toNotBe(null, "the root-wrapper does not exists")
    expect(renderedComponent).toNotBe(null, "the component does not exists")
  })

  it('has a div wrapper', () => {
    expect(renderedComponent.tagName).toBe('DIV')
  })

  it('has 3 buttons', () => {
    expect(buttons.length).toBe(3)

    for (let i = 0; i < buttons.length; ++i) {
      expect(buttons[i].tagName).toBe('BUTTON')
    }
  })

  it('activate the first filter by default', () => {
    expect(buttons[0].className).toBe('btn todoFilter active')
  })

  it('clicks all the buttons with filter option', () => {
      TestUtils.Simulate.click(buttons[0])
      expect(filterState).toBe('filterAll')

      TestUtils.Simulate.click(buttons[1])
      expect(filterState).toBe('filterTrue')

      TestUtils.Simulate.click(buttons[2])
      expect(filterState).toBe('filterFalse')
  })
})
