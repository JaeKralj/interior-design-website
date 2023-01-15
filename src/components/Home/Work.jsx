import { FaArrowRight } from 'react-icons/fa'
import Button from '../UI/Button'

export default function Work() {
  return (
    <section id='work' className='bg-white'>
      <div className='max-w-1200 lg:flex-row flex flex-col items-center justify-center p-5 mx-auto my-24'>
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
    </section>
  )
}
