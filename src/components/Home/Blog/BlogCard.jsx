import { FaAngleRight } from 'react-icons/fa'

export default function BlogCard({ imgUrl, title, tag, date }) {
  return (
    <div className='odd:bg-white group even:bg-primary-three max-w-[23.4375rem] p-4 rounded-[12%] drop-shadow-md'>
      <div className='rounded-t-inherit relative w-full'>
        <img src={imgUrl} alt={tag} className='rounded-t-inherit w-full' />
        <p className='absolute bottom-[5%] left-4 p-3 bg-white rounded-lg rounded-bl-none'>
          {tag}
        </p>
      </div>
      <h4 className='lg:text-[1.5625rem] text-base mt-2 mb-5'>{title}</h4>
      <div className='flex items-center justify-between'>
        <span className='lg:text-base text-xs'>{date}</span>
        <span className='group-odd:bg-primary-three group-even:bg-white aspect-square w-14 p-3 grid place-items-center rounded-full border-[.625rem] border-transparent bg-clip-padding hover:cursor-pointer'>
          <FaAngleRight />
        </span>
      </div>
    </div>
  )
}
