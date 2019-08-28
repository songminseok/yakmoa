import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    height: '500px',
    flexGrow: 1,
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
  }),
  title: {
    fontSize: '56px',
    fontWeight: 'bold',
    lineHeight: 1.29,
    color: 'darkGrey',
  },
  subTitle: {
    fontSize: '56px',
    fontWeight: 'bold',
    lineHeight: 1.29,
    color: '#00bfcb',
  },
  description: {
    fontSize: '18px',
    lineHeight: 1.56,
    color: 'lightGrey',
    margin: '24px 0 0 0',
  },
  button: {
    margin: '56px 0 88px',
    width: '196px',
    height: '56px',
    textAlign: 'center',
    border: '1px solid #cad1d5',
    fontSize: '16px',
    color: '#646c70',
    fontWeight: 'medium',
    borderRadius: '28px',
    boxShadow: '3px 3px 5px rgba(0,0,0,0.03)',
    // display:inline-block; zoom:0; *display:inline;
    // ; height:56px; line-height:56px; text-align:center; background-color:#fff; border:1px solid #cad1d5;
    // font-size:16px; color:#646c70; font-family:'notokr-medium';
    // border-radius:28px; -moz-border-radius:28px; -webkit-border-radius:28px;
    // -webkit-box-shadow:3px 3px 5px rgba(0,0,0,0.03); -moz-box-shadow:3px 3px 5px rgba(0,0,0,0.03); box-shadow:3px 3px 5px rgba(0,0,0,0.03); box-shadow:3px 3px 5px rgba(0,0,0,0.03) \0/IE9;
  },
}))

function Banner(props) {
  const classes = useStyles(props)
  const { title, subTitle, description } = props

  return (
    <Grid
      container
      className={classes.root}
      direction='column'
      alignItems='flex-start'
      justify='flex-end'
    >
      <Typography align='left' component='div'>
        <Box className={classes.title}>{title}</Box>
        <Box className={classes.subTitle}>{subTitle}</Box>
        <Box className={classes.description}>
          {description.split('\n').map((line, key) => {
            return (
              <span key={key}>
                {line}
                <br />
              </span>
            )
          })}
        </Box>
      </Typography>
      <Button className={classes.button}> 자세히 보기 </Button>
    </Grid>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
}

export default Banner
