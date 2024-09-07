import React from 'react'
import logo from "../assets/Madan.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
// import { FaSquareXTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='mx-2 w-10 text-bold'  alt="" >M</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4'>
            <a href="https://github.com/Madan-bot05"><FaGithub className='cursor-pointer'/></a>
            <a href="https://www.linkedin.com/in/madan-mohan-das-897907236/"><FaLinkedin className='cursor-pointer'/></a>
            <a href="https://www.instagram.com/the_devil0508/"><FaInstagram className='cursor-pointer' /></a>
            
        </div>
    </nav>
  )
}

export default Navbar