import { motion } from "motion/react";
import { CERTIFICATIONS, EDUCATION, SKILLS } from "../index";

const heading =
  "bg-gradient-to-r text-purple-900 bg-clip-text text-2xl lg:text-4xl tracking-tight text-center my-20 mt-20 font-bold";

const Qualifications = () => {
  return (
    <div className="pb-4 mb-5 mx-auto max-w-6xl text-black">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 1.5 }}
        className={heading}
      >
        Education & Certifications
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-4 text-xl font-semibold text-purple-500">Education</h3>
          {EDUCATION.map((item) => (
            <div key={item.title} className="mb-4">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm">{item.institution}</p>
              <p className="text-sm font-normal">{item.detail}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-4 text-xl font-semibold text-purple-500">Certifications</h3>
          {CERTIFICATIONS.map((item) => (
            <div key={item.title} className="mb-4">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm">{item.issuer}</p>
              <p className="text-sm font-normal">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <h2 className={heading}>Core Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <h3 className="mb-2 font-semibold text-purple-500">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualifications;
