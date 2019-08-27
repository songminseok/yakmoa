import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import logo from '../assets/topbar_logo.png'
import appDownIco from '../assets/ico_app_down.svg'

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  appBar: {
    height: '96px',
    color: 'black',
    background: 'transparent',
    boxShadow: 'none',
    position: 'absolute',
  },
  logo: {
    width: '254px',
    height: '33px',
    objectFit: 'contain',
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    margin: theme.spacing(3),
    color: '#2c2f31',
    fontSize: 18,
    fontWeight: 'bold',
    '&:focus, &:hover, &:active': {
      color: '#17d3d6',
      textDecoration: 'none',
    },
  },
  buttonAppDown: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  title: { flexGrow: 1 },
}))

export default function Topbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Box my='auto' pl={16} pr={16} clone>
          <Toolbar>
            {/* <CardMedia className={classes.logo} image={logo} /> */}
            <Link className={classes.logo} href='/'>
              <img className={classes.logo} src={logo} alt='Refone X CU X Kt' />
            </Link>
            <Box className={classes.title} component='span'>
              {' '}
            </Box>
            <Typography component='div'>
              <Link className={classes.link} href='https://refone.co.kr'>
                리폰소개
              </Link>
              <Link
                className={classes.link}
                href='https://refone.co.kr/device/list'
              >
                시세조회
              </Link>
              <Link className={classes.link}>매장안내</Link>
              <Link className={classes.link}>이벤트</Link>
            </Typography>
            <Button className={classes.buttonAppDown} disableRipple>
              <img src={appDownIco} alt='App Download' />
            </Button>
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  )
}
