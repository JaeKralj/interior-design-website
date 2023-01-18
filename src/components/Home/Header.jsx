import { FaArrowRight } from 'react-icons/fa'
import Button from '../UI/Button'

export default function Header() {
  return (
    <section
      id='hero'
      className='bg-[url(/hero.jpg)] lg:rounded-bl-[18.1875rem] rounded-bl-[6.25rem] bg-white bg-no-repeat bg-center bg-cover min-h-screen transition-transform ease-in duration-[0.8s]'
    >
      <div className='max-w-1200 flex items-center min-h-screen p-5 mx-auto'>
        <div className='bg-blend-overlay bg-opacity-[.1] rounded p-3 bg-black'>
          <h1 className='font-heading lg:text-[5.3125rem] text-[2.5rem] text-primary-two'>
            Let Your Home <br /> Be Unique
          </h1>
          <p className='font-jost lg:text-[1.375rem] text-base my-3 text-[#4d5053]'>
            There are many variations of the passages of lorem Ipsum <br />
            fromavailable,variations of the passages.
          </p>
          <Button className='px-7 bg-primary-two grow-0 gap-1 py-5'>
            Get Started <FaArrowRight className='fill-primary-one' />
          </Button>
        </div>
      </div>
    </section>
  )
}
