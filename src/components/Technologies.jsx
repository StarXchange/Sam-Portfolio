import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiRedux, 
  SiExpress, 
  SiGraphql, 
  SiGit, 
  SiGithub, 
  SiMysql 
} from "react-icons/si";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-neutral-800 pb-24 my-16">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 1.5 }}        
        className="bg-gradient-to-r text-purple-900 bg-clip-text text-2xl lg:text-4xl tracking-tight text-center my-20 mt-20 font-bold">
          Technologies & Tools
        </motion.h1>
        
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-6'>
            
            {/* Frontend Technologies */}
            <div className='w-full text-center mb-4'>
                <h3 className='text-purple-500 text-xl font-semibold mb-4'>Frontend</h3>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiReactjsLine className='text-7xl text-cyan-400' />
                    </motion.div>
                    <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiNextjsFill className='text-7xl text-white' />
                    </motion.div>
                    <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiTypescript className='text-7xl text-blue-600' />
                    </motion.div>
                    <motion.div variants={iconVariants(2.2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiJavascript className='text-7xl text-yellow-400' />
                    </motion.div>
                    <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiTailwindcss className='text-7xl text-teal-400' />
                    </motion.div>
                    <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiRedux className='text-7xl text-purple-600' />
                    </motion.div>
                </div>
            </div>

            {/* Backend Technologies */}
            <div className='w-full text-center mb-4 mt-8'>
                <h3 className='text-purple-500 text-xl font-semibold mb-4'>Backend</h3>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div variants={iconVariants(2.7)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaNodeJs className='text-7xl text-green-500' />
                    </motion.div>
                    <motion.div variants={iconVariants(3.3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiExpress className='text-7xl text-white' />
                    </motion.div>
                    <motion.div variants={iconVariants(2.9)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiGraphql className='text-7xl text-pink-500' />
                    </motion.div>
                </div>
            </div>

            {/* Databases */}
            <div className='w-full text-center mb-4 mt-8'>
                <h3 className='text-purple-500 text-xl font-semibold mb-4'>Databases</h3>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <DiMongodb className='text-7xl text-green-500' />
                    </motion.div>
                    <motion.div variants={iconVariants(3.8)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiMysql className='text-7xl text-blue-500' />
                    </motion.div>
                </div>
            </div>

         

            {/* Version Control */}
            <div className='w-full text-center mb-4 mt-8'>
                <h3 className='text-purple-500 text-xl font-semibold mb-4'>Version Control & Tools</h3>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiGit className='text-7xl text-orange-600' />
                    </motion.div>
                    <motion.div variants={iconVariants(2.6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiGithub className='text-7xl text-white' />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Technologies