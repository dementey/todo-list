import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



class SimpleSelect extends React.Component {
  state = {
    priority: this.props.val,
    name: '',

  };


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.cb(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (

      <FormControl className={classes.formControl}>
        <InputLabel
          ref={ref => {
            this.InputLabelRef = ref;
          }}
          htmlFor="priority-simple"
        >
          Приоритет
          </InputLabel>
        <Select
          value={this.state.priority}
          onChange={this.handleChange}
          inputProps={{
            name: 'priority',
            id: 'input-with-icon-grid',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={101}>1-DoNow</MenuItem>
          <MenuItem value={102}>2-DoNext</MenuItem>
          <MenuItem value={103}>3-DoSoon</MenuItem>
          <MenuItem value={104}>4-Waiting</MenuItem>
          <MenuItem value={105}>5-DoSomeDay</MenuItem>
          <MenuItem value={106}>6-OnHoldy</MenuItem>
        </Select>
      </FormControl>


    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles()(SimpleSelect);