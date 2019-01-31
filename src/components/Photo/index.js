import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Photo(props) {
  const { classes,image} = props;
  return (
  	<Zoom in>
      <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper className={classes.paper}>
             <Grid item xs="auto">
               <img src={image.urls.small} />
             </Grid>
          </Paper>
       </Grid>
       </Zoom>
  );
}

Photo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Photo);