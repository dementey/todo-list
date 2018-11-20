import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';


const Todo = ({ onClick, completed, result, id }) => (
  <Fragment>
    <Paper className="" >
      <GridListTile
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        <Card >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              №{id + 1} {result.name}
            </Typography>
            <Typography  gutterBottom>
              {result.description}
            </Typography>
            <Typography color="secondary" gutterBottom>
              {result.time}
            </Typography>
            <Typography color="primary" gutterBottom>
              <Fragment>{result.priority.allPickerArray.map(option => (
                result.priority.picker === option.value ? option.label : true))}</Fragment>
            </Typography>
          </CardContent>
        </Card>
      </GridListTile>
    </Paper>
  </Fragment>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  result: PropTypes.object.isRequired,
}

export default Todo
