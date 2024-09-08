import React from 'react';
import { PROJECTS } from "../constants";
import { MdArrowOutward } from 'react-icons/md';

const Projects = () => {
  return (
    <section className='pt-20 border-b border-neutral-900 ' id='project'>
      <h2 className='mb-8 text-center text-3xl lg:text-4xl'><span className='text-gray-600'>Pro</span><span className='text-gray-300'>j</span>ects</h2>
      {/* <div className='flex flex-wrap justify-center w-full lg:w-1/3 '> */}
      <div className='flex flex-wrap justify-center gap-5'>
        {PROJECTS.map((project) => {
          return (
            <div key={project.id} className='w-full md:w-1/2 lg:w-1/4 flex justify-center group relative overflow-hidden rounded-3xl'>
              <img 
                src={project.image} 
                alt={project.name} 
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' 
              />
              <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100'>
                <h3 className='mb-2 text-xl'>{project.name}</h3>
                <p className='mb-12 p-4 text-center'>{project.description}</p>
                <a 
                  href={project.githubLink} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300'
                >
                  <div className='flex items-center'>
                    <span>View On GitHub</span>
                    <MdArrowOutward className='ml-2'/>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
