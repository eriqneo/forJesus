import React from 'react'

const Footer = () => {
  return (
   
<footer className="p-4 sm:p-6 bg-gray-800 text-gray-100">
      <div className='md:flex md:justify-between'>
        <div className='mb-6 md:mb-0"'>
          <p className='flex items-center'>
            <span className='text-2xl font-semibold whitespace-nowrap'>Bishop Mark Kegohi Ministries</span>
          </p>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ml-4'>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white'>Our Ministries</h2>
            <ul className='text-gray-200 dark:text-gray-400'>
              <li className='mb-4'>JCC Kisumu</li>
              <li className='mb-4'>Bishop Mark Kegohi Foundation</li>
              <li className='mb-4'>Bishop Mark Kegohi Academy</li>
              <li className='mb-4'>Bishop Mark Kegohi Ministrial Investments</li>
              <li className='mb-4'>Redeemers Voice</li>
              </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white'>Social Media</h2>
            <ul className='text-gray-200 dark:text-gray-400'>
              <li className='mb-4'>Facebook</li>
              <li className='mb-4'>Youtube</li>
              <li className='mb-4'>Instagram</li>
              </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white'>Listen and Watch</h2>
            <ul className='text-gray-200 dark:text-gray-400'>
              <li className='mb-4'>HLC TV</li>
              <li className='mb-4'>JCC TV</li>
              <li className='mb-4'>Radio</li>
              <li className='mb-4'>Radio</li>
              </ul>
          </div>
        </div>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='block text-sm text-gray-400 sm:text-center dark:text-gray-400'>© 2022 Bishop Mark Kegohi Ministries™. All Rights Reserved</span>
        <div className='pr-16'>
       <span className='text-gray-400 hover:text-white'><a href=".com">
          <i className='bx bxl-facebook-circle bx-md'></i></a></span>
        <span className='text-gray-400 hover:text-white'><a href=".com">
            <i className='bx bxl-youtube bx-md'></i></a></span>
           <span className='text-gray-400 hover:text-white'><a href=".com">
            <i className='bx bxl-instagram-alt bx-md' ></i></a></span>
           <span className='text-gray-400 hover:text-white'><a href=".com">
          <i className='bx bxl-twitter bx-md' ></i></a></span>
      </div>
      </div>
      
</footer>

  )
}

export default Footer
