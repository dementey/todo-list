import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let name
  let description
  let time
  let priority

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!name.value.trim()) {
          return
        }
        dispatch(addTodo(name.value))
        name.value = ''
      }}>
        <input ref={node => name = node} />
        <input ref={node => description = node} />
        <input ref={node => time = node} />
        <input ref={node => priority = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
