import React from 'react'
import { Link } from 'react-router-dom'

import Dropdown from './Dropdown'



const Header = () => {
  return (
    <header className='bg-purple-900 md:sticky top-0 z-10'>
      <div className='mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <h3 className='title-font font-bold text-white mb-4 md:mb-0 text-4xl'>BMKM</h3>
        <nav className="text-gray-400 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to='/' className='mr-5 text-xl hover:text-white'>Home</Link>
          <Dropdown />
          <Link to='/about' className='mr-5 text-xl hover:text-white'>About Us</Link>
          <Link to ='/contact' className='mr-5 text-xl hover:text-white'>Contact Us</Link>
          <button className='mr-7 text-xl bg-white hover hover:bg-black hover:text-white text-purple-900 rounded-lg py-2 px-6'>Watch<i className='bx bx-play bx-sm bx-flashing'></i>Live</button>
        </nav>
      </div>
   </header>
  )
}

export default Header
