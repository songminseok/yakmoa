import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Promotions from './Promotions'

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
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
    </main>
  )
}
