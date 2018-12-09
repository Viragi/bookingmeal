import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './App.css';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '30%'
  }
});

class Booking extends Component {
  handleClick = e => {
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    this.props.handleSubmit(name, date);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField
          multiline
          rows="3"
          id="name"
          className={classes.textField}
          placeholder="Enter Hacker Name"
        />
        <TextField
          multiline
          rows="3"
          id="date"
          className={classes.textField}
          placeholder="Enter Date Range"
        />
        <Button variant="outlined" color="primary" onClick={this.handleClick}>
          Get Meal Schedule
        </Button>
      </div>
    );
  }
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Booking);
