import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
} from '@material-ui/core';

import * as yup from 'yup';
import * as firebase from 'firebase/app';

const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('이메일이 필요해요'),
  password: yup
    .string()
    .min(6)
    .required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '패스워드가 일치하지 않습니다.')
    .required(),
});

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    flexGrow: '1',
  },
}));

export default function Signup({ history }) {
  const [signupInfo, setSignupInfo] = React.useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [error, setError] = React.useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const classes = useStyles();

  function validateInput(e, signupInfo) {
    const name = e.target.name;
    signupSchema
      .validateAt(name, signupInfo)
      .then((valid) => {
        setError({ ...error, [name]: '' });
      })
      .catch((error) => {
        setError({ ...error, [name]: error.message });
      });
  }

  function handleChange(e) {
    const newSignupInfo = { ...signupInfo, [e.target.name]: e.target.value };
    validateInput(e, newSignupInfo);
    setSignupInfo(newSignupInfo);
  }

  function handleBlur(e) {
    validateInput(e, signupInfo);
  }

  function handleSignup() {
    const { email, password } = signupInfo;
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        setLoading(false);
        setUser(user);
        console.log('Success', user);
      })
      .catch(function(error) {
        setLoading(false);
        console.log('Fail', error.message);
      });
  }

  function handleClose() {
    setUser(null);
  }

  function handleCloseAndHome() {
    setUser(null);
    history.push('/');
  }

  function isValidInput() {
    return (
      signupInfo.email &&
      signupInfo.password &&
      signupInfo.passwordConfirm &&
      !error.email &&
      !error.password &&
      !error.passwordConfirm
    );
  }

  const open = !!user;

  return (
    <Container maxWidth='xs'>
      <Typography variant='h3'>Sign up to YakMoa</Typography>
      <FormControl className={classes.margin} fullWidth>
        <InputLabel htmlFor='input-username'>Email</InputLabel>
        <Input
          id='input-username'
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormHelperText id='input-username-helper-text' error={!!error.email}>
          {error.email}
        </FormHelperText>
      </FormControl>
      <FormControl className={classes.margin} fullWidth>
        <InputLabel htmlFor='input-password'>Password</InputLabel>
        <Input
          id='input-password'
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormHelperText
          id='input-password-helper-text'
          error={!!error.password}
        >
          {error.password}
        </FormHelperText>
      </FormControl>
      <FormControl className={classes.margin} fullWidth>
        <InputLabel htmlFor='input-password-confirm'>
          Confirm Password
        </InputLabel>
        <Input
          id='input-password-confirm'
          name='passwordConfirm'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormHelperText
          id='input-password-confirm-helper-text'
          error={!!error.passwordConfirm}
        >
          {error.passwordConfirm}
        </FormHelperText>
      </FormControl>
      <FormControl className={classes.margin} fullWidth>
        <Button
          variant='contained'
          color='primary'
          onClick={handleSignup}
          disabled={!isValidInput() || loading}
        >
          Sign Up {loading && <CircularProgress />}
        </Button>
      </FormControl>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'회원가입 성공'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            회원이 되신 걸 축하드립니다.{' '}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAndHome} color='primary' autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
