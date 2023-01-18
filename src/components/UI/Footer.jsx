import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='max-w-1200 flex flex-wrap justify-between gap-4 p-5 mx-auto'>
        <div className='max-w-[18.75rem] mx-auto md:mx-0 flex flex-col items-center gap-4 md:items-start'>
          <Logo />
          <p className='md:text-left text-center lg:text-[1.375rem] text-sm'>
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div className='flex gap-4'>
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
        <div>
          <h4 className='lg:text-2xl text-base'>Pages</h4>
          <ul>
            <li className='lg:text-[1.375rem] text-sm my-4'>About Us</li>
            <li className='lg:text-[1.375rem] text-sm my-4'>Our Projects</li>
            <li className='lg:text-[1.375rem] text-sm my-4'>Our Team</li>
            <li className='lg:text-[1.375rem] text-sm my-4'>Contact Us</li>
            <li className='lg:text-[1.375rem] text-sm my-4'>Services</li>
          </ul>
        </div>
        <div>
          <h4 className='lg:text-2xl text-base'>Services</h4>
          <ul>
            <li className='lg:text-[1.375rem] text-sm my-4'>Kitchan</li>
            <li className='lg:text-[1.375rem] text-sm my-4'>Living Area</li>
            <li className='lg:text-[1.375rem] text-sm my-4'>Bathroom</li>
            <li className='lg:text-[1.375rem] text-sm my-4'>Dining Hall</li>
            <li className='lg:text-[1.375rem] text-sm my-4'>Bedroom</li>
          </ul>
        </div>
        <div className='max-w-[15rem] mx-auto md:mx-0'>
          <h4 className='md:text-start lg:text-2xl my-2 text-base text-center'>
            Contact
          </h4>
          <address className='md:text-start flex flex-col gap-3 text-center'>
            55 East Birchwood Ave. Brooklyn, New York 11201
            <a href='mailto:'>contact@interno.com</a>
            <a href='tel:+1234567890'>(123) 456 - 7890</a>
          </address>
        </div>
      </div>
    </footer>
  )
}
