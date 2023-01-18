import { FaArrowRight } from 'react-icons/fa'
import Button from '../UI/Button'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { animateOnScrollVariant } from '../../App'

export default function Contact() {
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
      id='contact'
      ref={ref}
      variants={animateOnScrollVariant}
      animate={control}
      initial='hidden'
      className='transition-transform duration-500 ease-in bg-white'
    >
      <div className='max-w-1200 p-5 mx-auto'>
        <div className='flex flex-col justify-center items-center gap-3 py-12 my-9 rounded-[15px] bg-primary-two'>
          <h4 className='text-white lg:text-[3.125rem] text-2xl'>
            Wanna join the interno?
          </h4>
          <p className='text-white lg:text-[1.375rem] text-sm my-3'>
            It is a long established fact will be distracted.
          </p>
          <Button className='lg:text-lg bg-primary-one gap-2 p-5 text-xs'>
            Contact With Us <FaArrowRight className='fill-primary-two' />
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
