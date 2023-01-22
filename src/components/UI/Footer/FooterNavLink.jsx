export default function FooterNavLink({ children }) {
  return (
    <li className='lg:text-[1.125rem] text-sm my-4 hover:cursor-pointer hover:scale-105 transition-transform duration-200 ease-linear'>
      {children}
    </li>
  )
}
