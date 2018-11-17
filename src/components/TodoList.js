import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import GridList from '@material-ui/core/GridList';
const TodoList = ({ todos, toggleTodo }) => (

    <GridList cols={todos.length}>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </GridList>

)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    result: PropTypes.object.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
