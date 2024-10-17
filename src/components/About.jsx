import React from 'react'
import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"
import { MdArrowOutward } from 'react-icons/md' // Import the icon

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
        <div className='flex flex-wrap'>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8 '>
            <div className='flex items-center justify-center'>
                <img className='rounded-2xl' src={aboutImg} alt="" />
            </div>
            </motion.div>

            <motion.div
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:0.5}}
              className='w-full lg:w-1/2 text-center relative'>
            <div className='flex justify-center lg:justify-start flex-col items-center lg:items-start'>
                <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                <div className="px-[14rem] w-full flex justify-start mt-auto">
                  <motion.a 
                               whileInView={{opacity:1,x:0}}
                               initial={{opacity:0,x:100}}
                               transition={{duration:0.5}}
                  href='https://drive.google.com/file/d/1kClOJ6YUlctZcjLVQb4r8YflT0XdER0J/view?usp=drive_link' target="_blank" rel="noopener noreferrer">
                  <button className='flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg'>
                    Resume
                    <MdArrowOutward className='ml-2' /> {/* Icon with margin */}
                  </button>
                  </motion.a>
                </div>
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
