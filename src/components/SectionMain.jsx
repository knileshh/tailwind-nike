import React from 'react'

function SectionMain() {

  return (
    <section className='h-screen bg-slate-100'>
      <nav className='bg-red-400 flex items-center justify-between px-4'>
        <div className='text-white list-none'>
          <li>Nike</li>
        </div>
  
        <ul className='bg-blue-400 flex flex-row space-x-4'>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
  
        <div className='list-none'>
          <li>Sign in / Explore now</li>
        </div>
      </nav>
    </section>
  )
}

export default SectionMain