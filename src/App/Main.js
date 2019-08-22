import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  paper: {
    height: 140,
    // width: 100,
  },
}))

export default function Main() {
  const classes = useStyles()

  return (
    <main>
      <p> Main Body. 기본 정보가 들어갈 위치 </p>
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
