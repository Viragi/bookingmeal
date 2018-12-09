import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  icon: {
    marginLeft: theme.spacing.unit
  },
  iconHover: {
    margin: theme.spacing.unit
  }
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

class Meal extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <li>
          <HomeIcon color="secondary" className={classes.icon} />

          <span className={classes.icon}>
            Breakfast for {this.props.hackername} on {this.props.date}
          </span>
        </li>
        <li>
          <HomeIcon color="primary" className={classes.icon} />
          <span className={classes.icon}>
            {' '}
            Lunch for {this.props.hackername} on {this.props.date}
          </span>
        </li>
        <li>
          <HomeIcon color="action" className={classes.icon} />
          <span className={classes.icon}>
            {' '}
            Dinner for {this.props.hackername} on {this.props.date}
          </span>
        </li>
      </div>
    );
  }
}

export default withStyles(styles)(Meal);
