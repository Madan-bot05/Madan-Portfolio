import React from 'react'
import { RiJavaLine, RiReactjsLine } from 'react-icons/ri'
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { LiaDocker } from "react-icons/lia";
import { FaGitAlt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl '>Sk<span className='text-gray-300'>i</span><span className='text-gray-500'>lls</span></h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-transparent p-4'>
                <RiReactjsLine className='text-7xl text-cyan-700'/>
            </div>
            <div className='rounded-2xl border-4 border-transparent p-4'>
                <RiJavaLine className='text-7xl text-red-800'/>
            </div>
            <div className='rounded-2xl border-4 border-transparent p-4'>
                <BiLogoSpringBoot  className='text-7xl text-green-600'/>
            </div>
            <div className='rounded-2xl border-4 border-transparent p-4'>
                < GrMysql className='text-7xl text-cyan-800'/>
            </div>
            <div className='rounded-2xl border-4 border-transparent p-4'>
                <LiaDocker className='text-7xl text-cyan-500'/>
            </div>
            <div className='rounded-2xl border-4 border-transparent p-4'>
                <FaGitAlt className='text-7xl text-red-800'/>
            </div>
            <div className='rounded-2xl border-4 border-transparent p-4'>
                < SiJavascript className='text-7xl text-yellow-500'/>
            </div>
            <div className='rounded-2xl border-4 border-transparent'>
                <SiKubernetes className='text-7xl text-blue-500'/>
            </div>
        </div>
        
    </div>
  )
}

export default Tech