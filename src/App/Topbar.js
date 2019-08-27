import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import Link from '@material-ui/core/Link'
import { Link } from 'react-router-dom'
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
    position: 'static',
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
    marginLeft: theme.spacing(3),
    color: '#2c2f31',
    fontSize: 18,
    fontWeight: 'bold',
    '&:hover,&:active': {
      color: '#17d3d6',
      backgroundColor: 'transparent',
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

  function AButton(props) {
    return (
      <Button
        variant={props.variant ? props.variant : 'text'}
        component={Link}
        className={classes.link}
        to={props.to}
        disableRipple
      >
        {props.children}
      </Button>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Box my='auto' mx={2} clone>
          <Toolbar>
            {/* <CardMedia className={classes.logo} image={logo} /> */}
            <Link className={classes.logo} to='/'>
              <img className={classes.logo} src={logo} alt='Refone X CU X Kt' />
            </Link>
            <Box className={classes.title} component='span'>
              {' '}
            </Box>
            <Typography component='div'>
              <AButton to='/'>리폰소개</AButton>
              <AButton to='/login'>로그인</AButton>
              <AButton variant='contained' to='/signup'>
                회원가입
              </AButton>
            </Typography>
            {/* <Button className={classes.buttonAppDown} disableRipple>
              <img src={appDownIco} alt='App Download' />
            </Button> */}
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  )
}
