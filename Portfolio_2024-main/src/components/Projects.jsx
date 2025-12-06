
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Data from '../assets/Data.js'; // your array with {title, image, Description, technologies, githubLink}

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 22 } },
};

const Projects = () => {
  return (
    <>
      {/* Header */}
      <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl font-bold">
          <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tight animate-gradient">
            PROJECTS
          </span>
        </h2>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {Data.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="
              relative overflow-hidden rounded-xl
              bg-gradient-to-br from-white/[0.05] to-white/[0.02]
              backdrop-blur-md
              border border-white/10
              shadow-lg hover:shadow-2xl
              ring-1 ring-white/10 hover:ring-purple-500/30
              p-6
            "
          >
            {/* Accent Glow */}
            <div
              aria-hidden
              className="absolute -z-10 inset-0 rounded-xl"
              style={{
                background:
                  'radial-gradient(200px 140px at 20% 10%, rgba(168,85,247,0.15), transparent 60%)',
              }}
            />

            <div className="lg:flex lg:justify-start lg:items-start gap-6">
              {/* Image Container */}
              <div className="lg:w-1/4 flex justify-center lg:justify-start">
                <div className="relative group rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    width={220}
                    height={220}
                    alt={project.title}
                    className="mb-0 rounded-lg shadow-md object-cover aspect-square"
                  />

                  {/* Image Overlay */}
                  <div className="
                    absolute inset-0 rounded-lg
                    bg-black/60 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    flex flex-col items-center justify-center
                  ">
                    <h3 className="text-white text-md font-bold">{project.title}</h3>
                    <p className="text-white/80 text-xs mt-2 text-center px-3">
                      {Array.isArray(project.technologies)
                        ? project.technologies.join(', ')
                        : String(project.technologies)}
                    </p>
                  </div>

                  {/* Subtle gradient border on hover */}
                  <span className="
                    pointer-events-none absolute inset-0 rounded-lg
                    border border-transparent group-hover:border-purple-500/50
                    transition-colors duration-300
                  " />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/4 lg:pl-2">
                {/* Title + tiny ribbon */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-600/30 text-purple-200 border border-purple-400/40">
                    Featured
                  </span>
                </div>

                <p className="mb-4 text-neutral-300 leading-relaxed">
                  {project.Description}
                </p>

                {/* Tech Tags */}
                <div className="mb-4">
                  <strong className="text-white">Technologies Used:</strong>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {Array.isArray(project.technologies) &&
                      project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="
                            inline-flex items-center
                            rounded-full bg-neutral-800/60
                            px-2.5 py-1 text-xs font-medium text-purple-200
                            shadow-sm hover:shadow-purple-500/40
                            ring-1 ring-white/10 hover:ring-purple-400/40
                            transition-all duration-200 hover:scale-[1.03]
                          "
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-2 flex items-center gap-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="
                        inline-flex items-center gap-2
                        bg-purple-600 hover:bg-purple-700
                        text-white font-semibold py-2 px-4 rounded-lg
                        transition-all duration-300 transform hover:scale-105
                        shadow-lg hover:shadow-purple-500/40
                        focus:outline-none focus:ring-2 focus:ring-purple-400
                      "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-lg" />
                      View on GitHub
                    </a>
                  )}

                  {/* Optional: Live Demo button if you add project.liveDemo */}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="
                        inline-flex items-center gap-2
                        bg-neutral-800 hover:bg-neutral-700
                        text-white font-semibold py-2 px-4 rounded-lg
                        transition-all duration-300 transform hover:scale-105
                        shadow-md hover:shadow-white/10
                        focus:outline-none focus:ring-2 focus:ring-white/20
                      "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
