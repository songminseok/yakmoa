import React from 'react';
import { connect } from 'react-redux';
import { logInRequest, logOut } from '../redux/actions';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Dialog, DialogContentText, DialogContent } from '@material-ui/core';

/** yup - for validation */
import * as yup from 'yup';

/** 로그인 스키마 */
let schema = yup.object().shape({
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

function Login({ currentUser, loading, loginError, logInRequest, logOut }) {
  const classes = useStyles();
  const [loginInfo, setLoginInfo] = React.useState({
    email: '',
    password: '',
  });
  const [inputError, setInputError] = React.useState({
    email: '',
    password: '',
  });

  function updateInputError(error) {
    const newInputError = { ...inputError, ...error };
    setInputError(newInputError);
  }

  function validateInput(input, login) {
    schema
      .validateAt(input.name, login)
      .then(function(valid) {
        if (valid) {
          updateInputError({ [input.name]: '' });
        }
      })
      .catch(function(error) {
        updateInputError({ [input.name]: error.message });
      });
  }

  function handleChange(e) {
    const newLoginInfo = {
      ...loginInfo,
      [e.target.name]: e.target.value,
    };
    setLoginInfo(newLoginInfo);
    validateInput(e.target, newLoginInfo);
  }

  function handleBlur(e) {
    validateInput(e.target, loginInfo);
  }

  function handleClose() {}

  const loginInForm = (
    <>
      <Grid item xs={4}>
        <Typography variant='h3'>Log in to YakMoa</Typography>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            id='email'
            name='email'
            type='email'
            value={loginInfo.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormHelperText id='email-helper-text' error={!!inputError.email}>
            {inputError.email ? inputError.email : '이메일'}
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
            value={loginInfo.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormHelperText
            id='password-helper-text'
            error={!!inputError.password}
          >
            {inputError.password ? inputError.password : '비밀번호'}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              logInRequest(loginInfo.email, loginInfo.password);
            }}
            disabled={
              !(
                loginInfo.email &&
                !inputError.email &&
                loginInfo.password &&
                !inputError.password
              ) || loading
            }
          >
            Log In
            {loading && <CircularProgress style={{ marginLeft: '10px' }} />}
          </Button>
        </FormControl>
      </Grid>
      {loginError && (
        <Grid item xs={4}>
          <Typography variant='subtitle2' style={{ color: 'red' }}>
            {loginError.message}
          </Typography>
        </Grid>
      )}
    </>
  );

  return (
    <Grid container spacing={2} direction='column' alignContent='center'>
      {currentUser != null ? (
        <>
          <Grid item xs={4}>
            <Typography variant='h5'>{currentUser.email}</Typography>
            <br />
            <br />
            <Typography style={{ height: '300px' }}>
              Successfully logged In
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button onClick={logOut}>Log Out</Button>
          </Grid>
        </>
      ) : (
        loginInForm
      )}
    </Grid>
  );
}

export default connect(
  (state) => ({
    currentUser: state.user,
    loading: state.userLoading,
    loginError: state.loginError,
  }),
  { logInRequest, logOut }
)(Login);
