
import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="
      w-full
      h-20
      px-6 sm:px-10 lg:px-16
      flex flex-row
      justify-between
      items-center
      bg-slate-900
      border-b border-slate-700
      shadow-lg
    ">

      {/* Logo */}
      <NavLink
        to='/'
        className="
          text-2xl
          sm:text-3xl
          font-bold
          text-white
          tracking-wide
          hover:text-blue-400
          transition-colors
          duration-200
        "
      >
        Paste<span className="text-blue-500">App</span>
      </NavLink>


      {/* Navigation Links */}
      <div className="
        flex
        items-center
        gap-2 sm:gap-4
      ">

        <NavLink
          to='/'
          className={({ isActive }) =>
            `
            px-4 py-2
            rounded-lg
            text-sm sm:text-base
            font-medium
            transition-all
            duration-200
            ${
              isActive
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }
            `
          }
        >
          Home
        </NavLink>


        <NavLink
          to='/pastes'
          className={({ isActive }) =>
            `
            px-4 py-2
            rounded-lg
            text-sm sm:text-base
            font-medium
            transition-all
            duration-200
            ${
              isActive
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }
            `
          }
        >
          Pastes
        </NavLink>


        <NavLink
          to='/Viewpaste/:id'
          className={({ isActive }) =>
            `
            px-4 py-2
            rounded-lg
            text-sm sm:text-base
            font-medium
            transition-all
            duration-200
            ${
              isActive
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }
            `
          }
        >
          View Paste
        </NavLink>

      </div>

    </div>
  )
}

export default Navbar

