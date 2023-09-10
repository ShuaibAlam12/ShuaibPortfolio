import React from 'react'
import { motion } from 'framer-motion';
const Skills = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className='w-full flex gap-20'>
      <div className='w-1/2'>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
          <h2 className='text-4xl font-bold'>Development Skills</h2>
        </div>
        <div className='mt-14 w-full  '>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>C++</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-yellow-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>90%</span>
              </motion.span>
            </span>
          </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Html5</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-green-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>90%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>CSS</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-yellow-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>85%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Javascript</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>80%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>ReactJs</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-yellow-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>95%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>NodeJs</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>70%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Express</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-yellow-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>70%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>MongoDB</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>90%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>MYSQL</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-green-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>70%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>GitHub</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-yellow-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>70%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>



{/* Design Skills */}
      <div className='w-1/2'>
        <div className='py-12 font-titleFont flex flex-col gap-4 '>
          <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
          <h2 className='text-4xl font-bold'>Design Skills</h2>
        </div>
        <div className='mt-14 w-full flex flex-col gap-6'>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Canva</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>90%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Photoshop</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-yellow-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>70%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Figma</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-green-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>65%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Premier Pro</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
              initial={{x:"-100%",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:0.5,delay:0.5}}
               className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                    to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>85%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills;