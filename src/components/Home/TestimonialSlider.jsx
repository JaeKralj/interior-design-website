import { A11y, Autoplay, Keyboard, Pagination } from 'swiper'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import bennyPic from 'assets/benny_roll.jpg'
import natashaPic from 'assets/natasha_mith.jpg'
import rayPic from 'assets/raymond_galario.jpg'
import TestiCard from './TestiCard'

export default function TestimonialSlider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      keyboard={{
        enabled: true,
      }}
      a11y={{
        enabled: true,
        containerMessage: 'wraps slides of reviews from clients',
        containerRoleDescriptionMessage: 'container for reviews from clients',
        itemRoleDescriptionMessage: 'This is a review from our client',
      }}
      onKeyPress={(swiper, key) => {
        if (key !== 75) return
        swiper.autoplay.pause()
      }}
      modules={[Pagination, Autoplay, Keyboard, A11y]}
      style={{
        height: 'fit-content',
        paddingBottom: '35px',
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
        <TestiCard name='Natasha Mith' picUrl={natashaPic} />
      </SwiperSlide>
      <SwiperSlide>
        <TestiCard name='Benny Roll' picUrl={bennyPic} />
      </SwiperSlide>
      <SwiperSlide>
        <TestiCard name='Raymond Galario' picUrl={rayPic} />
      </SwiperSlide>
    </Swiper>
  )
}
