import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, padding: theme.spacing(1) },
  divider: {
    margin: '10px',
  },
  copyright: {
    flexGrow: 1,
    textAlign: 'left',
  },
  link: {
    margin: theme.spacing(1),
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <Container>
      <Divider className={classes.divider} />
      <Typography className={classes.copyright} component='span'>
        {' '}
        Copyright by Minseok{' '}
      </Typography>
      <Typography component='span'>
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
    </Container>
    // <div>
    //   <hr />
    //   <p>먹는 약을 등록하고 관리할 수 있습니다. Copyright by Minseok </p>
    // </div>
  )
}
