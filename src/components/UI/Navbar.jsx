import { useState } from 'react'
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'
import Logo from './Logo'

export default function Navbar() {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true)
  const [searchHidden, setSearchHidden] = useState(true)
  return (
    <header role='banner' className='bg-white'>
      <nav
        aria-labelledby='mainmenulabel'
        className='max-w-1200 flex flex-wrap items-center justify-between p-5 mx-auto'
      >
        <h2 className='hidden' id='mainmenu'>
          Main Menu
        </h2>
        {/* Logo Here */}
        <div className='font-heading text-primary-two'>
          <Logo />
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
          className={`md:block md:opacity-100 w-full md:w-auto ${
            navbarCollapsed ? 'max-h-0' : 'max-h-[300px]'
          } transition-[max-height] overflow-hidden duration-700 ease-in mt-1`}
        >
          <ul className='md:flex-row font-jost md:text-xl md:shadow-none md:items-center flex flex-col gap-4 p-2 text-sm shadow'>
            <li
              className='hover:scale-105 hover:cursor-pointer'
              aria-current='page'
            >
              Home
            </li>
            <li className='hover:scale-105 hover:cursor-pointer'>Pages</li>
            <li className='hover:scale-105 hover:cursor-pointer'>Services</li>
            <li className='hover:scale-105 hover:cursor-pointer'>Project</li>
            <li className='hover:scale-105 hover:cursor-pointer'>Blog</li>
            <li className='hover:scale-105 hover:cursor-pointer'>Contact</li>
            <li>
              <label htmlFor='search' className='flex items-center gap-2'>
                {searchHidden ? (
                  <FaSearch
                    onClick={() => {
                      setSearchHidden(prev => !prev)
                    }}
                    className='cursor-zoom-in'
                  />
                ) : (
                  <FaTimes
                    onClick={() => {
                      setSearchHidden(prev => !prev)
                    }}
                    className='cursor-zoom-out'
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
    </header>
  )
}
