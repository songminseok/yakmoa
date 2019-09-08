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

/** Yub */
import * as yup from 'yup';

const schema = yup.object().shape({
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Must match with password'),
  password: yup
    .string()
    .min(6)
    .required(),
  email: yup
    .string()
    .email()
    .required(),
  // createdOn: yup.date().default(function() {
  //   return new Date();
  // }),
});

const useStyles = makeStyles((theme) => ({
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
    errors: {},
  });
  const [user, setUser] = React.useState(null);

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

  function validateInput(name, value) {
    const newSignupInfo = { ...signupInfo, [name]: value };
    schema
      .validateAt(name, newSignupInfo)
      .then(function(valid) {
        console.log('validateInput', valid);
        newSignupInfo.errors[name] = '';
        setSignUpInfo(newSignupInfo);
      })
      .catch(function(error) {
        console.log('validateInput', error);
        newSignupInfo.errors[name] = error.message;
        setSignUpInfo(newSignupInfo);
      });
  }

  function handleBlur({ target: { name, value } }) {
    validateInput(name, value);
  }

  function handleChange({ target: { name, value } }) {
    validateInput(name, value);
  }

  return (
    <Grid container spacing={2} direction='column' alignContent='center'>
      <Grid item xs={4}>
        <Typography variant='h3'>Sign up to YakMoa</Typography>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            id='email'
            name='email'
            type='email'
            value={signupInfo.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormHelperText
            id='email-helper-text'
            error={!!signupInfo.errors.email}
          >
            {!signupInfo.errors.email ? '이메일' : signupInfo.errors.email}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <Input
            id='password'
            name='password'
            type='password'
            value={signupInfo.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormHelperText
            id='password-helper-text'
            error={!!signupInfo.errors.password}
          >
            {!signupInfo.errors.password
              ? '비밀번호'
              : signupInfo.errors.password}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor='passwordConfirm'>Confirm Password</InputLabel>
          <Input
            id='passwordConfirm'
            name='passwordConfirm'
            type='password'
            value={signupInfo.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormHelperText
            id='passwordConfirm-helper-text'
            error={!!signupInfo.errors.passwordConfirm}
          >
            {!signupInfo.errors.passwordConfirm
              ? '비밀번호 확인'
              : signupInfo.errors.passwordConfirm}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <Button
            variant='contained'
            color='primary'
            onClick={signUp}
            disabled={
              !signupInfo.email ||
              !signupInfo.password ||
              !signupInfo.passwordConfirm ||
              !!signupInfo.errors.email ||
              !!signupInfo.errors.password ||
              !!signupInfo.errors.passwordConfirm
            }
          >
            Sign Up
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}
