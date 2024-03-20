import React, { useState, useEffect, useRef } from 'react';
import img1 from "../assest/about.jpg";
import img2 from '../assest/download.jpg';
import img3 from '../assest/dark.jpg';
import img4 from "../assest/car-5548242_1280.jpg";
import img5 from '../assest/feature6-1366x768.webp';
import img6 from '../assest/photo-1494976388531-d1058494cdd8.avif';
import { Link } from 'react-router-dom'


export default function Page() {
    const [currentImage1, setCurrentImage1] = useState(null);
    const [activeButton1, setActiveButton1] = useState(null);
    const [currentImage2, setCurrentImage2] = useState(null);
    const [activeButton2, setActiveButton2] = useState(null);

    const images1 = [img1, img2, img3];
    const images2 = [img4, img5, img6];
    const textSummaries1 = [
        {
            head: "Powerful Charting",
            summery1: "TradingView | 8 Charts at once",
            summery2: "100+ indicators | 80+ Drawing tools"
        },
        {
            head: "Powerful Discovery",
            summery1: "Oi analysis | Option Chain with Greeks",
            summery2: "Fill & DII Data | F&O Smartlists"
        },
        {
            head: "Powerful Execution",
            summery1: "GTT | Basket orders, with up to 1st orders",
            summery2: "2X Margin via Margin Pledge on 450+ Stocks"
        }
    ];
    const textSummaries2 = [
        {
            head: "Investment Ideas",
            summery1: "Top rated | Best for beginners",
            summery2: "Top 30 actively traded stocks"
        },
        {
            head: "News & insights",
            summery1: "Analyst rating | investment checklist",
            summery2: "Risk & return related info"
        },
        {
            head: "Order Placement",
            summery1: "Open 24/7 | pay via UPI",
            summery2: "SIP mode for Stocks & Mutual Funds"
        }
    ];

    useEffect(() => {
        const interval1 = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * images1.length);
            setCurrentImage1(images1[randomIndex]);
            setActiveButton1(randomIndex);
        }, 2000);

        const interval2 = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * images2.length);
            setCurrentImage2(images2[randomIndex]);
            setActiveButton2(randomIndex);
        }, 2000);


        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            setShowNavbar(
                currentScrollPos < lastScrollPos || currentScrollPos === 0 || currentScrollPos < document.documentElement.scrollHeight - window.innerHeight
            );
            setLastScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [images1, images2]);

    const changeImage1 = (imageUrl, index) => {
        setCurrentImage1(imageUrl);
        setActiveButton1(index);
    };

    const changeImage2 = (imageUrl, index) => {
        setCurrentImage2(imageUrl);
        setActiveButton2(index);
    };



    const tradeSectionRef = useRef(null);
    const investSectionRef = useRef(null);
    const learnSectionRef = useRef(null);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollPos, setLastScrollPos] = useState(0);

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        });
    };


    return (
        <>
            <section className=" w-[100%] h-[100%] px-2 mb-5 md:px-16 lg:px-32 ">


                <section>
                    <nav className={`sticky top-0 ${showNavbar ? 'block' : 'hidden'} shadow-[#f2ecfd_2px_70px_30px]`}>
                        <ul className="hidden  md:flex lg:flex justify-center">
                            <li className='py-6 px-9 font-medium text-lg  tracking-wide text-[#41246e]'>
                                <button onClick={() => scrollToSection(investSectionRef)}>Invest</button>
                            </li>
                            <li className='py-6 px-9 font-medium text-lg  tracking-wide text-[#41246e]'>
                                <button onClick={() => scrollToSection(tradeSectionRef)}>Trade</button>
                            </li>
                            <li className='py-6 px-9 font-medium text-lg  tracking-wide text-[#41246e]'>
                                <button onClick={() => scrollToSection(learnSectionRef)}>Learn</button>
                            </li>
                        </ul>
                    </nav>
                </section>

                <section ref={tradeSectionRef} className='w-full mx-auto flex flex-wrap-reverse my-20'>
                    <div className='w-full md:w-full lg:w-7/12 h-auto p-0 md:p-1 lg:p-4'>
                        <div className="mb-4">
                            {currentImage2 && (
                                <div className="bg-[#f8f7f5] rounded-lg">
                                    <div className={`block lg:hidden py-5 sm:block md:block text-center `}>
                                        <p className='text-center text-sm'>{activeButton2 < images1.length ? textSummaries1[activeButton2].summery1 : textSummaries2[activeButton2 - images1.length].summery1}</p>
                                        <p className='text-center text-sm'>{activeButton2 < images1.length ? textSummaries1[activeButton2].summery2 : textSummaries2[activeButton2 - images1.length].summery2}</p>
                                    </div>
                                    <img src={currentImage2} alt="Selected" className="h-96 md:h-45 w-full lg:w-full h-auto rounded-lg rounded-t-none lg:rounded-t-lg lg:object-cover" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-full md:w-full lg:w-5/12 p-0 md:p-1 lg:p-4 rounded-lg'>
                        <div className='mb-5 md:mb-5 lg:mb-11 text-center md:text-cemter lg:text-start'>
                            <h2 className='text-2xl lg:text-3xl font-bold tracking-wide text-[#41246e] mb-2 '>Upstox for Investors</h2>
                            <p className='text-[14px] lg:text-base tracking-wide px-2 lg:px-0 text-[#878787] mb-5 lg:mb-0'>Invest Right, Invest Now in Stocks, Mutual Funds, and IPOs</p>
                            <Link to='' className='px-4 py-2 rounded-full text-xs font-medium border-2 border-[#41246e] text-[#41246e] lg:hidden inline-block'>Read More</Link>
                        </div>
                        <ul className="flex lg:flex-col cursor-pointer text-center md:text-start lg:text-start justify-center lg:justify-start ">
                            {images2.map((image, index) => (
                                <li
                                    key={index}
                                    className={`mb-2  mb-3 md:mb-3 lg:mb-6  pb-3 mb:pb-0 lg:pb-0 px-0 md:px-0 lg:px-6 opacity-50 ${index === activeButton2 ? 'border-b-4 lg:border-l-4 lg:border-b-0  border-[#41246e] opacity-90' : ''}`}
                                    onClick={() => changeImage2(image, index)}
                                >
                                    <h1 className='text-lg font-semibold px-1 md:px-4 lg:px-0'>{textSummaries2[index].head}</h1>
                                    <div className='hidden lg:inline-block'>
                                        <p className='text-sm'>{textSummaries2[index].summery1}</p>
                                        <p className='text-sm'>{textSummaries2[index].summery2}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className='px-6 hidden lg:inline-block'>
                            <Link to='' className='px-4 py-2 rounded-full text-xs font-medium border-2 border-[#41246e] text-[#41246e]'>Read More</Link>
                        </div>
                    </div>
                </section>

                <section ref={investSectionRef} className='w-full mx-auto flex flex-wrap my-14'>
                    <div className='w-full md:w-full lg:w-5/12 h-auto p-0 md:p-1 lg:p-4'>
                        <div className='mb-5 md:mb-5 lg:mb-11 text-center md:text-cemter lg:text-start'>
                            <h2 className='text-2xl lg:text-3xl font-bold tracking-wide text-[#41246e] mb-2 '>Upstox Pro Traders</h2>
                            <p className='text-[14px] lg:text-base tracking-wide px-2 lg:px-0 text-[#878787] mb-5 lg:mb-0'>Powerful trading in Equities, Futures, Options, Commodities and Currencies made simple</p>
                            <Link to='' className='px-4 py-2 rounded-full text-xs font-medium border-2 border-[#41246e] text-[#41246e] lg:hidden inline-block'>Read More</Link>
                        </div>
                        <ul className="flex lg:flex-col cursor-pointer text-center md:text-start lg:text-start justify-center lg:justify-start ">
                            {images1.map((image, index) => (
                                <li
                                    key={index}
                                    className={`mb-2  mb-3 md:mb-3 lg:mb-6 pb-3 mb:pb-0 lg:pb-0 px-0 md:px-0 lg:px-6 opacity-50 ${index === activeButton2 ? 'border-b-4 lg:border-l-4 lg:border-b-0  border-[#41246e] opacity-90' : ''}`}
                                    onClick={() => changeImage1(image, index)}

                                >
                                    <h1 className='text-lg font-semibold px-1 md:px-4 lg:px-0'>{textSummaries1[index].head}</h1>
                                    <div className='hidden lg:inline-block'>
                                        <p className='text-sm'>{textSummaries1[index].summery1}</p>
                                        <p className='text-sm'>{textSummaries1[index].summery2}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className='px-6 hidden lg:inline-block'>
                            <Link to='' className='px-4 py-2 rounded-full text-xs font-medium border-2 border-[#41246e] text-[#41246e]'>Read More</Link>
                        </div>
                    </div>
                    <div className='w-full md:w-full lg:w-7/12 p-0 md:p-1 lg:p-4 rounded-lg'>
                        <div className="mb-4">
                            {currentImage1 && (
                                <div className="bg-[#f8f7f5] rounded-lg">
                                    <div className='block lg:hidden py-5 sm:block md:block text-center'>
                                        <p className='text-center text-sm'>{activeButton1 < images1.length ? textSummaries1[activeButton1].summery1 : textSummaries2[activeButton1 - images1.length].summery1}</p>
                                        <p className='text-center text-sm'>{activeButton1 < images1.length ? textSummaries1[activeButton1].summery2 : textSummaries2[activeButton1 - images1.length].summery2}</p>
                                    </div>
                                    <img src={currentImage1} alt="Selected" className="h-96 md:h-45 w-full lg:w-full h-auto rounded-lg rounded-t-none lg:rounded-t-lg lg:object-cover" />
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                

                <section ref={learnSectionRef} className='w-full my-20'>
                    <div className='mb-7 lg:mb-10 '>
                        <h2 className='text-center text-2xl lg:text-3xl font-bold tracking-wide text-[#41246e] mb-2' >Learn all about the Stock Market</h2>
                        <p className='text-center text-sx lg:text-base  tracking-tight lg:tracking-wide text-neutral-700 px-2 lg:px-0'>With our jargon-free and expert-led Courses, Webinars, Events and self-help Videos</p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-96 gap-4'>
                        <div className='grid  '>
                            <Link to=' ' className="bg-white flex lg:block rounded-lg shadow-md bg-[#f2ecfd]">
                                <div>
                                    <img src={img1} alt="Description of" className="max-w-28 h-28 lg:h-full md:max-w-52 lg:max-w-full lg:h-auto rounded-l-lg   lg:rounded-t-lg lg:rounded-bl-none" />
                                </div>
                                    <div className='p-3 md:p-5 lg:p-6 bg-[#f2ecfd]'>
                                    <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 lg:mb-3">Webinars</h2>
                                    <p className='text-xs md:text-sm lg::text-sm'>Online sessions on Risk Management, Options Trading, Technical Analysis and more</p>
                                    </div>
                            </Link>
                        </div>

                        <div className='grid gap-4'>
                            <Link to=' ' className="bg-white rounded-lg shadow-md flex ">
                                <div>
                                    <img src={img1} alt="Description of" className="max-w-28 h-28 lg:h-full md:max-w-52 rounded-l-lg" />
                                </div>
                                <div className='p-3 md:p-5 lg:p-6 bg-[#f2ecfd] w-full rounded-r-lg'>
                                    <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 lg:mb-3">Quick Videos</h2>
                                    <p className='text-xs md:text-sm lg::text-sm'>Learn about, Mutual Funds, IPOs, Gold and more</p>
                                </div>
                            </Link>

                            <Link to=' ' className="bg-white  rounded-lg shadow-md flex ">
                                <div>
                                    <img src={img1} alt="Description of" className="max-w-28 h-28 lg:h-full md:max-w-52    rounded-l-lg" />
                                </div>
                                <div className='p-3 md:p-5 lg:p-6 w-full  bg-[#f2ecfd]  rounded-r-lg'>
                                    <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-1 md:mb-2 lg:mb-3">Courses</h2>
                                    <p className='text-xs md:text-sm lg::text-sm'>Self-help courses on Options Trading with Quizzes!</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}