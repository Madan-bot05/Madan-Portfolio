import React from 'react'
import { EDUCATION } from '../constants'

const Education = () => {
  return (
    <div className='py-9 border-b border-neutral-900 ' id='education'>
        <h2 className='mb-4 text-center text-3xl font-semibold'>Education</h2>
        {EDUCATION.map((edu,index)=>(
            <div key={index} className='text-center mb-6 p-10'>
                <h3 className='text-xl font-semibold'>{edu.degree}</h3>
                <p className='text-lg'>{edu.institution}</p>
                <p className='text-sm text-stone-300'>{edu.duration}</p>
                <p className='mt-2'>{edu.description}</p>
            </div>
        ))}
        
    </div>
  )
}

export default Education