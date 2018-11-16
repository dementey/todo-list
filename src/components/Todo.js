import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, id, result }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {id + 1} {result.name} {result.description} {result.time} {result.priority}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  result: PropTypes.object.isRequired,
}

export default Todo
