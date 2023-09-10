import React from 'react'
import logo from '../../assets/images/logo.png';
import { navLinksdata } from '../constants';
import { Link} from 'react-scroll';
const Navbar = () => {
    return (
        <div className='w-full sticky top-0 z-50 bg-bodyColor h-24 mx-auto font-titleFont flex justify-between items-center border-b-[1px] border-b-gray-600'>
            <div >
                <img src={logo} alt="logo" />
            </div>
            <div >
                <ul className="flex items-center gap-10 ">
                    {navLinksdata.map(({_id,title,link}) => (
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

            </div>
        </div>
    )
}

export default Navbar;