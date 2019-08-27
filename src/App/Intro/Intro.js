import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Promotions from './Promotions'

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, paddingTop: '96px' },
  paper: {
    // height: 140,
    // width: 100,
  },
}))

export default function Intro() {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Promotions />
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      {/* <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}> */}
      <Grid container justify='center' spacing={2}>
        {[0, 1, 2].map((value) => (
          <Grid item key={value} xs={3}>
            <Paper className={classes.paper}>
              <Typography variant='subtitle1'>{value}</Typography>
            </Paper>
          </Grid>
        ))}
        {/* </Grid>
        </Grid> */}
      </Grid>
    </main>
  )
}
