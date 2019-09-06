import React from 'react'
/** firebase */
import * as firebase from 'firebase'

import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

/** yup - for validation */
import * as yup from 'yup'

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
})

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    flexGrow: '1',
  },
}))

export default function Login() {
  const classes = useStyles()
  const [loginInfo, setLoginInfo] = React.useState({
    email: '',
    password: '',
  })
  const [inputError, setInputError] = React.useState({
    email: '',
    password: '',
  })
  const [currentUser, setCurrentUser] = React.useState(null)

  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged(function(user) {
      setCurrentUser(user)
    })
  }, [])

  function updateInputError(error) {
    const newInputError = { ...inputError, ...error }
    setInputError(newInputError)
  }

  function validateInput(input, login) {
    schema
      .validateAt(input.name, login)
      .then(function(valid) {
        if (valid) {
          updateInputError({ [input.name]: '' })
        }
      })
      .catch(function(error) {
        updateInputError({ [input.name]: error.message })
      })
  }

  function signOut(e) {
    firebase.auth().signOut()
  }
  /**
   * Handles the sign in button press.
   */
  function signIn(e) {
    const { email, password } = loginInfo

    // validation with yup
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(user) {
        const userlog = JSON.stringify(user, 2)
        // alert(`Successfully logged in ${userlog}`)
        console.log('logged in ', userlog)
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.')
        } else {
          alert(errorMessage)
        }
        console.log(error)
        // [END_EXCLUDE]
      })
    // [END authwithemail]
  }

  function handleChange(e) {
    const newLoginInfo = {
      ...loginInfo,
      [e.target.name]: e.target.value,
    }
    setLoginInfo(newLoginInfo)
    validateInput(e.target, newLoginInfo)
  }

  function handleBlur(e) {
    validateInput(e.target, loginInfo)
  }

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
            onClick={signIn}
            disabled={
              !(
                loginInfo.email &&
                !inputError.email &&
                loginInfo.password &&
                !inputError.password
              )
            }
          >
            Log In
          </Button>
        </FormControl>
      </Grid>
    </>
  )

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
            <Button onClick={signOut}>Log Out</Button>
          </Grid>
        </>
      ) : (
        loginInForm
      )}
    </Grid>
  )
}
