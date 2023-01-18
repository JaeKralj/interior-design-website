import { ReactComponent as LogoIcon } from 'assets/Logo.svg'

export default function Logo() {
  return (
    <span className='flex items-center font-normal font-heading lg:text-[2.5rem] gap-2 text-xl'>
      <LogoIcon className='w-7 aspect-square lg:w-auto' />
      Interno
    </span>
  )
}
