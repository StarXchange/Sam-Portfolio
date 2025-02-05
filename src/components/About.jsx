import React from "react";
import AboutImg from "../assets/About.png";
import { ABOUT_TEXT } from "../index";
import {motion} from "motion/react";

const About = () => {
  return (
    <div className="  pb-4 mx-auto px-4 max-w-6xl">
      <h1 className="bg-gradient-to-r  text-purple-900 bg-clip-text text-2xl lg:text-4xl tracking-tight text-center my-10 mt-10 font-bold">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 ">
        {/* Image Section */}
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100 }}
        transition={{duration:0.5}}
        className=" lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={AboutImg} alt="aboutImg" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div 
        whileInView={{opacity:1, x: 0}}
        initial={{opacity:0, x: 100 }}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-semibold tracking-tighter text-black text-wrap">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
