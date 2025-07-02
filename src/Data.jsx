import flip from "../src/assets/FLIP-AND-MATCH.gif";
import carousel from "../src/assets/IMAGE-CAROUSEL.gif";
import quote from "../src/assets/QUOTE-GENERATOR.gif";
import tic from "../src/assets/TIC-TAC-TOE.gif";
import ai from "../src/assets/ai.gif";
export const t_skills = [
  {
    id: 1,
    name: "HTML5",
    description:
      "Deep understanding of semantic markup and web standards, enabling scalable, accessible, and SEO-optimized layouts that form the backbone of robust frontend architectures.",
    link: "https://drive.google.com/file/d/1Zuu7s7FloMea3zAogdZrQcueiUYD6tup/view?usp=drive_link",
  },

  {
    id: 2,
    name: "CSS3",
    description:
      "Well-versed in translating complex UI designs into pixel-perfect layouts, leveraging Flexbox, Grid, and custom animations to create responsive, cross-browser compatible interfaces.",
    link: "https://drive.google.com/file/d/1Pc3vWzumSqhvVrTbVnBw5aaCMAAeD7mz/view?usp=drive_link",
  },

  {
    id: 3,
    name: "JavaScript (ES6+)",
    description:
      "Engineered real-time, interactive interfaces with asynchronous data handling, modular code structure, and precise event-driven logic for scalable web applications.",
    link: "https://drive.google.com/file/d/103DhFtYPXQYGdpkHu7YpsOZgrFAJT2lj/view?usp=drive_link",
  },

  {
    id: 4,
    name: "React",
    description:
      "Engineer scalable, component-based interfaces using hooks, custom logic, and clean state management; confidently integrate third-party libraries like React Hook Form, TinyMCE, React Router and many more to handle complex forms, rich text editing, UI animations, and seamless routing with precision.",
    link: "https://drive.google.com/file/d/1G6hHKMFgAYglyJ9KR2HoKknRK6KD3Wni/view?usp=drive_link",
  },

  {
    id: 5,
    name: "Git & Github",
    description:
      "Drive clean, maintainable codebases with disciplined version control, strategic branching, and efficient collaboration through pull requests, reviews, and issue tracking.",
  },

  {
    id: 6,
    name: "Tailwind CSS",
    description:
      "Currently learning and applying utility-first styling to build responsive layouts and streamline UI development with consistent, scalable design patterns.",
  },
  {
    id: 7,
    name: "API Integration & Backend Services",
    description:
      "Fluent in working with Fetch API to integrate RESTful services through clean, asynchronous logic. Actively using Appwrite to handle authentication, database management, and serverless backend operations within modern web applications.",
  },
];
export const projects = [
  {
    id: 1,
    link: "https://flip-and-match-seven.vercel.app/",
    img: flip,
    category: "Development",
    title: "FLIP & MATCH",
    description:
      "An interactive 4x4 memory card game featuring randomized symbol pairs, real-time match detection, and animated flip logic. Implements a robust game loop with auto-restart functionality and optimized shuffle using the Fisher-Yates algorithm.",
  },
  {
    id: 2,
    img: tic,
    link: "https://tic-tac-toe-two-mocha-15.vercel.app/",
    category: "Development",
    title: "TIC-TAC-TOE",
    description:
      "A two-player Tic Tac Toe game with real-time turn switching, comprehensive win/draw detection, and instant reset capability. Features a clean layout built with CSS Grid and Flexbox, paired with clear and maintainable JavaScript logic.",
  },
  {
    id: 3,
    img: ai,
    link: "https://github.com/ParthAhuja4/CAMPUS-AI-HACKATHON-PROJECT",
    category: "Hackathon",
    title: "Campus AI",
    description:
      "An AI-driven, full-stack campus automation system integrating facial recognition-based attendance, geofencing, smart scheduling, and a student-run marketplace — all connected through a real-time Firebase backend. From automatic absentee detection and camera-enabled check-ins to interactive timetables and localized commerce, CAMPUS-PULSE offers a modular, scalable, and intuitive solution for smart campus ecosystems.",
  },
  {
    id: 4,
    img: carousel,
    link: "hhttps://image-carousel-lake.vercel.app/",
    category: "Development",
    title: "Image Carousel",
    description:
      "A fully responsive image slider with smooth, translateX-based transitions and modular indexing for infinite looping. Built with Flexbox and clean JavaScript architecture to ensure seamless user interaction and easy scalability.",
  },
  {
    id: 5,
    img: quote,
    link: "https://github.com/ParthAhuja4/VANILLA_JS_PROJECTS",
    category: "Development",
    title: "Quote Generator",
    description:
      "A dynamic quote generator that integrates with a live API to fetch and display quotes with animated transitions and tagging. Includes graceful error handling, fade-in effects, and modular logic for a smooth, consistent user experience.",
  },
];

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Skills",
    path: "skill",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Contact",
    path: "contact",
  },
];
