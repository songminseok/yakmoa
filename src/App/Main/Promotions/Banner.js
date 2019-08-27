import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { inherits } from 'util'

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    width: '1240px',
    height: '552px',
    flexGrow: 1,
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
  }),
}))

function Banner(props) {
  const { image } = props
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Box>
        <div>
          <h3>Title</h3>
          <h4>Description</h4>
          <Button> Click </Button>
        </div>
        {/* <div>
          <img src={image} alt='Banner' />
        </div> */}
      </Box>
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
}

export default Banner
