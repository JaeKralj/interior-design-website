import interiorDesign from 'assets/interior_design.png'
import kitchenDesign from 'assets/kitchen_design.png'
import modernDesign from 'assets/modern_design.png'
import BlogCard from './BlogCard'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { animateOnScrollVariant } from '../../../App'

export default function Blog() {
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
      id='blog'
      ref={ref}
      variants={animateOnScrollVariant}
      animate={control}
      initial='hidden'
      className='transition-transform duration-500 ease-in bg-white'
    >
      <div className='max-w-1200 p-5 mx-auto'>
        <h4 className='text-center lg:text-[3.125rem] text-2xl my-3'>
          Articles & News
        </h4>
        <p className='text-center max-w-[650px] mx-auto lg:text-[1.375rem] text-sm'>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>

        <div className='my-7 md:gap-1 flex flex-wrap justify-between gap-5'>
          <BlogCard
            imgUrl={interiorDesign}
            title='Let’s Get Solution For Building Construction Work'
            tag='interior design'
            date='26 December,2022'
          />
          <BlogCard
            imgUrl={kitchenDesign}
            title='Low Cost Latest Invented Interior Designing
Ideas.'
            tag='kitchen design'
            date='22 December,2022'
          />
          <BlogCard
            imgUrl={modernDesign}
            title='Best For Any Office & Business Interior 
Solution'
            tag='modern design'
            date='25 December,2022'
          />
        </div>
      </div>
    </motion.section>
  )
}
