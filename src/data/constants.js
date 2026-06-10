import portfolioImg from "../assets/portfolio.png";


// ✅ BIO (YOUR IDENTITY)
export const Bio = {
  name: "Abubakar Mohammed",
  roles: [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer"
  ],
  description:
    "I am a Computer Science graduate based in Japan, focused on building modern web applications. I specialize in JavaScript, React, and Node.js, and I enjoy solving real-world problems through software development.",
  
  github: "https://github.com/abubakarmohaa2002-ux",
  resume: "#",
  linkedin: "https://www.linkedin.com/in/abubakarmohaa/",
};



// ✅ SKILLS (CLEAN & JOB-FOCUSED)
export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React Js" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" }
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node Js" },
      { name: "Express Js" }
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB" },
      { name: "Supabase" }
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Postman" }
    ],
  },
];



// ✅ PROJECTS (UPDATED WITH REAL APP)
export const projects = [

  {
    id: 1,
    title: "Task Manager App (MERN Stack)",
    image: portfolioImg, // 
    date: "2026",
    description:
      "A full-stack task management web application that allows users to register, log in, and manage tasks with full CRUD functionality. Includes JWT authentication, protected routes, and a responsive UI.",
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
    webapp: "https://task-manager-app-khzo.vercel.app/", // 🔥 replace with your real link
  },

  {
    id: 2,
    title: "Personal Portfolio Website",
    image: portfolioImg,
    date: "2026",
    description:
      "A modern and responsive personal portfolio website built with React, showcasing projects and technical skills.",
    tags: ["React", "Styled Components"],
    category: "web app",
    github: "#",
    webapp: "#",
  },
];



// ✅ EMPTY (WE ADD LATER)
export const experiences = [];
export const education = [];
export const TimeLineData = [];
