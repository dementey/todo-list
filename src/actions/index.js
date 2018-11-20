let nextTodoId = 0
export const addTodo = (text, result) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  result
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_PRIORITY: 'SHOW_PRIORITY',
  SHOW_TIME: 'SHOW_TIME',
}
