import React from 'react'
import {PROJECTS} from '../index';
import {motion} from "motion/react";

const Projects = () => {
  return (
    <div className='border-neutral-800 pb-4 mb-5'>
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 1.5 }}
        className='bg-gradient-to-r text-purple-900 bg-clip-text text-2xl lg:text-4xl tracking-tight text-center my-20 mt-20 font-bold'>Projects</motion.h1>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center font-semibold tracking-tighter text-black text-wrap">
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4">
                  <img 
                    src={project.image}
                    width={300}
                    height={150}
                    alt={project.title}
                    className="mb-6 rounded" 
                  />
                </motion.div>
                <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4">
                  <h6 className="mb-2 font-semibold text-[20px] text-black">{project.title}</h6>
                  <p className="mb-4 text-sm font-normal leading-relaxed text-black">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Projects