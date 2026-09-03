import portfolioImg from "../assets/portfolio.png";
import taskManagerImg from "../assets/task-manager.png";


// ✅ BIO (YOUR IDENTITY)
export const Bio = {
  name: "Abubakar Mohammed Bakar",
  roles: [
   "Junior Node.js Backend Developer",
   "Junior Full-Stack Developer",
   "Computer Science Graduate"
  ],
  description:
    "Computer Science graduate based in Beppu, Japan, building web applications with JavaScript, React, Node.js, Express, and MongoDB. I am seeking a junior backend or full-stack position where I can contribute and continue developing practical software engineering skills.",
  
  github: "https://github.com/abubakarmohaa2002-ux",
  linkedin: "https://www.linkedin.com/in/abubakarmohaa/",
};



// ✅ SKILLS (CLEAN & JOB-FOCUSED)
export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "Styled Components" }
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "JWT Authentication" }
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB" }
    ],
  },
  {
    title: "Tools and Deployment",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Render" }
    ],
  },
];



// ✅ PROJECTS (UPDATED WITH REAL APP)
export const projects = [

  {
    id: 1,
    title: "Task Manager App (MERN Stack)",
    image: taskManagerImg,
    date: "2026",
    description:
      "A full-stack task management application with user registration, login, JWT-protected routes, and user-specific task CRUD. Backend ownership checks prevent users from updating or deleting another user's tasks.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    category: "web app",
    github: "https://github.com/abubakarmohaa2002-ux/task-manager-app",
    webapp: "https://task-manager-app-z7ze.vercel.app/",
  },

  {
    id: 2,
    title: "Personal Portfolio Website",
    image: portfolioImg,
    date: "2026",
    description:
      "A personal portfolio built with React and styled-components to present my projects, verified technical skills, and contact information.",
    tags: ["React", "Styled Components"],
    category: "web app",
    github: "https://github.com/abubakarmohaa2002-ux/portfolio",
    webapp: "https://portfolio-xi-henna-dvqynfrv2h.vercel.app/",
  },
];



// ✅ EMPTY (WE ADD LATER)
export const experiences = [];
export const education = [];
export const TimeLineData = [];
