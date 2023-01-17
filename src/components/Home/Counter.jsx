export default function Counter() {
  return (
    <section id='counter' className='bg-primary-three my-14'>
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
    </section>
  )
}
