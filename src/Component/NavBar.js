import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <>
         <nav className="bg-[#61399f] px-2 mb-5 md:px-16 lg:px-20 py-3 text-white">
      <div className=" flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://upstox.com/app/uploads/2023/04/Upstox-Logo-IPL-No-Spacing-Top-1.png" alt="Logo" className="h-8 mr-2" />
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setShowMenu(!showMenu)} className="text-white">
            {showMenu ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        
        <ul className='flex gap-12 items-center text-sm text-bold'>
<li className='px-3'><Link rel="stylesheet" href="" >Products</Link></li>
<li className='px-3'><Link rel="stylesheet" href="" >Solutions</Link></li>
<li className='px-3'><Link rel="stylesheet" href="" >Resources</Link></li>
<li className='px-3'><Link rel="stylesheet" href="" >Pricing</Link></li>
        </ul>


                  <div className="flex space-x-3 items-center text-sm ">
                      <Link to='' ><span className='rounded-l-2 border-r-2 px-3 border-white mr-4'>For developers</span></Link>

                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-extrabold">Login</button>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md">Request Demo</button>
                  </div>
              </div>



          </nav>
      </>
  )
}
