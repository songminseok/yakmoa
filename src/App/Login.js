import React from 'react';
/** firebase */
import * as firebase from 'firebase';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    flexGrow: '1',
  },
}));

export default function Login() {
  const classes = useStyles();
  const [loginInfo, setLoginInfo] = React.useState({ email: '', password: '' });
  const loginButton = React.useRef(null);

  const handleChange = e => {
    console.log('handleChange');
    const newLoginInfo = {
      ...loginInfo,
      [e.target.name]: e.target.value,
    };
    setLoginInfo(newLoginInfo);
    console.log(newLoginInfo);
  };
  /**
   * Handles the sign in button press.
   */
  function toggleSignIn(e) {
    console.log('toggleSignIn');
    e.preventDefault();

    const { email, password } = loginInfo;

    if (firebase.auth().currentUser) {
      // [START signout]
      console.log('signOut if a user is still logged in');
      firebase.auth().signOut();
      // [END signout]
    } else {
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START authwithemail]
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function(user) {
          const userlog = JSON.stringify(user, 2);
          alert(`Successfully logged in ${userlog}`);
          console.log('logged in ', user);
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          loginButton.current.disabled = false;
          // [END_EXCLUDE]
        });
      // [END authwithemail]
    }
    loginButton.current.disabled = true;
  }

  return (
    <Grid container spacing={2} direction="column" alignContent="center">
      <Grid item xs={4}>
        <Typography variant="h3">Log in to YakMoa</Typography>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={loginInfo.email}
            onChange={handleChange}
          />
          <FormHelperText id="email-helper-text">이메일</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type="password"
            value={loginInfo.password}
            onChange={handleChange}
          />
          <FormHelperText id="password-helper-text">비밀번호</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <Button
            ref={loginButton}
            variant="contained"
            color="primary"
            onClick={toggleSignIn}
          >
            Log In
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}
