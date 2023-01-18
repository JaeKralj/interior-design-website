import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { animateOnScrollVariant } from '../../App'
import Button from '../UI/Button'

export default function Work() {
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
      id='work'
      className='transition-transform duration-500 ease-linear bg-white'
      variants={animateOnScrollVariant}
      animate={control}
      initial='hidden'
    >
      <div className='max-w-1200 lg:flex-row flex flex-col items-center justify-center p-5 mx-auto my-10'>
        <div className='text-center'>
          <h3 className='font-heading lg:text-2xl text-primary-two text-xl'>
            Project Plan
          </h3>
          <p className='font-jost lg:text-[1.375rem] text-sm px-3 text-text-primary'>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <Button className='gap-1 p-2 mx-auto font-semibold'>
            <span className='text-text-primary'>Read More</span>
            <FaArrowRight className='fill-primary-one' />
          </Button>
        </div>
        <div className='text-center'>
          <h3 className='font-heading lg:text-2xl text-primary-two text-xl'>
            Interior Work
          </h3>
          <p className='font-jost lg:text-[1.375rem] text-sm px-3 text-text-primary'>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <Button className='gap-1 p-2 mx-auto font-semibold'>
            <span className='text-[#4d5053]'>Read More</span>
            <FaArrowRight className='fill-primary-one' />
          </Button>
        </div>
        <div className='text-center'>
          <h3 className='font-heading lg:text-2xl text-primary-two text-xl'>
            Realization
          </h3>
          <p className='font-jost lg:text-[1.375rem] text-sm px-3 text-text-primary'>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <Button className='gap-1 p-2 mx-auto font-semibold'>
            <span className='text-[#4d5053]'>Read More</span>
            <FaArrowRight className='fill-primary-one' />
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
