import React from 'react'
import PropTypes from 'prop-types'
import MySlider from 'react-slick'
import Banner from './Banner'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import '../../../styles/slick.css'
import '../../../styles/slick-theme.css'
import imgPromo1 from '../../../assets/promo-01.svg'
import imgPromo2 from '../../../assets/promo-02.png'
import imgPromo3 from '../../../assets/promo-03.svg'
import { ReactComponent as ArrowNext } from '../../../assets/ui-slide-simple-next.svg'
import { ReactComponent as ArrowPrev } from '../../../assets/ui-slide-simple-prev.svg'
import dotIcon from '../../../assets/dot.svg'
import dotActiveIcon from '../../../assets/dot-active.svg'
// import { ReactComponent as DotIcon } from '../../../assets/dot.svg'
// import { ReactComponent as DotActiveIcon } from '../../../assets/dot-active.svg'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  dot: {
    height: '8px',
    width: '8px',
    backgroundImage: `url(${dotIcon})`,
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'none',
    margin: '0 auto',
    '&:focus,&:active': {
      width: '18px',
      backgroundImage: `url(${dotActiveIcon})`,
    },
  },
}))

/* Dot */
function Dot(props) {
  console.log('Dot - ', props)
  return <Typography {...props}>{props.active ? 'A' : 'O'}</Typography>
}

/* Arrow 좌우 화살표 */
function Arrow(props) {
  const { className, style, onClick, hidden, type } = props
  const Component = type === 'prev' ? ArrowPrev : ArrowNext
  const side = type === 'prev' ? 'left' : 'right'

  return (
    <Component
      className={className}
      style={{
        ...style,
        width: '66px',
        height: '66px',
        [side]: '-100px',
        visibility: hidden ? 'hidden' : 'visible',
      }}
      onClick={onClick}
    />
  )
}

Arrow.propTypes = {
  hidden: PropTypes.bool,
  type: PropTypes.oneOf(['prev', 'next']).isRequired,
}

/* 프로모션 배너 */
export default function Promotions() {
  const classes = useStyles()

  const [isSliderPlaying, setSliderPlaying] = React.useState(true)
  const sliderRef = React.useRef(null)

  function toggleAutoPlay() {
    console.log(`toggleAutoPlay ${isSliderPlaying} => ${!isSliderPlaying}`)
    if (isSliderPlaying) {
      sliderRef.current.slickPause()
    } else {
      sliderRef.current.slickNext()
      sliderRef.current.slickPlay()
    }
    setSliderPlaying(!isSliderPlaying)
  }

  const carouselProps = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 250,
    autoPlaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Container
        style={{
          magin: '0 auto',
          textAlign: 'center',
          bottom: '25px',
        }}
      >
        <ul>
          <li
            style={{ marginLeft: '-100px', marginRight: '20px' }}
            onClick={toggleAutoPlay}
          >
            {isSliderPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </li>
          {React.Children.map(dots, (dot, index) => {
            const active = dot.props.className === 'slick-active'
            console.log(`dot[${index}]=${active}`)
            return React.cloneElement(dot, {
              children: <Dot className={classes.dot} active={active} />,
              active,
            })
          })}
        </ul>
      </Container>
    ),
    // customPaging: (i) => ,

    arrows: true,
    prevArrow: <Arrow type='prev' />,
    nextArrow: <Arrow type='next' />,
    autoplay: true,
    // afterChange: (current, next) => setCurrentSlide(current),
  }

  console.log(`isPlaying = ${isSliderPlaying}`)

  return (
    <div>
      <MySlider
        ref={sliderRef}
        style={{ margin: '30px auto 50px', width: '1240px' }}
        {...carouselProps}
      >
        {[imgPromo1, imgPromo2, imgPromo3, imgPromo1].map((img) => (
          <Banner key={img} image={img} />
        ))}
        {/* <Banner image={imgPromo2} />
        <Banner image={imgPromo3} /> */}
      </MySlider>
    </div>
  )
}
