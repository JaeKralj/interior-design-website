import { FaAngleRight } from 'react-icons/fa'

// styles from module
import styles from './projects.module.css'
export default function ProjectCard({ imgUrl, name, category }) {
  return (
    <div
      className={`max-w-[34.375rem] ${styles['project-wrapper']} bg-white shadow p-3`}
    >
      <div className='w-full'>
        <img
          src={imgUrl}
          alt='modern kitchen'
          className='rounded-inherit w-full'
        />
      </div>
      <div className='flex items-center justify-between my-4'>
        <p className='font-heading lg:text-2xl text-primary-two flex flex-col text-base'>
          {name}
          <span className='font-jost text-text-primary lg:text-xl text-sm'>
            {category}
          </span>
        </p>
        <span className='bg-primary-three aspect-square w-14 p-3 grid place-items-center rounded-full border-[.625rem] border-transparent bg-clip-padding hover:cursor-pointer'>
          <FaAngleRight />
        </span>
      </div>
    </div>
  )
}
