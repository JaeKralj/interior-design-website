import { ReactComponent as PhoneIcon } from 'assets/call.svg'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../UI/Button'

import kitchen from 'assets/kitchen_with_stool.jpg'

export default function AboutUs() {
  return (
    <section id='aboutus' className='bg-white'>
      <div className='max-w-1200 md:flex-row flex flex-col gap-5 p-4 mx-auto'>
        <div className='font-jost text-text-primary max-w-prose justify-evenly flex flex-col items-start'>
          <h3 className='font-heading text-primary-two lg:text-5xl p-4 text-2xl'>
            We Create The Art Of Stylish Living Stylishly
          </h3>
          <p className='lg:text-[1.375rem] text-sm p-4'>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div>
            <div className='mb-9 flex'>
              <span className='aspect-square w-14 bg-primary-three inline-block p-3 text-center rounded-full'>
                <PhoneIcon />
              </span>
              <div className='flex flex-col'>
                <span className='lg:text-2xl text-base font-bold'>
                  012345678
                </span>
                <span className='lg:text-22 text-sm'>Call Us Anytime</span>
              </div>
            </div>
            <Button className='bg-primary-two gap-1 px-8 py-6 max-w-[14.875rem]'>
              Get Free Estimate <FaArrowRight className='fill-primary-one' />
            </Button>
          </div>
        </div>
        <div className='max-w'>
          <img
            src={kitchen}
            className='lg:rounded-tr-[20.4063rem] lg:rounded-bl-[7.6875rem] rounded-tr-[9.375rem] rounded-md rounded-bl-[6.25rem]'
            alt='an empty small kitchen with stools'
          />
        </div>
      </div>
    </section>
  )
}
