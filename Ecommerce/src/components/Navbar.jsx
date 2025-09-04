import React, { useState } from 'react'
import { useCart } from '../Context/CartContext'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { CgClose } from 'react-icons/cg'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { useTheme } from '../Context/ThemeContext'   // ✅ Import Theme hook

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
  const { cartItem } = useCart()
  const { theme, toggleTheme } = useTheme()   // ✅ Access theme state + toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  return (
    <div className={`py-1 shadow-2xl transition-colors duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-gray-800 text-white"}`}>
      <div className='max-w-6xl mx-auto flex justify-between p-3 items-center'>

        {/*  Mobile menu icon (hamburger) */}
        <div className='lg:hidden'>
          <FaBars className='w-6 h-6 cursor-pointer' onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        </div>

        {/* logo */}
        <div className='flex items-center'>
          <Link to="">
            <h1 className='font-bold font-serif text-3xl'>
              <span className='text-blue-300 text-6xl ml-12'>A</span>hmad
            </h1>
          </Link>
        </div>

        {/*  Desktop Menu */}
        <nav className='hidden lg:block'>
          <ul className="flex text-xl space-x-6 items-center ml-20">
            <li>
              <NavLink to={""} className={({ isActive }) => `${isActive ? "text-blue-300" : ""}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"about"} className={({ isActive }) => `${isActive ? "text-blue-300" : ""}`}>About</NavLink>
            </li>
            <li>
              <NavLink to={"contact"} className={({ isActive }) => `${isActive ? "text-blue-300" : ""}`}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"product"} className={({ isActive }) => `${isActive ? "text-blue-300" : ""}`}>Products</NavLink>
            </li>
          </ul>
        </nav>

        {/*  Cart + Auth + Theme Toggle */}
        <div className='flex items-center gap-8 mr-6'>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className='px-3 py-1 rounded-lg border text-sm 
              bg-gray-200 dark:bg-gray-700 
              transition-all duration-300'
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Cart */}
          <Link to={"cart"} className='flex items-center'>
            <IoCartOutline className='w-7 h-7' />
            <span className='ml-1 rounded-full text-xl text-blue-300'>{cartItem.length}</span>
          </Link>

          {/* Auth */}
          <div className='hidden sm:flex'>
            <SignedOut>
              <SignInButton className='rounded-full bg-gradient-to-r from-gray-700 to-blue-300 w-20 text-center h-9' />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>

      {/*  Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className='lg:hidden px-6 py-4 space-y-4 transition-colors duration-300 
          ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}'>
          <ul className="flex flex-col text-xl space-y-2">
            <li><NavLink to={""} onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to={"about"} onClick={() => setMobileMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to={"contact"} onClick={() => setMobileMenuOpen(false)}>Contact</NavLink></li>
            <li><NavLink to={"product"} onClick={() => setMobileMenuOpen(false)}>Products</NavLink></li>
          </ul>
          
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className='mt-4 w-full py-2 rounded-lg border text-sm 
              bg-gray-200 dark:bg-gray-700 
              transition-all duration-300'
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>

          <div className='flex sm:hidden mt-4'>
            <SignedOut>
              <SignInButton className='rounded-full bg-gradient-to-r from-gray-700 to-blue-300 w-20 text-center h-9' />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
