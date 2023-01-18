import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { animateOnScrollVariant } from '../../App'

export default function Counter() {
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
      id='counter'
      ref={ref}
      variants={animateOnScrollVariant}
      animate={control}
      initial='hidden'
      className='bg-primary-three my-14 p-5 transition-transform duration-500 ease-in'
    >
      <div className='max-w-1200 justify-evenly lg:flex-row py-11 flex flex-col items-center mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          <h4 className='font-heading lg:text-[5.3125rem] text-[2.8125rem] text-primary-one'>
            12
          </h4>
          <span className='lg:text-[1.375rem] text-sm'>
            Years Of Experience
          </span>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <h4 className='font-heading lg:text-[5.3125rem] text-[2.8125rem] text-primary-one'>
            85
          </h4>
          <span className='lg:text-[1.375rem] text-sm'>Success Projects</span>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <h4 className='font-heading lg:text-[5.3125rem] text-[2.8125rem] text-primary-one'>
            15
          </h4>
          <span className='lg:text-[1.375rem] text-sm'>Active Projects</span>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <h4 className='font-heading lg:text-[5.3125rem] text-[2.8125rem] text-primary-one'>
            95
          </h4>
          <span className='lg:text-[1.375rem] text-sm'>Happy Customers</span>
        </div>
      </div>
    </motion.section>
  )
}
