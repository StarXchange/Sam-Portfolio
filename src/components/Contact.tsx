import { motion } from "motion/react";
import { CONTACT } from "../index";

const Contact = () => {
  const itemProps = {
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: -100 },
    transition: { duration: 0.5 },
    className: "my-4 text-black font-bold",
  };

  return (
    <div className="pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 1.5 }}
        className="bg-gradient-to-r text-purple-900 bg-clip-text text-2xl lg:text-4xl tracking-tight text-center my-20 mt-20 font-bold"
      >
        Get In Touch
      </motion.h1>

      <div className="text-center tracking-tighter">
        <motion.p {...itemProps}>{CONTACT.location}</motion.p>
        <motion.p {...itemProps}>
          <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
        </motion.p>
        <motion.p {...itemProps}>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
