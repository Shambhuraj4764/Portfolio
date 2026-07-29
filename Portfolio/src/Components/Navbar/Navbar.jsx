import React from 'react'
import LeftNavbar from './LeftNavbar'
import CenterNavbar from './CenterNavbar'
import RightNavbar from './RightNavbar'

const Navbar = () => {
  return (
    <div className='flex static bg-gray-800 items-center justify-between h-25 px-7  ' >
      <LeftNavbar />
      <CenterNavbar />
      <RightNavbar />
    </div>
  )
}

export default Navbar