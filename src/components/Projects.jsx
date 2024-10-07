import React from 'react';
import Data from '../assets/Data.js';

const Projects = () => {
  return (
    <>
      <div className='border-b border-neutral-900 pb-4'>
        <h2 className="my-20 text-center text-4xl">
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent font-m">
            PROJECTS
          </span>
        </h2>
      </div>

      <div>
        {Data.map((project, index) => (
          <div key={index} className='mb-8 lg:flex lg:justify-center'>
            {/* Image Container */}
            <div className='lg:w-1/4 flex justify-center lg:justify-start'>
              <img 
                src={project.image} 
                width={200}
                height={200}
                alt={project.title}
                className='mb-6 rounded'
              />
            </div>

            {/* Text Content Container */}
            <div className='lg:w-3/4'>
              <h3 className='mb-2 font-semibold'>{project.title}</h3>
              <p className='mb-4 text-neutral-400'>{project.Description}</p>
              
              <div className='mb-4'>
                <strong>Technologies Used:</strong>
                <ul className='list-none ml-0'>
                  {project.technologies.map((tech, index) => (
                    <span 
                    key={index}
                    className='mr-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
                    >
                      {tech}
                    </span> 
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
