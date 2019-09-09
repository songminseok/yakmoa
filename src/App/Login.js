import React from 'react';
import { connect } from 'react-redux';
import { loginRequested } from '../store/actions';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import * as yup from 'yup'; // for everything
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
} from '@material-ui/core';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('이메일이 필요해요'),
  password: yup
    .string()
    .min(6)
    .required(),
});

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    flexGrow: '1',
  },
}));

function Login({ loading, user, history, loginRequested }) {
  const [loginInfo, setLoginInfo] = React.useState({ email: '', password: '' });
  const [error, setError] = React.useState({ email: '', password: '' });
  const classes = useStyles();

  function validateInput(e, loginInfo) {
    const name = e.target.name;
    loginSchema
      .validateAt(name, loginInfo)
      .then((valid) => {
        setError({ ...error, [name]: '' });
      })
      .catch((error) => {
        setError({ ...error, [name]: error.message });
      });
  }

  function handleChange(e) {
    const newLoginInfo = { ...loginInfo, [e.target.name]: e.target.value };
    validateInput(e, newLoginInfo);
    setLoginInfo(newLoginInfo);
  }

  function handleBlur(e) {
    validateInput(e, loginInfo);
  }

  function handleLogin() {
    const { email, password } = loginInfo;
    console.log('handleLogin', email, password);
    loginRequested(email, password);
  }

  function handleCloseAndHome() {
    history.push('/');
  }

  function isValidInput() {
    return (
      loginInfo.email && loginInfo.password && !error.email && !error.password
    );
  }

  const open = !!user;

  return (
    <Container maxWidth='xs'>
      <Typography variant='h3'>Log in to YakMoa</Typography>
      <FormControl className={classes.margin} fullWidth>
        <InputLabel htmlFor='input-username'>Email</InputLabel>
        <Input
          id='input-username'
          name='email'
          type='email'
          value={loginInfo.email}
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
          value={loginInfo.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormHelperText id='input-assword-helper-text' error={!!error.password}>
          {error.password}
        </FormHelperText>
      </FormControl>
      <FormControl className={classes.margin} fullWidth>
        <Button
          variant='contained'
          color='primary'
          onClick={handleLogin}
          disabled={!isValidInput() || loading}
        >
          Log In {loading && <CircularProgress />}
        </Button>
      </FormControl>

      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'로그인 성공'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            로그인 되었습니다.{' '}
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

export default connect(
  (state) => ({ loading: state.loading, user: state.user }),
  { loginRequested }
)(Login);
