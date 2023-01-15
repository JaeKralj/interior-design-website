import { useState } from 'react'
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'
import { ReactComponent as Logo } from '../../assets/Logo.svg'

export default function Navbar() {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true)
  const [searchHidden, setSearchHidden] = useState(true)
  return (
    <div className='bg-white'>
      <nav
        aria-labelledby='mainmenulabel'
        className='max-w-1200 flex flex-wrap items-center justify-between p-5 mx-auto'
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
          className={`md:block w-full md:w-auto ${
            navbarCollapsed ? 'hidden' : 'block'
          } transition-all duration-500 ease-in`}
        >
          <ul className='lg:gap-3 lg:flex-row font-jost lg:text-xl md:shadow-none lg:items-center flex flex-col p-2 text-sm shadow'>
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
                    searchHidden ? 'hidden' : 'block'
                  } shadow rounded transition-all duration-500 ease-in-out`}
                />
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
