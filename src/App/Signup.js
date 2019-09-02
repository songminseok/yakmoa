import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    flexGrow: '1',
  },
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} direction='column' alignContent='center'>
      <Grid item xs={4}>
        <Typography variant='h3'>Sign up to YakMoa</Typography>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor='input-username'>Email</InputLabel>
          <Input id='input-username' />
          <FormHelperText id='input-username-helper-text'>
            이메일
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor='input-password'>Password</InputLabel>
          <Input id='input-password' />
          <FormHelperText id='input-password-helper-text'>
            비밀번호
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor='input-password-confirm'>
            Confirm Password
          </InputLabel>
          <Input id='input-password-confirm' />
          <FormHelperText id='input-password-confirm-helper-text'>
            비밀번호 확인
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <Button variant='contained' color='primary'>
            Sign Up
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}
