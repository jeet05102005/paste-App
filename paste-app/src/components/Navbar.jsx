import React from 'react'
import { NavLink } from 'react-router'
import Home from './Home'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-29'>
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