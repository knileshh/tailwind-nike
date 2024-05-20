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


      <div className='grid grid-cols-2 mx-10 my-28 py-10'>
        <div className='bg-gray-400 flex flex-col'>Our Summer collection <br></br><span className='text-7xl my-14 font-bold'>The New Arrival <span className='text-red-600'>Nike</span> Shoes</span><br></br> Discover stylish Nike arrivals, quality<br></br> comfort, and innovation for your active life. <br></br>

        <button className='bg-red-500 rounded-3xl h-10 w-36 text-white my-6'>Shop now -</button>


        <div className='flex list-none gap-4'>
          <li><span className='text-2xl font-bold'>1K+</span><br></br>Brands</li>

          <li><span className='text-2xl font-bold'>500+</span><br></br>Shops</li>

          <li><span className='text-2xl font-bold'>250k+</span><br></br>Customers</li>
        </div>
        </div>

        <div className='bg-green-700'>
        <img src='src\assets\nike_landing_assets\assets\images\big-shoe1.png'></img>
        </div>
      </div>
    </section>
  )
}

export default SectionMain