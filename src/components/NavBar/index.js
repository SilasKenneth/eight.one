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
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';

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

function NavBar(props) {
  const { classes } = props;
  const LinkToAbout = propos => <Link to="/about" />;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            🥰 Photoboost
          </Typography>
          <div>
          <IconButton color="inherit" className={classes.button} aria-label="Add an alarm" href="/#/">
            <PhotoCamera />
          </IconButton>
        <IconButton color="inherit" className={classes.button} href="/#/about">
          <Icon>info</Icon>
        </IconButton>
        <IconButton color="inherit" className={classes.button} href="/#/login">
          <Icon>lock</Icon>
        </IconButton>
      </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);