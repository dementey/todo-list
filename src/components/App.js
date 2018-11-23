import React, { Fragment } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodoLink'
import VisibleTodoList from '../containers/VisibleTodoList'
import SimpleAppBar from './AppBar';

const App = () => (
  <Fragment>
    <SimpleAppBar />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Fragment>
)

export default App
