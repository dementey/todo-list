import React from 'react'
import Footer from './Footer'
import Paper from '@material-ui/core/Paper';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import SimpleAppBar from './AppBar';

const App = () => (
  <div>
    <SimpleAppBar />
    <Paper>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Paper>
  </div>
)

export default App
