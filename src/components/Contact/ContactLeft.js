import React from 'react'
import contactimg from '../../assets/images/contact/contactImg.png';
import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
const ContactLeft = () => {
  return (
    <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 
    rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
      <img
        src={contactimg}
        alt='ContactImage'
        className='w-full h-64 object-cover rounded-lg mb-3'>

      </img>
      <div className='flex flex-col gap-4' >
        <h3 className='text-3xl font-bold text-white'>Shuaib Alam</h3>
        <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
        <p className='text-base text-gray-400 tracking-wide'>Feel free to reach out and get in touch with me! Whether you have questions, want to collaborate, or simply want to connect.</p>
        <p className='text-base text-gray-400 flex items-center gap-2'>Phone:<span className='text-lightText'>+91 7054419952</span></p>
        <p className='text-base text-gray-400 flex items-center gap-2'>Email:<span className='text-lightText'>mohdshuaib.asahi@gmail.com</span></p>
      </div>
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

    </div>
  )
}

export default ContactLeft;