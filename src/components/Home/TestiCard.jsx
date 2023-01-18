import Card from '../UI/Card'

export default function TestiCard({ name, picUrl }) {
  return (
    <Card className='max-w-xs py-8 bg-white'>
      <div className='flex items-center gap-2'>
        <div className='aspect-square w-16 rounded-full'>
          <img
            src={picUrl}
            alt='natasha mith from sydney, USA'
            className='rounded-[inherit]'
          />
        </div>
        <div>
          <h4 className='font-heading lg:text-2xl text-base'>{name}</h4>
          <span className='font-jost lg:text-lg text-sm'>
            Sydney, Australia
          </span>
        </div>
      </div>
      <p className='my-2'>
        Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has
        been scrambled.
      </p>
    </Card>
  )
}
