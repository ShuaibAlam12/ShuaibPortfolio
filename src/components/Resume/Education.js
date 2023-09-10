import React from 'react'
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';
const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}className='w-full flex gap-20'>
    <div>
      <div className='py-12 font-titleFont flex flex-col gap-4'>
        <p className='text-sm text-designColor tracking-[4px]'>2005 - 2023</p>
        <h2 className='text-4xl foont-bold'>Education Qualification</h2>
      </div>
      <div className='mt-14 w-full  border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10 h-[1000px]'>
        <ResumeCard
          title="B Tech in Computer Science "
          subtitle="J K Institute Of Applied Physics and Technology,Prayagraj (2021 - 2025)"
          result="8.76/10"

          des=" My educational journey is focused on exploring the exciting world of computer science and technology." />
        <ResumeCard
          title="Intermediate in PCM "
          subtitle=" S B Senior Secondary Public School (2019 -2020)"
          result="92.4/100"
          des="I completed my Intermediate studies with a focus on Physics, Chemistry, and Mathematics (PCM) at S.B. Senior Secondary Public School in 2020."
        />
        <ResumeCard
          title="HighSchool (2017 -2018)"
          subtitle=" S B Senior Secondary Public School"
          result="83.4/100"
          des="This pivotal period marked the beginning of my academic journey, setting the stage for my subsequent studies and personal growth."
        />
      </div>
  </div>
  <div>
      <div className='py-12 font-titleFont flex flex-col gap-4'>
        <p className='text-sm text-designColor tracking-[4px]'>2023</p>
        <h2 className='text-4xl foont-bold'>Job Experience </h2>
      </div>
      <div className='mt-14 w-full  border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10 h-[1000px]'>
        <ResumeCard
          title="Web developer- Intern "
          subtitle="Code Alpha (September-2023)"
          result="Virtual"
          des=" This hands-on experience has honed my technical skills and teamwork, enabling me to thrive in the dynamic world of web development." />
        <ResumeCard
          title="Video Editor- Intern"
          subtitle=" Glexpace (Nov-2022  April-2023)"
          result="Online"
          des="As a Video Editor Intern at Glaxpace, I've gained practical experience, refining my video editing skills while contributing to engaging visual content production."
        />
      </div>
  </div>
    </motion.div>
  )
}

export default Education;