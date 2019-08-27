import React from 'react'
import PropTypes from 'prop-types'
import MySlider from 'react-slick'
import Banner from './Banner'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

import '../../../styles/slick.css'
import '../../../styles/slick-theme.css'
import imgPromo1 from '../../../assets/promo-01.svg'
import imgPromo2 from '../../../assets/promo-02.png'
import imgPromo3 from '../../../assets/promo-03.svg'
import { ReactComponent as ArrowNext } from '../../../assets/ui-slide-simple-next.svg'
import { ReactComponent as ArrowPrev } from '../../../assets/ui-slide-simple-prev.svg'
import icoDot from '../../../assets/dot.svg'
import icoDotActive from '../../../assets/dot-active.svg'
import { ReactComponent as PlayIcon } from '../../../assets/ui_slider_play.svg'
import { ReactComponent as PauseIcon } from '../../../assets/ui_slider_pause.svg'

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  icon: { display: 'inline-flex', verticalAlign: 'middle' },
  dots: {
    bottom: '25px',
  },
}))

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
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const sliderRef = React.useRef(null)

  function toggleAutoPlay() {
    console.log(`toggleAutoPlay ${isSliderPlaying} => ${!isSliderPlaying}`)
    console.log('sliderRef', sliderRef.current)
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
    infinite: true,
    speed: 500,
    autoPlaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Container className={classes.dots}>
        <ul
          style={{
            display: 'inline-block',
          }}
        >
          <li onClick={toggleAutoPlay} style={{ marginRight: '20px' }}>
            {isSliderPlaying ? (
              <PauseIcon className={classes.icon} />
            ) : (
              <PlayIcon className={classes.icon} />
            )}
          </li>
          {dots}
        </ul>
      </Container>
    ),
    customPaging: (i) => (
      <Link>
        <img src={i === currentSlide ? icoDotActive : icoDot} alt='Dot' />
      </Link>
    ),

    arrows: true,
    prevArrow: <Arrow type='prev' />,
    nextArrow: <Arrow type='next' />,
    autoplay: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    // afterChange: (current, next) => setCurrentSlide(current),
  }

  console.log(`isPlaying = ${isSliderPlaying}`)

  const banners = [
    {
      title: '전문적이고 안전한',
      subTitle: '중고폰판매 서비스 리폰',
      description: '이제 중고폰 거래도,           편의점에서!',
      image: imgPromo1,
    },
    {
      title: '데이터 유출 걱정없이,',
      subTitle: '리폰하세요.',
      description:
        '고려대학교 포렌식연구소와 함께하는 데이터 이중 삭제\n프로그램으로 안심하고 거래하세요.',
      image: imgPromo2,
    },
    {
      title: '내 폰은 얼마일까?',
      subTitle: '리폰에서 확인하세요.',
      description:
        '리폰에서 내 폰 시세 조회하면,\n 과거시세부터 미래시세까지 바로 확인 할 수 있습니다.',
      image: imgPromo3,
    },
  ]
  return (
    <div>
      <MySlider
        ref={sliderRef}
        style={{ margin: '30px auto 50px', width: '1240px' }}
        {...carouselProps}
      >
        {banners.map((banner) => (
          <Banner
            key={banner.image}
            title={banner.title}
            subTitle={banner.subTitle}
            description={banner.description}
            image={banner.image}
          />
        ))}
      </MySlider>
    </div>
  )
}
