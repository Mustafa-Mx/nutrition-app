import React from 'react'
import logoT from '../assets/images/logoT.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='grid grid-cols-3 py-3 px-44 bg-[#00000071] backdrop-blur-md fixed top-0 left-0 w-[calc(100vw-5px)]'>
      <div className='col-span-2'>
          <img src={logoT}></img>
      </div>
      <div className='flex items-center justify-evenly [&>*]:caret-transparent bg-transparent [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out '>
          <Link to={'/'} className='hover:text-[#f58820] text-white'>
              Home
          </Link>
          <Link to={'/'} className='hover:text-[#f58820] text-white'>
              Features
          </Link>
          <Link to={'/'} className='hover:text-[#f58820] text-white'>
              FAQs
          </Link>
          <Link to={'/'} className='hover:text-[#f58820] text-white'>
              Contact Us
          </Link>
          <button className='bg-[#f58820] border hover:border-[#f58820] text-white px-5 py-2 hover:bg-opacity-75 rounded-full'>
              Sign Up
          </button>
          <button className='border-2 border-[#f58820] hover:border-[#f58820] bg-transparent text-white px-5 py-2 hover:bg-white hover:bg-opacity-25 rounded-full'>
              Log In
          </button>
      </div>
    </div>
  )
}

export default Navbar