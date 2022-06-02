import React from 'react'

const Header = () => {
  return (
    <header className='bg-purple-900 md:sticky top-0 z-10'>
      <div className='mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <h3 className='title-font font-bold text-white mb-4 md:mb-0 text-4xl'>BMKM</h3>
        <nav className="text-gray-400 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <h5 className='mr-5 text-xl hover:text-white'>Home</h5>
          <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" type='button' className=' border border-gray-200 rounded-lg mr-5 text-xl hover:text-white text-center inline-flex items-center'>Our Ministries <i className='bx bx-chevron-down'></i></button>
          <div id="dropdownDivider" className='z-10 hidden bg-purple-800 divide-y divide-gray-100 rounded shadow w-44 '>
            <ul className='py-1 text-sm text-gray-400 dark:text-gray-200' aria-labelledby="dropdownDividerButton">
              <li className='block px-4 py-2 hover:text-white'>Jesus Celebration Centre</li>
              <li className='block px-4 py-2 hover:text-white'>Bishop Mark Kegohi Academy</li>
            </ul>
            </div>
          <h5 className='mr-5 text-xl hover:text-white '>About Us</h5>
          <h5 className='mr-5 text-xl hover:text-white '>Contact Us</h5>
          <button className='mr-7 text-xl bg-white hover hover:bg-black hover:text-white text-purple-900 rounded-lg py-2 px-6'>Watch<i className='bx bx-play bx-sm bx-flashing'></i>Live</button>
        </nav>
      </div>
   </header>
  )
}

export default Header
