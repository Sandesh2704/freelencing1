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
    
    const NavList = [
        { name: 'A', link: '#' },
        { name: 'B', link: '#' },
        { name: 'C', link: '#' },
        { name: 'D', link: '#' },
        { name: 'E', link: '#' },
        { name: 'F', link: '#' },
        { name: 'G', link: '#' },
        { name: 'H', link: '#' },
        { name: 'I', link: '#' },
        { name: 'J', link: '#' },
        { name: 'K', link: '#' },
        { name: 'L', link: '#' },
        { name: 'M', link: '#' },
        { name: 'N', link: '#' },
        { name: 'O', link: '#' },
        { name: 'P', link: '#' },
        { name: 'Q', link: '#' },
        { name: 'R', link: '#' },
        { name: 'S', link: '#' },
        { name: 'T', link: '#' },
        { name: 'U', link: '#' },
        { name: 'V', link: '#' },
        { name: 'W', link: '#' },
        { name: 'X', link: '#' },
        { name: 'Y', link: '#' },
        { name: 'Z', link: '#' }
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



<div className='px-3 md:px-6 lg:px-6 xl:px-[4.6rem]'>
  <div className='px-3 lg:px-6 py-6 xl:px-[4.6rem] text-[#fff] block lg:flex content-center'>
    <span className='text-xl font-semibold w-[10%]'>Stocks</span>
    <ul className='flex flex-grow-0 lg:flex-grow-1 flex-wrap text-sm font-medium w-full'>
      {NavList.map((item, index) => (
        <li key={index} className='px-2 py-0.5 border-r-[1px] border-[#F2F2F2] flex-0 lg:flex-1 mt-4 md:mt-4 lg:mt-0'>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
      <li className='pl-2.5 py-0.5 mt-4 md:mt-4 lg:mt-0'>
        <Link to=''>Others</Link>
      </li>
    </ul>
  </div>
</div>


                <div className='px-3 md:px-6  lg:px-6 xl:px-[4.6rem]'>
                    <div className='px-3 py-8 lg:px-6 xl:px-[4.6rem] text-xs font-normal text-[#eeebe6] border-y-2 border-[#5a298b] opacity-50 leading-[18px]'>
                        <p>Upstox Securities Pvt. Ltd.: SEBI Registration No. INZ000315837 | NSE TM Code: 13942 | BSE TM Code: 6155 | CDSL Reg No.: IN-DP-761-2024 | CIN: U65100DL2021PTC376860 | Compliance Officer: Mr. Kapil Jaikalyani. Tel No.: (022) 24229920. Email ID: <Link to='' className='text-[#dd92e4]'>compliance@upstox.com </Link> | Registered Address: 809, New Delhi House, Barakhamba Road, Connaught Place, New Delhi - 110001 | RKSV Commodities India Pvt. Ltd.: SEBI Registration No.: INZ000015837 | MCX TM Code: 46510 | CIN: U74900DL2009PTC189166 | Compliance Officer: Mr. Amit Lalan. Tel No.: (022) 24229920. Email ID: compliance@rksv.in | Registered Address: 807, New Delhi House, Barakhamba Road, Connaught Place, New Delhi - 110001. Correspondence Address: 30th Floor, Sunshine Tower, Senapati Bapat Marg, Dadar (West), Mumbai - 400013. | For any complaints, email at <Link to='' className='text-[#dd92e4]'>complaints@upstox.com</Link> and <Link to='' className='text-[#dd92e4]'>complaints.mcx@upstox.com</Link>.</p>
                        <br />
                        <p>Procedure to file a complaint on <Link to='' className='text-[#dd92e4]'>SEBI SCORES</Link>: Register on the SCORES portal. Mandatory details for filing complaints on  <Link to='' className='text-[#dd92e4]'>SCORES include</Link>: Name, PAN, Address, Mobile Number, and E-mail ID. Benefits include effective communication and speedy redressal of grievances. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI, along with our Terms of Use and Privacy Policy.</p>
                        <br />
                        <p>The brand name Upstox and the logo are the registered trademarks of RKSV Securities India Pvt. Ltd. Upstox Securities Pvt Ltd and RKSV Commodities India Pvt. Ltd are wholly owned subsidiaries of RKSV Securities India Pvt. Ltd.</p>
                        <br />
                        <p>Disclaimer: Investment in securities market are subject to market risks, read all the related documents carefully before investing.
                            *Brokerage will not exceed the SEBI prescribed limit.</p>
                        <br />
                        <h3 className='text-sm font-normal mb-2.5'>Risk disclosures on derivatives -</h3>
                        <div className='pl-6'>
                            <li>9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.</li>
                            <li>On an average, loss makers registered net trading loss close to ₹ 50,000</li>
                            <li>Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.</li>
                            <li>Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.</li>
                        </div>
                        <br />
                        <p>Mutual Funds: Top rated funds do not constitute any advice. Research data is powered by Morningstar. Please read the offer documents carefully before investing. Upstox shall not accept any liability arising out of your investments.</p>
                        <p>
                            These are not Exchange traded products, and the Member is just acting as distributor. All disputes with respect to the distribution activity, would not have access to Exchange investor redressal forum or Arbitration mechanism.</p>
                        <br />
                        <p>Attention Investors: As per NSE circular dated July 6, 2022, BSE circular dated July 6, 2022, MCX circular dated July 11, 2022 investors are cautioned to abstain them from dealing in any schemes of unauthorised collective investments/portfolio management, indicative/ guaranteed/fixed returns / payments etc. Investors are further cautioned to avoid practices like:</p>
                        <p>a) Sharing i) trading credentials – login id & passwords including OTP’s., ii) trading strategies, iii) position details.</p>
                        <p>b) Trading in leveraged products /derivatives like Options without proper understanding, which could lead to losses.</p>
                        <p>c) Writing/ selling options or trading in option strategies based on tips, without basic knowledge & understanding of the product and its risks</p>
                        <p>d) Dealing in unsolicited tips through like Whatsapp, Telegram, Instagram, YouTube, Facebook, SMS, calls, etc.</p>
                        <p>e) Trading / Trading in “Options” based on recommendations from unauthorised / unregistered investment advisors and influencers.</p>
                        <br />
                        <p>Kindly, read the Advisory Guidelines For Investors as prescribed by the Exchange with reference to their circular dated 27th August, 2021 regarding investor awareness and safeguarding client's assets:<Link to='' className='text-[#dd92e4]'> Advisory Guidelines For Investors</Link></p>
                        <br />
                        <p>Kindly, read the advisory as prescribed by the Exchange with reference to their circular dated January 14, 2022 regarding Updation of mandatory KYC fields by March 31, 2022:<Link to='' className='text-[#dd92e4]'></Link>KYC Updation</p>
                        <br />
                        {!showFullText && (
                            <button onClick={handleToggleText} className='text-[#dd92e4]'>
                                Read more
                            </button>
                        )}


                        {showFullText && (
                            <div>
                                <p>Attention Investors: Prevent unauthorised transactions in your Demat account by updating your mobile number with your depository participant. Receive alerts on your registered mobile number for debit and other important transactions in your Demat account directly from CDSL on the same day. Prevent unauthorised transactions in your Trading account by updating your mobile numbers/email addresses with your stock brokers. Receive information on your transactions directly from the Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is a one-time exercise while dealing in securities markets - once KYC is done through a SEBI-registered intermediary (broker, DP, Mutual Fund, etc.), you need not undergo the same process again when you approach another intermediary. As a business, we don't give stock tips and have not authorised anyone to trade on behalf of others. If you find anyone claiming to be part of Upstox or RKSV and offering such services, please send us an email at <Link to='' className='text-[#dd92e4]'>complaints@upstox.com</Link> and <Link to='' className='text-[#dd92e4]'>complaints.mcx@upstox.com</Link>.</p>
                                <br />
                                <p>No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account.</p>

                                <p>Stockbrokers can accept securities as margin from their clients only by way of a pledge in the depository system w.e.f. 1st September 2020.</p>

                                <p>Update your email ID and mobile number with your stockbroker/depository participant and receive an OTP directly from the depository on your registered email ID and/or mobile number to create a pledge.</p>

                                <p>Check your securities/mutual funds/bonds in the Consolidated Account Statement (CAS) issued by NSDL/CDSL every month.</p>
                                <br />
                                <p>Attention Investors: SEBI has established an Online Dispute Resolution Portal (ODR Portal) for resolving disputes in the Indian Securities Market. This circular streamlines the existing dispute resolution mechanism, offering online conciliation and arbitration, benefiting investors and listed companies.</p>
                                <Link to='' className='text-[#dd92e4]'>https://www.sebi.gov.in/legal/circulars/jul-2023/online-resolution-of-disputes-in-the-indian-securities-market_74794.html</Link>
                                <br />
                                <p>ODR portal for Investors - <Link to='' className='text-[#dd92e4]'>Login smartodr account</Link> </p>
                                <br />
                                <h1 className='mb-5 mt-1 font-bold'>About Upstox’s Trading Platform:</h1>
                                <h3 className='text-sm font-normal mb-2.5'>Upstox is India’s Highest Rated Online Trading App</h3>
                                <p>Upstox is loved and trusted by 1 crore+ Indians. By opening an Upstox Demat & Trading account you can enjoy Stocks, ETFs, Mutual Funds, Options, Futures, Currency, Commodity, IPOs, SGBs, T-Bills, Bonds along with 1 crore+ Indians!</p>
                                <br />

                                <h3 className='text-sm font-normal mb-2.5'>The Upstox Trading App has 2 modes:</h3>
                                <p>👉Upstox Pro for Traders: For Equity, Options, Futures</p>
                                <p>👉Upstox for Investors: For Stocks, IPOs, Mutual Funds, SGBs, ETFs, T-Bills, Bonds</p>
                                <br />


                                <h3 className='text-sm font-normal mb-2.5'>Risk disclosures on derivatives -</h3>
                                <div className='pl-6'>
                                    <li>Option Chain with Option Greeks, PCR, Max Pain, India VIX</li>
                                    <li>Smartlists to find trades: Most Active, Top Traded, OI & IV Gainers</li>
                                    <li>Futures Heatmap to identify trends</li>
                                    <li>Ready-made Option Strategies for Option trades with P&L analysis</li>
                                    <li>TradingView & ChartIQ charts on mobile with 100+ indicators, 80+ drawing tools</li>
                                    <li>Advanced TradingView desktop platform with 8 chart setup</li>
                                    <li>Fundamental Data + Technical Analysis via Trends</li>
                                    <li>In-depth OI analysis for NIFTY 50, BANK NIFTY, FINNIFTY options</li>
                                    <li>FII + DII data</li>
                                    <li>Global indices data to plan Option trades</li>
                                    <li>Execute orders above Freeze Quantity in Futures & Options</li>
                                    <li>Stop Loss, Limit, Cover, GTT orders valid till Option expiry</li>
                                    <li>Basket Orders to place 20 orders & gain hedging benefits from NSE, BSE</li>
                                    <li>Trade from TradingView & Option Chain</li>
                                    <li>Enable DDPI to sell Stocks without TPIN</li>
                                    <li>Margin against Stocks, SGBs, ETFs for Option trading</li>
                                </div>
                                <br />
                                <h3 className='text-sm font-normal mb-2.5'>Features on the ‘Upstox For Investors’ mode:</h3>
                                <div className='pl-6'>
                                    <li>Curated Stock lists: Best For Beginners, Actively Traded, Top Trending</li>
                                    <li>6-point investment checklist for a quick Stock summary</li>
                                    <li>Analyst ratings to determine whether to buy, sell or hold a Stock</li>
                                    <li>2 Order Types - Stock SIP and 365-day Limit Orders</li>
                                    <li>Investment ideas to find a fund: Match NIFTY 50, All Weather Investing</li>
                                    <li>Top Rated Mutual Funds & ETFs shortlisted after in-depth analysis</li>
                                    <li>Save up to 2% with Direct Plans</li>
                                    <li>Historical CAGR, CAGR vs FDs and more insights</li>
                                </div>

                                <button onClick={handleToggleText} className='text-[#dd92e4]'>
                                    Read less
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className='px-3 md:px-6   lg:px-6 xl:px-[4.6rem]'>
                    <div className='px-3 py-6 lg:px-6 xl:px-[4.6rem] text-white flex justify-between flex-wrap font-medium text-[0.7rem]'>
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
