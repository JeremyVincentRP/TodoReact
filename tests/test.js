import React from 'react'

import {createRenderer} from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import {TodoApp} from '../containers/TodoApp.js'
import TodoList from '../components/TodoList.js'

describe('TodoApp', () => {
  it('creates an App container', () => {
    let renderer = createRenderer()
    renderer.render(<TodoApp />)
    let actualElement = renderer.getRenderOutput()

    expect(actualElement.props.className).toBe('container')
  })
})

describe('TodoList', () => {
  it('creates a TodoList', () => {
    let renderer = createRenderer()

    let todos = []
    let del = () => null
    let upd = () => null

    renderer.render(<TodoList todos={todos} del={del} update={upd} />)
    let actualElement = renderer.getRenderOutput()

    expect(actualElement.props.className).toBe('todo')
  })
})
