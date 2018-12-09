import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit
  }
});

class Error extends Component {
  render() {
    const { classes } = this.props;
    var mss = `Error ! No menu generated for ${this.props.hackername}`;
    return (
      <div>
        <SnackbarContent className={classes.snackbar} message={mss} />
      </div>
    );
  }
}

export default withStyles(styles)(Error);
