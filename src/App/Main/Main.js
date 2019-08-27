import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Promotions from './Promotions'

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, paddingTop: '96px' },
  paper: {
    height: 140,
    // width: 100,
  },
}))

export default function Main() {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Promotions />
      <Typography variant='h2'>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
        facilisis consequat. Nam bibendum enim nec orci volutpat lobortis. Donec
        at venenatis augue. Aenean elementum finibus pharetra. Suspendisse a
        dignissim ipsum. Praesent vitae odio non tortor varius venenatis id
        vitae ipsum. Aenean pharetra eros nec ultrices lobortis. Cras diam
        dolor, scelerisque eu aliquam non, viverra ut libero. Etiam imperdiet
        magna at nibh imperdiet, sed mollis mi lobortis. In urna magna, ultrices
        nec lorem vel, pharetra ullamcorper est. In scelerisque, massa eget
        commodo lobortis, quam mauris hendrerit mauris, id volutpat purus ante
        semper nisi. Ut ultrices purus sit amet quam condimentum, quis commodo
        tellus ornare. Aenean eget magna vel quam iaculis hendrerit vel non
        turpis. Donec ullamcorper accumsan metus ut interdum. Vestibulum vitae
        quam venenatis, varius felis ut, vulputate mauris. Suspendisse a nibh
        tempus, aliquam metus nec, consequat velit. Ut id viverra ligula. Donec
        sollicitudin eu metus suscipit iaculis. Fusce varius eros et augue
        blandit, in luctus nibh lacinia. Mauris dapibus nunc odio, et aliquam
        lacus ultrices vitae. Suspendisse sollicitudin, ante sit amet aliquet
        volutpat, nibh turpis luctus velit, vel dignissim ante ante eget orci.
        Morbi faucibus dictum lectus eu tristique. In at sagittis purus, sit
        amet consequat lorem. Nulla eget mauris ac arcu pharetra egestas eget
        eget justo. Duis feugiat id metus vel elementum. Ut non ligula eu urna
        euismod porttitor in non ex. Mauris fermentum justo in sapien dictum
        aliquam. Cras at ultricies erat, ut cursus lectus. Sed efficitur egestas
        tellus, ut maximus ex maximus eget. Nunc consectetur quam id bibendum
        scelerisque. Suspendisse et eros ac metus tempor volutpat eget quis
        ante. Proin consequat mattis enim, quis congue odio fermentum in. Cras
        tincidunt finibus lacus. Cras euismod ipsum a mi cursus, in ullamcorper
        lacus aliquam. Aliquam in erat libero. Donec tempor pharetra nunc
        pellentesque gravida. Donec vel mi ultricies, laoreet purus sit amet,
        eleifend est. Integer at urna a quam porta ornare. Vestibulum ac leo et
        mauris posuere dignissim varius a neque. Integer quis ligula mollis,
        vehicula lorem sit amet, lacinia ante. Proin nec interdum dui. Curabitur
        vulputate convallis maximus. Vivamus condimentum, nibh at tristique
        lacinia, purus turpis euismod arcu, sed pharetra metus velit nec velit.
        Fusce cursus euismod sapien, sed maximus mauris imperdiet in. Mauris
        suscipit dictum purus, sed consectetur turpis pulvinar posuere. Sed
        velit mi, sodales sed dolor blandit, condimentum commodo magna.
        Suspendisse potenti. Donec auctor sagittis finibus. Maecenas in dolor
        fringilla, sollicitudin felis euismod, porta turpis. Vivamus dictum
        facilisis faucibus. Suspendisse accumsan ex est, semper suscipit tellus
        tempor nec. Etiam varius eget magna aliquet porttitor.{' '}
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
