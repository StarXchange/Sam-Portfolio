import { HERO_CONTENT } from "../index"; // Ensure correct import
import SamProfilePic from "../assets/SamProfilePic.png"; // Ensure file exists
import {motion} from "motion/react";
import CV from "../assets/CV.pdf"


const container = (delay) => (
  {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x:0,
      opacity: 1,
      transition:{ duration:0.5, delay: delay },
    },
  }
);

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-row items-center sm:flex-col md:flex-col lg:items-start overflow-auto">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.h1 
              
              variants={container(0)}
              initial="hidden"
              animate="visible"
              
            className="pb-8 text-4xl font-bold tracking-tight lg:mt-16 lg:text-6xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-[30px]">
              George Samuel
            </motion.h1>
            <motion.span 
             variants={container(0.5)}
             initial="hidden"
             animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p 
             variants={container(1)}
             initial="hidden"
             animate="visible"
            className="my-4 max-w-xl py-4 text-sm lg:text-base font-semibold tracking-tighter text-black text-wrap">
              {HERO_CONTENT}
            </motion.p>
            <div className="flex justify-center items-center">
              <button className="bg-slate-700 px-6 py-2 rounded">
                <a href={CV} download={CV}>Download CV</a>
                </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img 
            initial={{ x: 100, opacity: 0}}
            animate={{ x:0, opacity:1 }}
            transition={{duration: 1, delay:1.2}}
            className="w-60 lg:w-60 rounded-full shadow-lg" src={SamProfilePic} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
