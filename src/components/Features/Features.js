import React from 'react'
import Title from '../Layouts/Title';
import Card from './Card';
import {AiOutlineAntDesign} from "react-icons/ai";
import {CgWebsite} from "react-icons/cg";
import { FaYoutube,FaVideo } from "react-icons/fa";
const Features = () => {
  return (
    <section id='features' className='w-full  py-20   border-b-[1px] border-b-black'>
      <Title title="Features" des="WHAT I DO" />
      <div className='grid grid-cols-3 gap-20'>
        <Card
          title="Web Development"
          des="I'm a web development enthusiast, and this is where I bring ideas to life. Dive into my portfolio to witness the websites I've built, each a unique blend of technology and design."
           icon={<CgWebsite />}
          
        />
        <Card
           title="Video Editor"
          des="Enter the world of visual storytelling through my lens as a video editor. With an eye for detail and a passion for narrative, I transform raw footage into captivating stories."
          icon={<FaVideo />}
        />
        <Card 
          title="UI Designer"
          des="Explore my UI design portfolio, where I create easy-to-use and good-looking digital stuff. I make websites look pretty and work well."
          icon={<AiOutlineAntDesign />}
        />
        <Card 
          title="Content Creator"
          des=" I'm a tech enthusiast who loves making cool tech stuff easy to understand. Check out my content where I break down tech topics in a simple and fun way. Join me on this tech adventure!"
          icon={<FaYoutube />}
        />
      </div>
    </section>
  )
}

export default Features;