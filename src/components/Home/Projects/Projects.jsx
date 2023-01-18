import modernRoom from 'assets/modern_room.png'
import modernSittingRoom from 'assets/modern_sitting_room.png'
import modernTable from 'assets/modern_table.png'
import tableInKitchen from 'assets/table_in_kitchen.png'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { animateOnScrollVariant } from '../../../App'
import ProjectCard from './ProjectCard'

export default function Projects() {
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
      id='projects'
      ref={ref}
      variants={animateOnScrollVariant}
      animate={control}
      initial='hidden'
      className='transition-transform duration-500 ease-in bg-white'
    >
      <div className='max-w-1200 p-5 mx-auto'>
        <h4 className='font-heading text-primary-two text-center text-2xl lg:text-[3.125rem]'>
          Follow Our Projects
        </h4>
        <p className='text-center font-jost text-sm lg:px-52 my-5 lg:text-[1.375rem]'>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
        <div className='flex flex-wrap justify-between'>
          <ProjectCard
            imgUrl={tableInKitchen}
            name='Modern Kitchen'
            category='Decor / Architecture'
          />
          <ProjectCard
            imgUrl={modernRoom}
            name='Modern Room'
            category='Decor / Architecture'
          />
          <ProjectCard
            imgUrl={modernTable}
            name='Modern Table'
            category='Decor / Architecture'
          />
          <ProjectCard
            imgUrl={modernSittingRoom}
            name='Modern Sitting Room'
            category='Decor / Architecture'
          />
        </div>
      </div>
    </motion.section>
  )
}
