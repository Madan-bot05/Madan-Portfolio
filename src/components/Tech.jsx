import React from 'react'
import { RiJavaLine, RiReactjsLine } from 'react-icons/ri'
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { LiaDocker } from "react-icons/lia";
import { FaGitAlt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Tech = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl '>Sk<span className='text-gray-300'>i</span><span className='text-gray-500'>lls</span></motion.h1>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-transparent p-4'>
                    <RiReactjsLine size={70} color='#00D8FF' />
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-transparent p-4'>
                    <RiJavaLine size={70} color='#FF0000' />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-transparent p-4'>
                    <BiLogoSpringBoot size={70} color='#6DB33F' />
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-transparent p-4'>
                    <GrMysql size={70} color='#00758F' />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-transparent p-4'>
                    <LiaDocker size={70} color='#2496ED' />
                </motion.div>
                <motion.div variants={iconVariants(1.2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-transparent p-4'>
                    <FaGitAlt size={70} color='#F1502F' />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-transparent p-4'>
                    <SiJavascript size={70} color='#F7DF1E' />
                </motion.div>
                <motion.div variants={iconVariants(1.8)} initial="initial" animate="animate" className='rounded-2xl border-4 border-transparent p-4'>
                    <SiKubernetes size={70} color='#326CE5' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Tech;
