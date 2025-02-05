import React from 'react'
import {PROJECTS} from '../index';
import {motion} from "motion/react";


const Projects = () => {
  return (
    <div className='border-neutral-900 pb-4 '>
        <motion.h1 
        whileInView={{ opacity:1 , y: 0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 0.5}}
        className='bg-gradient-to-r  text-purple-900 bg-clip-text text-2xl lg:text-4xl tracking-tight text-center my-20 mt-20 font-bold'>Projects</motion.h1>
        <div>{PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x:-100}}
                transition={{duration: 1}}
                className="w-full lg:w-1/4">
            <img src={project.image}
            width={300}
            height={150}
            alt={project.title}
            className="mb-6 rounded" />
            </motion.div>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x:100}}
            transition={{duration: 1}}
            className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold text-black">{project.title}</h6>
            <p className="mb-4 text-black">{project.description}</p>
            {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
                    {tech}
                </span>
            ))}
            </motion.div>
            </div>
        ))}
        
            </div>
    </div>
  )
}

export default Projects