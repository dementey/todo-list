import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';

const Todo = ({ onClick, completed, result, id }) => (
  <Paper className="" >
    <GridListTile
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <Card className="" >
        <CardContent>
          <Typography className="" color="textSecondary" gutterBottom>
            №{id + 1} {result.name}
          </Typography>
          <Typography variant="h5" component="h2">
            {result.description}
          </Typography>
          <Typography className="" color="textSecondary">
            {result.time}
          </Typography>
          <Typography className="" color="textSecondary">

            {result.priority.allPickerArray.map(option => (
              result.priority.picker == option.value ? option.label : false))}


          </Typography>
        </CardContent>
      </Card>
    </GridListTile>
  </Paper>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  result: PropTypes.object.isRequired,
}

export default Todo
