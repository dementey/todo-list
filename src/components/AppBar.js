import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TimeLine from '@material-ui/icons/Timeline';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1,
      },
};

const SimpleAppBar = (props) => {
  const { classes } = props;

  return(
    <div className = { classes.root } >
      <AppBar position="static" >
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <TimeLine />
          </IconButton>
          <Typography variant="h6" color="inherit">
            TODO-LIST
          </Typography>
        </Toolbar>
      </AppBar>
    </div >
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);