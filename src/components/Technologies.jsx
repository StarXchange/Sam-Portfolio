import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";

import { FaNodeJs } from 'react-icons/fa';

import {motion} from "motion/react";

const iconVariants= (duration) => (
    {
        initial: {y: -10},
        animate: {
            y:[10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: 
                "reverse"
            },
        },
    }
);
const Technologies = () => {
  return (
    <div className= "border-neutral-800 pb-24 my-16">
        <motion.h1 
        whileInView={{opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100}}
        transition={{duration: 1.5}}        
        className="bg-gradient-to-r  text-purple-900 bg-clip-text text-2xl lg:text-4xl tracking-tight text-center my-20 mt-20 font-bold">Technologies</motion.h1>
        <motion.div 
        whileInView={{ opacity:1, x:0 }}
        initial={{ opacity: 0, x: -100}}
        transition= {{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400' />

            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                < RiNextjsFill className='text-7xl bg-black' />

            </motion.div >
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMongodb className='text-7xl text-green-400' />

            </motion.div>
            
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-400' />

            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies