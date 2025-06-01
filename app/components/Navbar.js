import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white flex justify-between items-center rounded-full py-11 pl-12 pr-3 w-[88vw] h-[10vh] fixed top-[8vh] left-[6vw] right-[6vw]'>
      <div className='flex items-center space-x-20'>
      <img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" className='w-[8vw] h-[8vh]' alt="" srcSet="" />

      <ul className='flex text-[18px] font-semibold'>
        <li className='cursor-pointer hover:bg-gray-200 p-3 rounded-lg'>products</li>
        <li className='cursor-pointer hover:bg-gray-200 p-3 rounded-lg'>Templates</li>
        <li className='cursor-pointer hover:bg-gray-200 p-3 rounded-lg'>Marketplace</li>
        <li className='cursor-pointer hover:bg-gray-200 p-3 rounded-lg'>Learn</li>
        <li className='cursor-pointer hover:bg-gray-200 p-3 rounded-lg'>Pricing</li>
      </ul>
      </div>
      <div className='flex items-center space-x-3'>
        <button className='rounded-lg bg-gray-200 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out py-4 px-6 font-bold'>Log in</button>
        <button className='rounded-full bg-gray-900 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out py-4 px-6 font-bold text-white'>Sign up free</button>
      </div>
    </nav>
  )
}

export default Navbar
