import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { animateOnScrollVariant } from '../../App'
import Card from '../UI/Card'
import Clients from './Clients'
import TestimonialSlider from './TestimonialSlider'

export default function Testimonial() {
  // animation control from framer motion
  const control = useAnimation()
  // in view from intersection observer
  const [ref, inView] = useInView()

  // handle animation
  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])
  return (
    <motion.section
      ref={ref}
      variants={animateOnScrollVariant}
      animate={control}
      initial='hidden'
      className='p-5 transition-transform duration-500 ease-in bg-white'
      id='testimonial'
    >
      <Card className='bg-primary-three max-w-1200 py-7 mx-auto'>
        <h3 className='font-heading lg:text-[3.125rem] text-3xl p-5 lg:my-3 text-center'>
          What People Think About Us
        </h3>
        <TestimonialSlider />
      </Card>

      <Clients />
    </motion.section>
  )
}
