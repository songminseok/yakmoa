import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

/** firebase */
import * as firebase from 'firebase';
import 'firebase/auth';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    flexGrow: '1',
  },
}));

export default function Signup() {
  const classes = useStyles();
  const [signupInfo, setSignUpInfo] = React.useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  function handleChange(e) {
    console.log(e);

    const newSignupInfo = { ...signupInfo, [e.target.name]: e.target.value };
    setSignUpInfo(newSignupInfo);
    console.log(newSignupInfo);
  }

  function signUp(e) {
    console.log(`signUp ${JSON.stringify(signupInfo, 2)}`);
    // First Check if the 2 passwords match
    const { email, password, passwordConfirm } = signupInfo;
    if (password === passwordConfirm) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function(user) {
          console.log('Successfully signed up');
          alert('Successfully signed up');
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          alert(`Failed to sign up. ${errorCode} : ${errorMessage}`);
        });
    } else {
      alert('Password do not match!');
    }
  }

  return (
    <Grid container spacing={2} direction="column" alignContent="center">
      <Grid item xs={4}>
        <Typography variant="h3">Sign up to YakMoa</Typography>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={signupInfo.email}
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
            value={signupInfo.password}
            onChange={handleChange}
          />
          <FormHelperText id="password-helper-text">비밀번호</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor="passwordConfirm">Confirm Password</InputLabel>
          <Input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            value={signupInfo.passwordConfirm}
            onChange={handleChange}
          />
          <FormHelperText id="passwordConfirm-helper-text">
            비밀번호 확인
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <Button variant="contained" color="primary" onClick={signUp}>
            Sign Up
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}
