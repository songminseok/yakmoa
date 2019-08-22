import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, padding: theme.spacing(1) },
  copyright: {
    flexGrow: 1,
    margin: theme.spacing(1),
    textAlign: 'left',
    marginRight: theme.spacing(10),
  },
  link: {
    margin: theme.spacing(1),
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <Typography className={classes.root}>
      <Box className={classes.copyright} component='span'>
        {' '}
        Copyright by Minseok{' '}
      </Box>
      <Link className={classes.link} href='https://www.google.com'>
        Google
      </Link>
      <Link className={classes.link} href='https://www.facebook.com'>
        Facebook
      </Link>
      <Link className={classes.link} href='https://www.naver.com'>
        Naver
      </Link>
    </Typography>
    // <div>
    //   <hr />
    //   <p>먹는 약을 등록하고 관리할 수 있습니다. Copyright by Minseok </p>
    // </div>
  )
}
