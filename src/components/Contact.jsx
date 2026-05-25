import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className=" pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 1.5 }}
        className="bg-gradient-to-r  text-purple-900 bg-clip-text text-2xl lg:text-4xl tracking-tight text-center my-20 mt-20 font-bold"
      >
        Get In Touch
      </motion.h1>

      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="my-4 text-black font-bold">135,Borno way, Ebutte-Meta,LAGOS.</motion.p>
        <motion.p
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="my-4 text-black font-bold">08028360704, 09025338156 </motion.p>
        <a 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        href="#" className="font-bold text-black">sammygeorge385@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;
