import React from 'react';
import {motion} from 'framer-motion';
const Achievement = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}className='w-full flex gap-20' >Achievement</motion.div>
  )
}

export default Achievement;