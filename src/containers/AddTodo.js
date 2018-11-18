import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Assignment from '@material-ui/icons/Assignment';
import Description from '@material-ui/icons/Description';
import AccessTime from '@material-ui/icons/AccessTime';
import AssignmentLate from '@material-ui/icons/AssignmentLate';
import SimpleSelect from '../components/Picker';

const AddTodo = ({ dispatch }) => {
  let name
  let description
  let time
  let picker = 101

  function freeAnswerTextChanged(freeanswertext) {
    picker = freeanswertext;
    console.log(picker);
  };

  return (
    <div>
      <Toolbar>
        <form onSubmit={e => {
          e.preventDefault()
          if (!name.value.trim() || !description.value.trim() || !time.value || !picker) {
            return
          }

          var result = { name: name.value, description: description.value, time: time.value, priority: picker }
          dispatch(addTodo(name.value, result))
          name.defaultValue = 'Домашние питомцы'
          description.defaultValue = 'Выгулять '
          time.defaultValue = '07:30'
        }}>

          <div className="">
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Assignment />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Название" defaultValue='Домашние питомцы' inputRef={node => name = node} />
              </Grid>

              <Grid item>
                <Description />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Oписание" defaultValue='Выгулять собаку' inputRef={node => description = node} />
              </Grid>

              <Grid item>
                <AccessTime />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Время" type="time" defaultValue="07:30" inputRef={node => time = node} />
              </Grid>

              <Grid item>
                <AssignmentLate />
              </Grid>
              <Grid item>
                <SimpleSelect val={picker} cb={freeAnswerTextChanged}></SimpleSelect>
              </Grid>

              <Grid item>
                <Button type='submit' variant="fab" mini color="primary" aria-label="Add"  >
                  <AddIcon />
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      </Toolbar>

    </div >
  )
}

export default connect()(AddTodo)




