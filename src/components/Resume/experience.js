import React from 'react';
import { motion } from 'framer-motion';
import ResumePDF from '../../assets/images/MyResume.pdf';
const experience = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className='w-full flex gap-20'>
      <div className='w-full h-[100px] mt-40 content-center text-center'>
        <a href={ResumePDF} download="MyResume.pdf">
          <button class="bg-gray-200 hover:bg-designColor text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>Download</span>
          </button>
        </a>
      </div>
    </motion.div>
  )
}

export default experience;