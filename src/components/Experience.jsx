import {React} from 'react'
import {motion} from "motion/react";

const Experience = () => {
  // Experience data based on the CV
  const EXPERIENCE = [
    {
      year: "January 2025 - Present",
      role: "Software Developer",
      company: "GIBSLIFE",
      companyLink: null,
      description: "Designed, developed and deployed full-stack insurance websites for multiple insurance companies including Sterling Assurance, Universal Assurance, ForteLife Insurance, NSIA, and Staco Insurance. Built responsive front-end interfaces using React and JavaScript, ensuring optimal performance across all devices and browsers. Utilized SQL Database for database management, designing efficient schemas to handle complex insurance data structures. Collaborated with design teams and stakeholders to translate requirements into scalable, user-friendly applications. Deployed and maintained applications on cloud platforms (AWS, Azure), ensuring 99% uptime and optimal performance. Optimized website performance and user experience, resulting in improved client engagement and retention.",
      technologies: ["React", "JavaScript", "SQL", "AWS", "Azure", "RESTful APIs"]
    },
    {
      year: "December 2024",
      role: "E-Commerce Developer",
      company: "Essence of Style",
      companyLink: "https://essence-of-style.onrender.com",
      description: "Designed and developed a responsive and user-friendly frontend for an eCommerce platform using HTML5, TailwindCSS, JavaScript, and React.js. Collaborated with UX/UI designers to implement visually appealing and intuitive designs, ensuring a seamless user experience. Optimized website performance by implementing lazy loading, code splitting, and browser caching, resulting in significant improvement in loading speed. Worked closely with backend developers to ensure efficient integration of frontend features with server-side functionalities. Integrated APIs for real-time data handling, including product catalogs, search functionality, and user accounts.",
      technologies: ["HTML5", "TailwindCSS", "JavaScript", "React.js", "API Integration"]
    },
    {
      year: "February - May 2026",
      role: "Full-Stack Developer",
      company: "Deela E-Commerce Platform",
      companyLink: "https://deela-frontend.onrender.com",
      description: "Built a complete full-stack e-commerce website from scratch including both frontend and backend development. Designed and implemented responsive user interfaces using React.js and TailwindCSS for optimal shopping experience. Developed RESTful APIs using Node.js and Express.js for product management, user authentication, shopping cart, and order processing. Created and managed MongoDB database schemas for products, users, orders, and reviews. Implemented secure user authentication and authorization using JWT and bcrypt. Integrated payment gateway for seamless checkout process. Built an admin dashboard for product inventory management, order tracking, and user analytics. Deployed the application on cloud infrastructure ensuring scalability and performance.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "JWT", "RESTful APIs", "Payment Gateway Integration"]
    },
    {
      year: "October - December 2024",
      role: "Full-Stack Developer (Academic Project)",
      company: "King Primary School",
      companyLink: null,
      description: "Designed and developed a full-stack school website platform using HTML, CSS, JavaScript, and MongoDB. Implemented responsive design using Bootstrap, ensuring accessibility across all device sizes. Created database schemas for student information, course management, and administrative records.",
      technologies: ["HTML", "CSS", "JavaScript", "MongoDB", "Bootstrap"]
    }
  ];

  return (
    <div className="border-neutral-800 pb-4 mb-5">
        <motion.h1 
          whileInView={{opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: -100}}
          transition={{duration: 1.5}}   
        className="bg-gradient-to-r text-purple-900 bg-clip-text text-2xl lg:text-4xl tracking-tight text-center my-20 mt-20 font-bold">Experience</motion.h1>
        <div>
            {EXPERIENCE.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center font-semibold tracking-tighter text-black text-wrap ">
                    <motion.div 
                    whileInView={{ opacity:1, x:0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4">
                   <p className="mb-2 text-sm text-black font-semibold tracking-tighter text-wrap">{experience.year}</p>
                    </motion.div>

                    <motion.div 
                    whileInView={{ opacity:1, x:0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold text-[20px]">
                      {experience.role} - {""}
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
                        <span className="text-purple-500">
                          {experience.company}
                        </span>
                      )}
                    </h6>
                    <p className="mb-4 text-sm font-normal leading-relaxed">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <span key={index} className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">{tech}</span>
                      ))}
                    </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience