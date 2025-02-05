import portfolio from "./assets/portfolio.png";
import ecommerce from "./assets/ecommerce.png"
import school from "./assets/school.png"

 
export const HERO_CONTENT = 'I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With more than a year of hands-on experience, I have honed my skills in front-end technologies like React and Nextjs, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.';

 const ABOUT_TEXT = 'I am a dedicated and versatile full stack developer with a passion for creating efficient and user0friendly web application. With over a year of professional experience I have worked with varieties of technologies including React, Next.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, i enjoy staying active, exploring new technologies , and contributing to open-source projects.';

 export {ABOUT_TEXT};

 const EXPERIENCE = [
    {
        year: "2021 - Present",
        role: "Full Stack Developer",
        company: "Tech Innovators Inc.",
        description: "Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions. Designed and implemented RESTful APIs and integrated third-party services.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "AWS", "Docker"],
},


]

export { EXPERIENCE };


const PROJECTS = [
        {
          title: "Portfolio Website",
          image: portfolio,
          description: "A modern and visually appealing portfolio website showcasing my projects, skills, and experience in web development. Built using React, Tailwind CSS, and Vite, it provides a seamless user experience with smooth animations and responsive design. Explore my work, learn about my expertise, and connect with me for collaboration opportunities.",
          technologies: ["React", "Tailwind CSS", "Vite", "Framer-Motion"],
        },
        {
          title: "E-Commerce Platform",
          image: ecommerce,
          description: "A sleek and fully responsive eCommerce website designed to provide a seamless shopping experience. Built with modern web technologies, it features an intuitive user interface, secure payment integration, and smooth navigation. Customers can browse products, add items to their cart, and complete purchases effortlessly. Optimized for speed and mobile-friendliness, this platform ensures a hassle-free online shopping experience.",
          technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
        },
        {
          title: "Academic School Project",
          image: school,
          description:"A dynamic and user-friendly school website designed to provide students, parents, and staff with easy access to important information. It features an interactive interface with sections for announcements, events, academic programs, and faculty details. The website ensures seamless communication through integrated contact forms and portals for students and teachers. Built with modern web technologies, it is fully responsive and optimized for a smooth browsing experience on all devices.",
          technologies: ["React", "Bootstrap", "NodeJs","MongoDB"]
        }
       
      ];
      
      export { PROJECTS }; // Export the projects;
      


      const contacts = [
        {
        
          email: "sammygeorge385@gmail.com",
          phone: "090",
          address: "123 Main St, New York, NY",
          company: "Tech Solutions",
          position: "Software Engineer",
        },
]