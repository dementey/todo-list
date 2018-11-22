import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodoLink'
import VisibleTodoList from '../containers/VisibleTodoList'
import SimpleAppBar from './AppBar';

const App = () => (
  <div>
    <SimpleAppBar />
    <AddTodo />
    <VisibleTodoList />
    <Footer />

  </div>
)

export default App
