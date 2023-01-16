import Card from '../UI/Card'
import Clients from './Clients'
import TestimonialSlider from './TestimonialSlider'

export default function Testimonial() {
  return (
    <section id='testimonial' className='p-5 bg-white'>
      <Card className='bg-primary-three max-w-1200 py-7 mx-auto'>
        <h3 className='font-heading lg:text-[3.125rem] text-3xl p-5 lg:my-3 text-center'>
          What People Think About Us
        </h3>
        <TestimonialSlider />
      </Card>

      <Clients />
    </section>
  )
}
