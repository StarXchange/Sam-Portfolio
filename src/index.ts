import portfolio from "./assets/portfolio.png";
import ecommerce from "./assets/ecommerce.png";
import school from "./assets/school.png";

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  companyLink: string | null;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  image?: string;
  link?: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  detail: string;
}

export interface Certification {
  title: string;
  issuer: string;
  detail: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const HERO_CONTENT =
  "I am a results-driven Software Engineer with 3+ years of experience designing, building and deploying full-stack web applications for the insurance and e-commerce sectors. I specialise in responsive React and TypeScript interfaces, backed by Node.js and Express.js services and SQL and MongoDB databases. I deploy and maintain applications on AWS and Azure with about 99% uptime, and my Philosophy background sharpens my analytical thinking and communication.";

export const ABOUT_TEXT =
  "I am a Software Engineer and Cloud Engineer (AWS & Azure) based in Lagos, Nigeria, with a B.A. in Philosophy that sharpened how I analyse problems and communicate solutions. At Intteck Limited I design, build and deploy full-stack insurance platforms for companies such as Cornerstone Insurance, Sterling Assurance, Universal Assurance, ForteLife Insurance, NSIA and Staco Insurance. I enjoy agile collaboration, performance optimisation and turning stakeholder requirements into scalable, user-friendly applications. I have completed my NYSC service and I am currently working towards the AWS Certified Solutions Architect – Associate certification.";

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: "January 2025 - Present",
    role: "Software Engineer",
    company: "Intteck Limited",
    companyLink: null,
    description:
      "Designed, developed and deployed full-stack insurance platforms for Cornerstone Insurance, Sterling Assurance, Universal Assurance, ForteLife Insurance, NSIA and Staco Insurance. Built responsive React and TypeScript interfaces that perform consistently across devices and browsers. Designed efficient SQL schemas to handle complex insurance data structures. Collaborated with designers and stakeholders to turn requirements into scalable, user-friendly applications. Deployed and maintained applications on AWS and Azure, ensuring about 99% uptime. Optimised website performance and user experience, improving client engagement and retention.",
    technologies: ["React", "TypeScript", "SQL", "AWS", "Azure", "RESTful APIs"],
  },
  {
    year: "February - May 2026",
    role: "Full-Stack Developer",
    company: "Deela E-Commerce App",
    companyLink: "https://deela-frontend.onrender.com",
    description:
      "Built a full-stack e-commerce application with an admin panel and secure authentication, deployed on Render. Developed RESTful APIs with Node.js and Express.js for product management, user authentication, cart and order processing, backed by MongoDB schemas for products, users and orders.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "JWT"],
  },
  {
    year: "December 2024",
    role: "E-Commerce Developer",
    company: "Essence of Style",
    companyLink: "https://essence-of-style.onrender.com",
    description:
      "Designed and developed a responsive frontend for an e-commerce platform using HTML5, TailwindCSS, JavaScript and React.js. Improved loading speed through lazy loading, code splitting and browser caching. Worked with backend developers to integrate frontend features with server-side functions, and integrated APIs for real-time product catalogues, search and user accounts.",
    technologies: ["HTML5", "TailwindCSS", "JavaScript", "React.js", "API Integration"],
  },
  {
    year: "October - December 2024",
    role: "Full-Stack Developer (Academic Project)",
    company: "King Primary School",
    companyLink: null,
    description:
      "Built a full-stack school website platform with HTML, CSS, JavaScript and MongoDB, using Bootstrap for responsive design across device sizes. Created database schemas for student information, course management and administrative records.",
    technologies: ["HTML", "CSS", "JavaScript", "MongoDB", "Bootstrap"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Insurance Platforms (Intteck Limited)",
    description:
      "Web platforms built and deployed for more than six insurance companies, covering responsive interfaces, SQL data design and cloud deployment on AWS and Azure.",
    technologies: ["React", "TypeScript", "SQL", "AWS", "Azure"],
  },
  {
    title: "Deela E-Commerce App",
    image: ecommerce,
    link: "https://deela-frontend.onrender.com",
    description:
      "A full-stack e-commerce application with an admin panel and secure authentication, deployed on Render. Customers can browse products, manage a cart and place orders, while admins manage inventory and orders.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "E-Commerce Platform (Essence of Style)",
    image: portfolio,
    link: "https://essence-of-style.onrender.com",
    description:
      "A responsive React storefront with lazy loading, code splitting and caching, plus an API-driven product catalogue, search and user accounts.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "API Integration"],
  },
  {
    title: "School Website (King Primary School)",
    image: school,
    description:
      "A responsive full-stack school website with MongoDB schemas for student, course and administrative records, built with Bootstrap for a consistent experience on every device size.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MongoDB"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    title: "B.A. Philosophy",
    institution: "Adekunle Ajasin University, Ondo State, Nigeria",
    detail: "Conferred: September 2024",
  },
  {
    title: "National Youth Service Corps (NYSC)",
    institution: "Lagos, Nigeria",
    detail: "Completed: June 2026",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Software Developer Bootcamp",
    issuer: "GOMYCODE",
    detail: "Certificate of Completion, January 2025",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    detail: "In progress",
  },
];

export const SKILLS: SkillGroup[] = [
  { category: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python"] },
  {
    category: "Frameworks & Tools",
    items: ["React.js", "Next.js", "Redux", "TailwindCSS", "Node.js", "Angular", "Express.js", "Git/GitHub"],
  },
  { category: "Databases", items: ["SQL", "MongoDB"] },
  { category: "Cloud", items: ["AWS", "Azure"] },
  { category: "APIs", items: ["RESTful API Development", "GraphQL", "API Integration"] },
  { category: "Performance", items: ["Lazy Loading", "Code Splitting", "Browser Caching", "Responsive Design"] },
];

export const CONTACT = {
  location: "Lagos, Nigeria",
  email: "sammygeorge385@gmail.com",
  phone: "09025338156",
  linkedin: "https://www.linkedin.com/in/samuel-george-3bb201330",
  github: "https://github.com/StarXchange",
};
