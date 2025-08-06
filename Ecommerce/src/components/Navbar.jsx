import React, { useState } from 'react'
import { useCart } from '../Context/CartContext'
import { Link, NavLink } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { FaCaretDown, FaBars } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { CgClose } from 'react-icons/cg'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {
  const { cartItem } = useCart()

  // State for mobile nav menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  return (
    <div className='bg-black py-1 shadow-2xl '>
      <div className='max-w-6xl mx-auto flex justify-between text-white p-3 items-center'>

        {/*  Mobile menu icon (hamburger) */}
        <div className='lg:hidden'>
          <FaBars className='w-6 h-6 cursor-pointer' onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        </div>

        {/* logo + location */}
        <div className='flex items-center'>
          <Link to="">
            <h1 className='font-bold font-serif text-3xl'>
              <span className='text-blue-300 text-6xl ml-12'>A</span>hmad
            </h1>
          </Link>

          {/*  Hide location on mobile */}
          <div className='hidden md:flex gap-1 items-center pl-5 pt-3 cursor-pointer'>
            {/* <MapPin className='text-blue-300 w-7 h-12' /> */}
            <span>
              {location ? (
                <div className='-space-y-2'>
                  <p>{location.state}</p>
                  <p>{location.town}</p>
                </div>
              ) : "Add Address"}
            </span>
            {/* <FaCaretDown onClick={toggleDropdown} /> */}
          </div>

          {/* Location Dropdown (unchanged) */}
          {openDropdown && (
            <div className='w-[250px] h-max shadow-2xl z-50 bg-black fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md'>
              <h1 className='font-semibold mb-4 text-xl flex justify-between text-white items-center'>
                Change Location <span onClick={toggleDropdown}><CgClose className='hover:bg-red-600' /></span>
              </h1>
              <button onClick={getLocation} className='bg-white text-black px-3 py-1 rounded-md cursor-pointer hover:bg-red-600 hover:text-white mr-12'>
                Detect my location
              </button>
            </div>
          )}
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

        {/*  Cart + Auth */}
        <div className='flex items-center gap-16 mr-16 '>
          <Link to={"cart"} className='flex'>
            <IoCartOutline className='w-7 h-7 mt-1' />
            <span className='rounded-full text-xl text-center text-blue-300'>{cartItem.length}</span>
          </Link>

          <div className='hidden sm:flex'>
            <SignedOut>
              <SignInButton className='rounded-full bg-blue-300 w-20 text-center h-9' />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>

      {/*  Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className='lg:hidden bg-black px-6 py-4 text-white space-y-4'>
          <ul className="flex flex-col text-xl space-y-2">
            <li>
              <NavLink to={""} onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-blue-300" : ""}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"about"} onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-blue-300" : ""}`}>About</NavLink>
            </li>
            <li>
              <NavLink to={"contact"} onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-blue-300" : ""}`}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"product"} onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => `${isActive ? "text-blue-300" : ""}`}>Products</NavLink>
            </li>
          </ul>
          <div className='flex sm:hidden'>
            <SignedOut>
              <SignInButton className='rounded-full bg-blue-300 w-20 text-center h-9' />
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
