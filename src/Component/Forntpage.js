import React from 'react'
import img from '../assest/car-5548242_1280.jpg'
import { IoMdStar } from "react-icons/io";
import Slider from 'react-slick'

export default function Forntpage() {

    const settings = {
        fade: true,
        speed: 200,
        autoplayspeed: 200,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    }


    return (
        <>
            <section className='mx-0 lg:mx-0 xl:mx-20 bg-[#f2ecfd] flex flex-wrap rounded-lg px-0 xl:px-14 mt-10 mb-20 '>
                <div className='relative w-full md:w-full lg:w-7/12 h-auto pt-2 lg:pt-14  px-5 pb-7 rounded-lg overflow-hidden  '>
                    <div className='absolute inset-0 bg-[#61399f] mt-14 mx-5 mb-6 rounded-lg -rotate-[5deg] right-4 hidden lg:block'>
                    </div>
                    <div className='bg-white px-5 md:py-10 md:px-12 py-3 lg:py-7 xl:py-11 lg:px-9 xl:px-16 rounded-lg relative z-10'>
                        <div className='text-center lg:text-start text-[#41246e] mb-6 mt-3'>
                            <h2 className='text-2xl md:text-[1.6rem]  lg:text-[1.6rem] font-bold '>Invest Right, Invest Now With Upstox </h2>
                            <span className='text-xl text-2xl font-normal'>Trusted by 1 Crore+ Indians</span>
                        </div>
                        <form>
                            <div className='flex flex-col md:flex-row lg:flex-row mb-3.5  lg:justify-start justify-center'>
                                <div className="mb-4 lg:mb-0 mr-3 w-full relative rounded-full shadow-sm">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900 text-sm font-bold">+91</span>
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        className="w-full pl-12 pr-3  py-3 md:py-4 lg:py-4 border-gray-600 rounded-full border-[1px] focus:outline-none focus:border-[#41246e] focus:ring-[#41246e] focus:ring-[0.5px]"
                                        placeholder="Enter your phone number"
                                    />

                                </div>
                                <div className='w-fit md:w-4/12 lg:w-3/12 flex md:block justify-center'>
                                    <button className=" bg-[#61399f] hover:bg-[#61399f] text-white font-bold py-3 md:py-3.5 px-5  rounded-full focus:outline-none focus:shadow-outline text-sm">Sign-Up</button>
                                </div>
                                {/* <button className=" bg-[#61399f] hover:bg-[#61399f] text-white font-bold py-3 md:py-3.5 px-5  rounded-full focus:outline-none focus:shadow-outline text-sm">Sign-Up</button> */}
                            </div>
                            <p className='text-[#666] text-[10px] pb-7 text-center lg:text-start'>
                                By signing up, you agree to receive transaction updates on Whatsapp. You may also receive a call from an Upstox representative to help you open the account.
                            </p>
                        </form>

                        <hr className='w-[50%] h-[2px] bg-[#61399F] opacity-40 mb-8 hidden md:block' />
                        <div className='w-full flex flex-wrap'>
                            <div className='md:w-1/4  w-1/2  px-2  mb-9 md:mb-0 lg:mb-0 flex justify-center md:justify-start'>
                                <div>
                                    <h5 className='text-[#444] font-bold text-lg flex items-center '>4.4+ <IoMdStar color='#F1C232' size={18} /> </h5>
                                    <span className='text-[#3d3d3dbf] text-xs font-normal'>Avg. App rating</span>
                                </div>
                            </div>
                            <div className='md:w-1/4  w-1/2   mb-9 md:mb-0 lg:mb-0 flex justify-center'>
                                <div>
                                    <h5 className='text-[#444] font-bold text-lg'>₹0</h5>
                                    <span className='text-[#3d3d3dbf] text-xs font-normal'>AMC</span>
                                </div>
                            </div>
                            <div className='md:w-1/4  w-1/2  flex justify-center'>
                                <div>
                                    <h5 className='text-[#444] font-bold text-lg'>₹20</h5>
                                    <span className='text-[#3d3d3dbf] text-xs font-normal'>Brokerage*</span>
                                </div>
                            </div>
                            <div className='md:w-1/4  w-1/2  xs:w-1/2 px-2 flex justify-center md:justify-start'>
                                <div>
                                    <h5 className='text-[#444] font-bold text-lg'>₹0</h5>
                                    <span className='text-[#3d3d3dbf] text-xs font-normal'>Backed by the best</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='w-full md:w-full lg:w-5/12 px-10'>
                    
                  []
                </div> */}

                <div className='w-full md:w-full h-full lg:w-5/12 px-10 '>

                  
                        <img src={img} alt=""  className='w-full h-full object-cover'/>
                       

                </div>
            </section>
        </>

    )
}
