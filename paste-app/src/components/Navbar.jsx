import React from 'react'
import { NavLink } from 'react-router'
import Home from './Home'

const Navbar = () => {
  return (
    <div className='flex flex-row  justify-between h-16 bg-slate-100 w-full  items-center p-10'>
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