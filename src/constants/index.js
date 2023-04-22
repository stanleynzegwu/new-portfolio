import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nextjs,
    nodejs,
    mongodb,
    git,
    figma,
    realsplash,
    quizzical,
    webDev,
    backendd,
    frontend,
    realsplashlogo,
    portfolio
  } from "../asset";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Creative",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Tailwnd CSS",
      icon: tailwind,
    },

    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Starbucks",
      icon: frontend,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Designing and implementing user interfaces using HTML/CSS/JavaScript and various front-end frameworks such as React",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Optimizing web applications for search engine optimization (SEO) by ensuring that they are well-structured and use appropriate meta tags and descriptions.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Tesla",
      icon: backendd,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Designing and implementing server-side APIs and web services using languages like Node.js.",
        "Working with front-end developers to integrate front-end components with back-end services and APIs.",
        "Testing and debugging server-side components to ensure they function as intended.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: webDev,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications, from the server-side to client-side.",
        "Integrating front-end web applications with back-end services and APIs.",
        "Collaborating with other developers to new features and functionality.",
        "Staying up-to-date with emerging trends and technologies in web development.",
        "Managing the deployment and hosting of web applications."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Stanley does.",
      name: "Chuks Kingsley",
      designation: "CEO",
      company: "RealSplash",
      image: realsplashlogo,
    },
  ];
  
  const projects = [
    {
      name: "RealSplash",
      description:
        "A web-based real estate platform that enables users to purchase and sell properties conveniently. Additionally, the platform provides building painting services, allowing users to easily request and hire professional painters.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "nodemailer",
          color: "text-fuchsia-400",
        },
        {
          name: "OpenAI's Text-Davinci-003 model",
          color: "text-lime-300",
        },
      ],
      image: realsplash,
      source_code_link: "https://github.com/stanleynzegwu/Realtor",
      live_site: "https://realsplash.cyclic.app/",
    },
    {
      name: "Quizzical",
      description:
        "Quiz WebApp that access trivia questions from the Open Trivia Database API and score players based on their answers. The player have multiple game options to choose from - the number of questions, category, and difficulty or the default option if non of the options was selected.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css 3",
          color: "pink-text-gradient",
        },
        {
          name: "open Trivia API",
          color: "text-fuchsia-400",
        },
      ],
      image: quizzical,
      source_code_link: "https://github.com/stanleynzegwu/Quizzical",
      live_site: "https://quizzical-p.netlify.app/",
    },
    {
      name: "Portfolio",
      description:
        "Portfolio web app that showcases skills, works, and a contact section. Built with React and Sanity Datastore, which is a Schemaless backend that lets you store and query JSON documents, and subscribe to real-time changes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "sanity datastore",
          color: "text-fuchsia-400",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/stanleynzegwu/my-portfolio",
      live_site: "https://nzegwu-stan.netlify.app/",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };