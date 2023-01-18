import { FaAngleRight } from 'react-icons/fa'

// styles from module
import styles from './projects.module.css'
export default function ProjectCard({ imgUrl, name, category }) {
  return (
    <div
      className={`max-w-[34.375rem] ${styles['project-wrapper']} bg-white shadow p-3 group hover:cursor-pointer`}
    >
      <div className='w-full overflow-hidden'>
        <img
          src={imgUrl}
          alt='modern kitchen'
          className='rounded-inherit group-hover:scale-150 w-full transition-transform duration-[3000ms] ease-in-out'
        />
      </div>
      <div className='flex items-center justify-between my-4'>
        <p className='font-heading lg:text-2xl text-primary-two flex flex-col text-base'>
          {name}
          <span className='font-jost text-text-primary lg:text-xl text-sm'>
            {category}
          </span>
        </p>
        <span className='bg-primary-three aspect-square w-20 p-3 grid place-items-center rounded-full border-[.625rem] border-transparent bg-clip-padding hover:cursor-pointer group-hover:shadow'>
          <FaAngleRight />
        </span>
      </div>
    </div>
  )
}
