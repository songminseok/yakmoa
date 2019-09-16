import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import logo from '../assets/topbar_logo.png';
import { logoutRequested } from '../store/auth/actions';

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
}));

function LinkButton(props) {
  const classes = useStyles();

  return (
    <Button
      variant={props.variant ? props.variant : 'text'}
      component={Link}
      className={classes.link}
      href={props.to}
      to={props.to}
      disableRipple
    >
      {props.children}
    </Button>
  );
}

function Topbar({ user, logoutRequested }) {
  const classes = useStyles();

  function handleLogout() {
    logoutRequested();
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
              <LinkButton to='/'>리폰소개</LinkButton>
              {!user && <LinkButton to='/login'>로그인</LinkButton>}
              {!user && (
                <LinkButton variant='contained' to='/signup'>
                  회원가입
                </LinkButton>
              )}
              {user && (
                <Button
                  onClick={handleLogout}
                  variant='contained'
                  className={classes.link}
                >
                  {`${user.email}    `}로그아웃
                </Button>
              )}
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  );
}

export default connect(
  (state) => ({
    user: state.auth.user,
  }),
  { logoutRequested }
)(Topbar);
