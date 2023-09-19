import React, { useState } from 'react'
import Title from '../Layouts/Title';

import Education from './Education';
import Skills from './Skills';
// import Achievement from './Achievement';
import Experience from './experience';
const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  // const [achievementData, setAchievementData] = useState(false);

  return (
    <section id='resume' className='w-full  py-16   border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title
          title="1+ YEARS OF EXPERIENCE"
          des="My Resume"
        />
      </div>
      <div >
        <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          <li onClick={() =>
            setEducationData(true) &
            // setAchievementData(false) &
            setExperienceData(false) &
            setSkillsData(false)
          } className={`${educationData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Education</li>
          <li onClick={() =>
            setEducationData(false) &
            // setAchievementData(false) &
            setExperienceData(false) &
            setSkillsData(true)
          } className={`${skillsData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Professional Skills</li>
          <li onClick={() =>
            setEducationData(false) &
            // setAchievementData(false) &
            setExperienceData(true) &
            setSkillsData(false)
          } className={`${experienceData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Download Resume</li>
          {/* <li onClick={() =>
            setEducationData(false) &
            setAchievementData(true) &
            setExperienceData(false) &
            setSkillsData(false)
          } className={`${achievementData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Achievements</li> */}
        </ul>
      </div>
      {
        educationData && <Education />
      }
      {
        skillsData && <Skills />
      }
      {
        experienceData && <Experience />
      }
      {/* {
        achievementData && <Achievement />
      } */}
      {/* <Education />
      <Skills />
      <Achievement />
      <Experience /> */}
    </section>
  )
}

export default Resume;