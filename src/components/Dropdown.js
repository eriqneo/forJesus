import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const showDropdown = () => setIsOpen(true);
    const hideDropdown = () => setIsOpen(false);

  return (
      <div className='dropdown'>
          <div onMouseEnter={showDropdown} onMouseLeave={hideDropdown} className='mr-5'  >
             <h3 className='hover:text-white text-xl' >Our Ministries <i className='bx bxs-chevron-down'></i></h3> 

              {isOpen ? <ul onMouseEnter={showDropdown} className='absolute bg-purple-900 rounded-lg p-3'>
                  <li className='hover:text-white'>
                    <Link to= '/jcc'>Jesus Celebration Center</Link>  
                  </li>
                  <li className='hover:text-white mt-1'>
                      Bishop Mark Kegohi Center Academy
                  </li>
                  <li className='hover:text-white mt-1'>
                        Bishop Mark Kegohi Ministrial Investment
                  </li>
                  <li className='hover:text-white mt-1'>
                        Bishop Mark Kegohi Foundation
                  </li>
                  <li className='hover:text-white mt-1'>
                      Redeemers Voice
                  </li>
              </ul> :null }
              
          </div>
      
    </div>
  )
}

export default Dropdown
