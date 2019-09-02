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

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} direction='column' alignContent='center'>
      <Grid item xs={4}>
        <Typography variant='h3'>Log in to YakMoa</Typography>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor='input-username'>Email</InputLabel>
          <Input id='input-username' type='email' />
          <FormHelperText id='input-username-helper-text'>
            이메일
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <InputLabel htmlFor='input-password'>Password</InputLabel>
          <Input id='input-password' />
          <FormHelperText id='input-assword-helper-text'>
            비밀번호
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.margin} fullWidth>
          <Button variant='contained' color='primary'>
            Log In
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}
