import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center p-7 w-[auto] h-1 bg-blue-200'>
      <NavLink to='/'>
      home
      </NavLink >

      <NavLink to='/pastes'>
        pastes
      </NavLink>
      
      <NavLink to='/Viewpaste/:id'>
      viewpaste
      </NavLink>
        
      
    </div>
  )
}

export default Navbar