import React from 'react'
import { Link } from 'react-router-dom'

import Dropdown from './Dropdown'
import { useState } from 'react'



const Header = () => {
const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <header className='bg-purple-900 md:sticky top-0 z-10'>
      <div className='mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <h3 className='title-font font-bold text-white mb-4 md:mb-0 text-4xl'>BMKM</h3>
        <button className='leading-none px-3 py-1 text-white block lg:hidden bg-transparent rounded-md ' type='button' onClick={() => setNavbarOpen(!navbarOpen)}>
          <i className='bx bx-menu bx-md'></i>
        </button>
        <div className={'lg:block ' +(navbarOpen  ? 'flex': 'hidden')} >
          <nav className="text-gray-400 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	lg:flex flex-wrap items-center sm:grid-cols-3 text-base">
          <Link to='/' className='mr-5 text-xl hover:text-white'>Home</Link>
          <Dropdown />
          <Link to='/about' className='mr-5 text-xl hover:text-white'>About Us</Link>
          <Link to ='/contact' className='mr-5 text-xl hover:text-white'>Contact Us</Link>
            <button className='mr-7 text-xl bg-white hover hover:bg-black hover:text-white text-purple-900 rounded-lg py-2 px-6'>Watch<i className='bx-fw bx bx-play bx-sm bx-flashing'></i>Live</button>
          </nav>
        </div>
      </div>
   </header>
  )
}

export default Header
