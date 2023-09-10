import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaReact, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiHtml5, SiJavascript, SiNodedotjs, SiExpress } from "react-icons/si";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "UI Designer.", "Video Editor."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className='w-1/2 flex flex-col gap-20' >
      <div className='flex flex-col gap-5'>
        <h4 className='text-lg ffont-normal'>WELCOME TO MY WORLD!</h4>
        <h1 className='text-6xl font-bold text-white'>
          Hi, I'm {" "}
          <span className='text-designColor capitalize'>Shuaib Alam</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>
          a <span> {text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#FFFF00"
          />
        </h2>
        <p>I'm a full-stack web developer, turning ideas into stunning, user-friendly websites. Explore my work, and let's create your digital success story together!</p>
      </div>
      <div className='flex justify-between'>
        <div>
          <h2 className='flex mb-3'>FIND ME IN </h2>
          <div className='flex gap-5'>
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
            <a href='https://instagram.com/btwitsshuaib_?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'>
              <span className='bannerIcon'>
                <FaInstagram />
              </span>
            </a>

          </div>
        </div>
        <div>
          <h2 className='flex mb-3'>BEST SKILLS ON </h2>
          <div className='flex gap-5'>
            <a href='https://www.w3schools.com/REACT/DEFAULT.ASP' target='_blank'>
              <span className='bannerIcon'>
                <FaReact />
              </span>
            </a>
            <a href='https://www.w3schools.com/html/' target='_blank'>
              <span className='bannerIcon'>
                <SiHtml5 />
              </span>
            </a>
            <a href='https://www.w3schools.com/js/' target='_blank'>
              <span className='bannerIcon'>
                <SiJavascript />
              </span>
            </a>
            <a href='https://www.w3schools.com/nodejs/' target='_blank'>
              <span className='bannerIcon'>
                <SiNodedotjs />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBanner;