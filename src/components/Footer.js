import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Footer = () => (
  <Toolbar>
    <Typography>Show: </Typography>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} color="secondary">
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} color="primary">
      Completed
    </FilterLink>
  </Toolbar>
)

export default Footer
