import { motion } from "motion/react";
import { EXPERIENCE } from "../index";

const Experience = () => {
  return (
    <div className="border-neutral-800 pb-4 mb-5">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 1.5 }}
        className="bg-gradient-to-r text-purple-900 bg-clip-text text-2xl lg:text-4xl tracking-tight text-center my-20 mt-20 font-bold"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCE.map((experience) => (
          <div
            key={`${experience.company}-${experience.year}`}
            className="mb-8 flex flex-wrap lg:justify-center font-semibold tracking-tighter text-black text-wrap"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-black font-semibold tracking-tighter text-wrap">
                {experience.year}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-[20px]">
                {experience.role} -{" "}
                {experience.companyLink ? (
                  <a
                    href={experience.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-700 underline transition-colors duration-300 cursor-pointer"
                  >
                    {experience.company}
                  </a>
                ) : (
                  <span className="text-purple-500">{experience.company}</span>
                )}
              </h6>
              <p className="mb-4 text-sm font-normal leading-relaxed">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
