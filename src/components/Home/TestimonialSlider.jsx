import { Autoplay, Pagination } from 'swiper'
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
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
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
