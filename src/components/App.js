import React from 'react'
import Footer from './Footer'
//import Paper from '@material-ui/core/Paper';
//import Toolbar from '@material-ui/core/Toolbar';
import AddTodo from '../containers/AddTodo'
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
