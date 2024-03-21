import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuLine } from 'react-icons/ri';
import { IoCloseCircle } from "react-icons/io5";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-[#61399f] px-2 mb-5 md:px-16 lg:px-20 py-3 flex justify-between items-center">
      <Link to="/">
        <img src="https://upstox.com/app/uploads/2023/04/Upstox-Logo-IPL-No-Spacing-Top-1.png" alt="Logo" className="h-10" />
      </Link>

      <div className="lg:hidden">
        <span className="text-white text-2xl" onClick={toggleMenu}>
          <RiMenuLine />
        </span>
      </div>

      <ul className={`lg:flex text-white lg:gap-6 lg:items-center ${showMenu ? 'flex fixed top-0 left-0 w-screen h-screen bg-[#61399f] flex-col justify-center items-center z-50 w-[60%] md:w-[50%] space-y-7 border-r-4 border-[#00FFFF] ' : 'hidden'}`}>
        <button className='absolute lg:hidden top-[50%]  right-0' onClick={toggleMenu}><IoCloseCircle size={40}/></button>
        <li className="px-3">
          <Link to="/">Products</Link>
        </li>
        <li className="px-3">
          <Link to="/">Solutions</Link>
        </li>
        <li className="px-3">
          <Link to="/">Resources</Link>
        </li>
        <li className="px-3">
          <Link to="/">Pricing</Link>
        </li>
        <li>
          <Link to="/">
            <span className="rounded-l-2   lg:border-r-2 px-3 lg:pr-4 border-white ">For developers</span>
          </Link>
        </li>
        <li className=''>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 w-full rounded-md text-extrabold">Login</button>
        </li>
        <li>
          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md">Request Demo</button>
        </li>
      </ul>
    </nav>
  );
}



// import React, { useState, useRef } from 'react'
// import { Link } from 'react-router-dom';
// import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
// import { RiMenuLine, RiSearchLine } from "react-icons/ri";
// import { NavLink } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";

// export default function NavBar() {
 

//   const [showMenu, setShowMenu] = useState(false);

//  const toggleMenu = () => {
//    setShowMenu(!showMenu);
//  };

//   const closeMenuOnMobile = () => {
//     if (window.innerWidth <= 1150) {
//       setShowMenu(false);
//     }
//   };


//   return (
//     <>
//     <nav className="bg-[#61399f] px-2 mb-5 md:px-16 lg:px-20 py-3 flex justify-between items-center flex-wrap">
//     <NavLink to="/" >
//             <img src="https://upstox.com/app/uploads/2023/04/Upstox-Logo-IPL-No-Spacing-Top-1.png" alt="Logo" className="h-10" />
//           </NavLink>
 
//           <ul
//             className={` ${showMenu ? "block w-[70%] md:w-[40%] bg-[#61399f]" : "hidden"}  flex flex-col h-full justify-center items-center w-full h-full fixed top-0 left-0 z-50 space-y-6 text-white text-lg text-semibold`}
//             onClick={toggleMenu}>
//              <li className='px-3'><Link rel="stylesheet" href="" >Products</Link></li>
//               <li className='px-3'><Link rel="stylesheet" href="" >Solutions</Link></li>
//               <li className='px-3'><Link rel="stylesheet" href="" >Resources</Link></li>
//               <li className='px-3'><Link rel="stylesheet" href="" >Pricing</Link></li>
//               <Link to='' ><span className='rounded-l-2  px-3 border-white mr-4'>For developers</span></Link>
//               <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-extrabold">Login</button>
//               <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md">Request Demo</button>
//           </ul>

//           <div className={`flex-row hidden lg:flex justify-between `}>
//             <ul className='flex gap-12 items-center text-sm text-bold text-white'>
//               <li className='px-3'><Link rel="stylesheet" href="" >Products</Link></li>
//               <li className='px-3'><Link rel="stylesheet" href="" >Solutions</Link></li>
//               <li className='px-3'><Link rel="stylesheet" href="" >Resources</Link></li>
//               <li className='px-3'><Link rel="stylesheet" href="" >Pricing</Link></li>
//               <Link to='' ><span className='rounded-l-2 border-r-2 px-3 border-white mr-4'>For developers</span></Link>
//             </ul>


//             <div className="flex space-x-3 items-center text-sm ">
//               <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-extrabold">Login</button>
//               <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md">Request Demo</button>
//             </div>
//           </div>
//           <span className="text-white text-2xl flex lg:hidden" onClick={toggleMenu}>
//             <RiMenuLine />
//           </span>
//     </nav>
//     </>
//   )
// }
