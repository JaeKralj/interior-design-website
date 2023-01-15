import { useState } from 'react'
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'
import { ReactComponent as Logo } from '../../assets/Logo.svg'

export default function Navbar() {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true)
  const [searchHidden, setSearchHidden] = useState(true)
  return (
    <div className='p-5 bg-white'>
      <nav
        aria-labelledby='mainmenulabel'
        className='lg:justify-evenly flex flex-wrap items-center justify-between'
      >
        <h2 className='hidden' id='mainmenu'>
          Main Menu
        </h2>
        {/* Logo Here */}
        <div className='font-heading'>
          <span className='flex items-center font-normal lg:text-[2.5rem] gap-2 text-xl'>
            <Logo className='w-7 aspect-square lg:w-auto' />
            Interno
          </span>
        </div>
        {/* Toggler */}
        <FaBars
          className='md:hidden'
          onClick={() => {
            setNavbarCollapsed(prev => !prev)
          }}
        />
        {/* Navbar Nav */}
        <div
          className={`md:scale-100 w-full md:w-auto ${
            navbarCollapsed ? 'scale-0' : 'scale-100'
          } transition-transform duration-500 ease-in`}
        >
          <ul className='lg:gap-3 lg:flex-row font-jost lg:text-xl md:shadow-none flex flex-col p-2 text-sm shadow'>
            <li className='hover:scale-105' aria-current='page'>
              Home
            </li>
            <li className='hover:scale-105'>Pages</li>
            <li className='hover:scale-105'>Services</li>
            <li className='hover:scale-105'>Project</li>
            <li className='hover:scale-105'>Blog</li>
            <li className='hover:scale-105'>Contact</li>
            <li>
              <label htmlFor='search' className='flex items-center gap-2'>
                {searchHidden ? (
                  <FaSearch
                    onClick={() => {
                      setSearchHidden(prev => !prev)
                    }}
                  />
                ) : (
                  <FaTimes
                    onClick={() => {
                      setSearchHidden(prev => !prev)
                    }}
                  />
                )}

                <input
                  type='search'
                  name='search'
                  id='search'
                  autoComplete='off'
                  className={`${
                    searchHidden ? 'scale-0' : 'scale-100'
                  } shadow rounded transition-transform duration-500 ease-in-out`}
                />
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
