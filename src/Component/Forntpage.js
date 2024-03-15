import React from 'react'
import img from '../assest/about.jpg'

export default function Forntpage() {


    return (
        <>
            <section className='my-14 w-full grid grid-cols-1 lg:grid-cols-5 gap-4 px-14  bg-[#f2ecfd] rounded-lg'>

                <div className='col-span-1   lg:col-span-3 rounded-lg my-12 mx-6 px-16 py-11 bg-white'>
                    <div className=''>
                        <div className='text-[#41246e] mb-6'>
                            <h2 className='text-[1.8rem] font-bold '>Invest Right, Invest Now With Upstox </h2>
                            <span className='text-2xl font-normal'>Trusted by 1 Crore+ Indians</span>
                        </div>
                        
                        <div className=" ">
                            <div className="lg:flex gap-3 items-center">
                                {/* First Div (Input) */}
                                <div className="mb-4 lg:mb-0 col-span-1  w-full lg:col-span-3  ">
                                    <div className="mt-1 relative rounded-full shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">+91</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            className="w-full focus:border-indian focus:ring-indian block w-full pl-12 pr-3 py-4 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>
                                {/* Second Div (Button) */}
                                
                                    <button className="col-span-1   lg:col-span-2  bg-[#41246e] hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full focus:outline-none focus:shadow-outline">Sign-Up</button>
                                
                            </div>
                           
                            <div className="mt-4">
                                <p className="text-gray-700">By signing up, you agree to receive transaction updates on Whatsapp. You may also receive a call from an Upstox representative to help you open the account.</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='col-span-1 pt-12  lg:col-span-2  h-full w-auto'>
                    <img src={img} alt="" className='h-full w-full object-cover' />
                </div>
            </section>
        </>

    )
}
