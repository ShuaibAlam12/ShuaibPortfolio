import React from 'react'
import logo from '../../assets/images/logo.png';
import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import Contacts from '../Contact/Contact';
const Footer = () => {
    return (
        <div className='w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols md:grid-cols-1  lgl:grid-cols-2 gap-4'>
            <div className='w-full flex flex-col gap-8 h-full '>
                <img className='w-32' src={logo} alt='LogoImage'>
                </img>
                <div className='flex gap-4'>
                    <a href="https://www.linkedin.com/in/mohd-shuaib-alam-9820ba1b1/" target="_blank">
                        <span className='bannerIcon'>
                            <FaLinkedinIn />
                        </span>
                    </a>
                    <a href='https://twitter.com/MohdShu46725241?t=lbNaA8q9w9nXTP66MZ1Y8g&s=09' target='_blank'>
                        <span className='bannerIcon'>
                            <FaTwitter />
                        </span>
                    </a>
                    <a href='https://github.com/ShuaibAlam12' target='_blankl'>
                        <span className='bannerIcon'>
                            <BsGithub />
                        </span>
                    </a>
                </div>
            </div>
            <div >
                <h3 className='text-xl uppercase text-designColor tracking-wider'>Quick Links</h3>
                <ul className='flex flex-col gap-4 font-titleFont font-medium  py-6 overflow-hidden'>
                    <li ><a href="https://www.linkedin.com/in/mohd-shuaib-alam-9820ba1b1/" target="_blank"><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>About<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></a></li>
                    <li ><a href='#projects'><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Portfolio<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></a></li>
                    <li ><a href='#contacts'><span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Contact<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></a></li>
                                      
                </ul>
            </div>
        </div>
    )
}

export default Footer;