import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footers() {

    const [showFullText, setShowFullText] = useState(false);

    const handleToggleText = () => {
        setShowFullText(!showFullText);
    };

    const socialMediaPlatforms = [
        { icon: <IoLogoFacebook size={15} color='#8292a3' />, name: 'Facebook', link: '#' },
        { icon: <FaTwitter size={15} color='#8292a3' />, name: 'Twitter', link: '#' },
        { icon: <FaTelegramPlane size={15} color='#8292a3' />, name: 'Telegram', link: '#' },
        { icon: <FaLinkedin size={15} color='#8292a3' />, name: 'Linkedin', link: '#' },
        { icon: <FaYoutube size={15} color='#8292a3' />, name: 'YouTube', link: '#' },
        { icon: <FaInstagram size={15} color='#8292a3' />, name: 'Instagram', link: '#' },
    ];

    const company = [
        { name: 'About Us', link: '#' },
        { name: 'Market Talk', link: '#' },
        { name: 'Brokerage Charges', link: '#' },
        { name: 'Refer and Earn', link: '#' },
        { name: 'Announcements', link: '#' },
        { name: 'Partner with us', link: '#' },
        { name: 'Press Releases', link: '#' },
        { name: 'Bug Bounty Program', link: '#' },
        { name: 'Contact Us', link: '#' }
    ];


    const services = [
        { name: 'Demat Account', link: '#' },
        { name: 'Open Mutual Fund Account', link: '#' },
        { name: 'Trading Account', link: '#' },
        { name: 'Commodity Trading', link: '#' },
        { name: 'Equity Trading', link: '#' },
        { name: 'Download Forms', link: '#' },
        { name: 'Margin sheets', link: '#' },
        { name: 'Glossary', link: '#' },
        { name: 'Help Center', link: '#' }
    ];

    const products = [
        { name: 'Pro Web', link: '#' },
        { name: 'Pro Mobile', link: '#' },
        { name: 'Mutual Funds', link: '#' },
        { name: 'IPOs', link: '#' },
        { name: 'Futures And Options', link: '#' },
        { name: 'Stocks', link: '#' },
        { name: 'Indices', link: '#' },
        { name: 'Uplink Developer API', link: '#' },
        { name: 'Upstox x TradingView', link: '#' }
    ];
    


    return (
        <>
            <footer className=' w-[100%] h-[100%] px-2 lg:px-11 xl:px-32 mt-14 bg-[#43165c]'>


                <div className='px-3 md:px-6  lg:px-6 xl:px-[4.6rem]'>
<div className='px-3 md:px-6 py-4  lg:px-6 xl:px-[4.6rem] flex md:hidden lg:hidden justify-between text-white  border-b-2 border-[#5a298b] '>
<IoLogoFacebook size={25}/>
<FaTwitter size={25}/>
<FaTelegramPlane size={25}/>
 <FaLinkedin size={25}/>
  <FaYoutube size={25}/>
  <FaInstagram size={25}/>
</div>
                </div>

                <div className='px-3 md:px-6  lg:px-6 xl:px-[4.6rem]'>
                    <div className='px-3 lg:px-6 xl:px-[4.6rem]  md:flex lg:flex flex-warp flex-row justify-between pt-9  lg:pb-6'>

                        <div className='w-full md:w-[30%] lg:w-[24%] mb-9 md:mb-0 lg:mb-0'>
                            <img src="https://upstox.com/app/uploads/2023/04/Upstox-Logo-IPL-No-Spacing-Top-1.png" alt="Upstox footer logo" className='w-[38%] w-[50%]' />
                            <p className='text-[#fff] pr-5 py-5 text-sm font-normal'>30th Floor, Sunshine Tower, Senapati Bapat Marg, Dadar (W), Mumbai, Maharashtra 400013</p>
                            <img src="https://upstox.com/app/uploads/2022/08/download-playStore.png" alt="Upstox playStore" className='mb-3 w-[45%] lg:w-[60%]' />
                            <img src="https://upstox.com/app/uploads/2022/08/download-appStore.png" alt="Upstox Appstore" className='w-[45%]  lg:w-[60%]' />
                        </div>

                        <div className='mx-0 mb:mx-1 lg:mx-2.5 mb-9 md:mb-0 lg:mb-0'>
                            <p className='text-[#a09568] mb-4 font-semibold text-base'>Products</p>
                            <ul className='text-[#fff]  text-sm font-normal'>
                                {products.map((item, index) => (
                                    <li key={index} className='mb-2.5'>
                                        <Link to={item.link}> {item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='mx-0 mb:mx-1 lg:mx-2.5 mb-9 md:mb-0 lg:mb-0'>
                            <p className='text-[#a09568] mb-4 font-semibold text-base'>Company</p>
                            <ul className='text-[#fff]  text-sm font-normal'>
                                <ul className='text-[#fff]  text-sm font-normal'>
                                    {company.map((item, index) => (
                                        <li key={index} className='mb-2.5'>
                                            <Link to={item.link}> {item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </ul>
                        </div>

                        <div className='mx-0 mb:mx-1 lg:mx-2.5 mb-9 md:mb-0 lg:mb-0'>
                            <p className='text-[#a09568] mb-4 font-semibold text-base'>Services</p>
                            <ul className='text-[#fff]  text-sm font-normal'>
                                {services.map((item, index) => (
                                    <li key={index} className='mb-2.5'>
                                        <Link to={item.link}> {item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className='mx-0 mb:mx-1 lg:mx-2.5 mb-9 md:mb-0 lg:mb-0 hidden md:block lg:block'>
                            <p className='text-[#a09568] mb-4 font-semibold text-base'>Social</p>
                            <ul className='text-[#fff] text-sm font-normal'>
                                {socialMediaPlatforms.map((platform, index) => (
                                    <li key={index} className='mb-2.5 flex gap-3 items-center content-center'>
                                        {platform.icon}<Link to={platform.link}> {platform.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='px-3 md:px-6   lg:px-6 xl:px-[4.6rem]'>
                    <div className='px-3 py-6 lg:px-6 xl:px-[4.6rem] text-white flex justify-between flex-wrap font-medium text-[0.7rem] border-t-2 border-[#5a298b]'>
                        <div className='flex justify-between flex-wrap'>
                            <p className='mr-3 pb-2 md:pb-0 lg:pb-0'><Link to=''>Sitemap</Link></p>
                            <p className='mr-3 pb-2 md:pb-0 lg:pb-0'><Link to=''>Terms of Use and Privacy Policy</Link></p>
                            <p className='mr-3 pb-2 md:pb-0 lg:pb-0'><Link to=''>Trust & Security</Link></p>
                            <p className='mr-3 pb-2 md:pb-0 lg:pb-0'><Link to=''>Careers</Link></p>
                            <p className='mr-3  '><Link to=''>Investor Charter</Link></p>
                            <p className=''><Link to=''>Client Bank Details</Link></p>
                        </div>
                        <p className='hidden lg:flex '>Made with ❤️ in India | Copyright © 2024, <Link to='' className='text-[#dd92e4] '> Upstox</Link></p>
                    </div>
                </div>



                
            </footer>
        </>

    )
}
