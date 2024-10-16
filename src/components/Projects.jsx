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

      <div className='space-y-8'>
        {Data.map((project, index) => (
          <div key={index} className='bg-neutral-900 p-6 rounded-lg shadow-lg'>
            <div className='lg:flex lg:justify-start'>
              
              {/* Image Container */}
              <div className='lg:w-1/4 flex justify-center lg:justify-start'>
                <img 
                  src={project.image} 
                  width={200}
                  height={200}
                  alt={project.title}
                  className='mb-6 rounded shadow-md'
                />
              </div>

              {/* Text Content Container */}
              <div className='lg:w-3/4 lg:pl-6'>
                <h3 className='mb-2 text-lg font-semibold text-white'>{project.title}</h3>
                <p className='mb-4 text-neutral-400'>{project.Description}</p>

                <div className='mb-4'>
                  <strong className='text-white'>Technologies Used:</strong>
                  <ul className='list-none ml-0'>
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className='mr-2 inline-block rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-300'
                      >
                        {tech}
                      </span> 
                    ))}
                  </ul>
                </div>

                {/* GitHub Link Button */}
                <a
                  href={project.githubLink} // Ensure each project has the correct link
                  className='inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
