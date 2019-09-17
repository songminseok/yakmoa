import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Promotions from './Promotions';

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  paper: {
    // height: 140,
    // width: 100,
  },
}));

function Intro({ user }) {
  const classes = useStyles();

  if (user) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <main className={classes.root}>
      <Promotions />
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Grid container justify='center' spacing={2}>
        {[0, 1, 2].map((value) => (
          <Grid item key={value} xs={3}>
            <Paper className={classes.paper}>
              <Typography variant='subtitle1'>{value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default connect((state) => ({ user: state.auth.user }))(Intro);
