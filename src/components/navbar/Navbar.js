import React, { useState } from 'react'
import logo from '../../assets/images/logo.png';
import { FiMenu } from "react-icons/fi";
import { navLinksdata } from '../constants';
import { BsGithub } from "react-icons/bs";
import { Link } from 'react-scroll';
import { MdClose } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);




    return (
        <div className='w-full sticky top-0 z-50 bg-bodyColor h-24 mx-auto font-titleFont flex justify-between items-center border-b-[1px] border-b-gray-600'>
            <div >
                <img src={logo} alt="logo" />
            </div>
            <div >
                <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 ">
                    {navLinksdata.map(({ _id, title, link }) => (
                        <li className='text-base font-normal text-grey-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key={_id}>
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >{title}</Link></li>
                    ))}
                </ul>
                <span onClick={() => setShowMenu(!showMenu)} className='text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'><FiMenu /> </span>
                {
                    showMenu && (
                        <div className='w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide'>
                            <div className='flex flex-col gap-8 py-2 relative'>
                                <div>
                                    <img className='w-32' src={logo} alt="logo" />
                                    <p className='text-sm text-gray-400 mt-2'>
                                        I'm a full-stack web developer, turning ideas into stunning, user-friendly websites. Explore my work, and let's create your digital success story together!
                                    </p>
                                </div>
                                <ul className='flex flex-col gap-4'>
                                    {
                                        navLinksdata.map((item) => (
                                            <li key={item._id} className='text-base font-normal text-grey-400 tracking-wide cursor-pointer hover:text-designColor duration-300'>
                                                <Link
                                                    onClick={() => setShowMenu(false)}
                                                    activeClass="active"
                                                    to={item.link}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                >{item.title}
                                                </Link></li>
                                        ))
                                    }
                                </ul>
                                <div className='flex flex-col gap-4'>
                                    <h2 className='text-base uppercase font-titleFont mb-4'>Find Me In</h2>
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
                                <span
                                    onClick={
                                        () => setShowMenu(false)}
                                    className='absolute top-4 right-4 text-gray-400 hover:text-designColor
                                duration-300 text-2xl cursor-pointer'>
                                    <MdClose />
                                </span>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;