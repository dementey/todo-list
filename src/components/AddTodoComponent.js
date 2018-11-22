import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Assignment from '@material-ui/icons/Assignment';
import Description from '@material-ui/icons/Description';
import AccessTime from '@material-ui/icons/AccessTime';
import AssignmentLate from '@material-ui/icons/AssignmentLate';
import SimpleSelect from './Picker';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

});


const pickerArray = [
  {
    value: '101',
    label: '1-DoNow',
  },
  {
    value: '102',
    label: '2-DoNext',
  },
  {
    value: '103',
    label: '3-DoSoon',
  },
  {
    value: '104',
    label: '4-Waiting',
  },
  {
    value: '105',
    label: '5-DoSomeDay',
  },
  {
    value: '106',
    label: '6-OnHoldy',
  },
];


const AddTodoComponent = ({ onSubmitt, classes }) => {
  let name
  let description
  let time
  let picker = "101"

  function priorityFunction(currentSelected) {
    picker = currentSelected;
  };

  return (

    <div className={classes.root}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!name.value.trim() || !description.value.trim() || !time.value || !picker) {
          return
        }

        var result = { name: name.value, description: description.value, time: time.value, priority: { picker: picker, allPickerArray: pickerArray } }
        onSubmitt(name.value, result);
        name.defaultValue = 'Домашние питомцы'
        description.defaultValue = 'Выгулять '
        time.defaultValue = '07:30'
      }}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <Assignment />
              <TextField  className={classes.textField} id="input-with-icon-grid" label="Название" defaultValue='Домашние питомцы' inputRef={node => name = node} /></Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <Description />
              <TextField id="input-with-icon-grid" label="Oписание" defaultValue='Выгулять собаку' inputRef={node => description = node} /></Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <AccessTime />
              <TextField id="input-with-icon-grid" label="Время" type="time" defaultValue="07:30" inputRef={node => time = node} /></Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <AssignmentLate />
              <SimpleSelect val={picker} cb={priorityFunction} ></SimpleSelect></Paper>
          </Grid>
          <Grid item xs={12} sm={12} >
            <Button type='submit' variant="fab" mini color="primary" aria-label="Add" >
              <AddIcon />
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
AddTodoComponent.propTypes = {
  onSubmitt: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(AddTodoComponent);




