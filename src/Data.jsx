import flip from "../src/assets/FLIP-AND-MATCH.gif";
import carousel from "../src/assets/IMAGE-CAROUSEL.png";
import quote from "../src/assets/QUOTE-GENERATOR.gif";
import tic from "../src/assets/TIC-TAC-TOE.gif";
import ai from "../src/assets/ai.gif";
import vistyo from "../src/assets/vistyo.gif";
import tnmImg from "../src/assets/tnmImg.gif";
import koveImg from "../src/assets/koveImg.gif";
import helloDoctorImg from "../src/assets/helloDoctorImg.gif";
import meetlyImg from "../src/assets/meetly.png";
import authMicroserviceImg from "../src/assets/authMicroserviceImg.webp";
import graphqlTodoImg from "../src/assets/graphqlTodoImg.webp";
import gfgImg from "../src/assets/gfgImg.webp";
import adidasImg from "../src/assets/adidasImg.webp";

export const t_skills = [
  {
    id: 1,
    name: "Languages & Core",
    description:
      "Fluent in multi-paradigm programming (JavaScript ES6+, TypeScript, Python, Java, C++). Utilizing robust typing and object-oriented principles to build scalable applications and optimized algorithms.",
    link: "https://github.com/ParthAhuja4",
  },
  {
    id: 2,
    name: "Modern Frontend Frameworks",
    description:
      "Engineered performant, SEO-friendly web applications utilizing React.js and Next.js. Expert in advanced state management with Redux Toolkit and component-driven architecture.",
    link: "https://github.com/ParthAhuja4",
  },
  {
    id: 3,
    name: "UI/UX & Styling",
    description:
      "Crafting pixel-perfect, accessible interfaces leveraging HTML5/CSS3, Tailwind CSS, Material UI, and Shadcn/ui. Capable of integrating immersive 3D web graphics using Three.js.",
    link: "https://github.com/ParthAhuja4",
  },
  {
    id: 4,
    name: "Backend Services & APIs",
    description:
      "Designing and deploying secure server-side applications with Node.js and Express.js. Proficient in building and consuming RESTful APIs, GraphQL, and leveraging Serverless Compute.",
    link: "https://github.com/ParthAhuja4",
  },
  {
    id: 5,
    name: "Databases & Data Management",
    description:
      "Managing complex data ecosystems utilizing PostgreSQL, MongoDB, and SQL. Optimizing database queries with Prisma ORM and accelerating application performance using Redis caching.",
    link: "https://github.com/ParthAhuja4",
  },
  {
    id: 6,
    name: "Cloud, Architecture & Real-Time",
    description:
      "Architecting distributed Microservices and durable Event-Driven Architectures utilizing Inggest. Implementing real-time communication (WebSockets, WebRTC), message brokers (RabbitMQ), and containerizing applications with Docker.",
    link: "https://github.com/ParthAhuja4",
  },
  {
    id: 7,
    name: "Tools & CS Fundamentals",
    description:
      "Driving clean, maintainable codebases rooted in strong CS fundamentals (DSA, OOP). Ensuring collaborative efficiency through Git/GitHub version control and rigorous API testing with Postman.",
    link: "https://github.com/ParthAhuja4",
  },
  {
    id: 8,
    name: "AI & Machine Learning Integration",
    description:
      "Architecting context-aware SaaS platforms utilizing AI-driven features. Experienced in integrating real-time transcription agents, ML-based automation, and ensuring semantic query integrity for smart applications.",
    link: "https://github.com/ParthAhuja4",
  },
  {
    id: 9,
    name: "Payments & Monetization",
    description:
      "Implementing secure, production-grade payment gateways. Proficient in engineering idempotent transaction workflows, MoR (Merchant of Record) solutions, and managing webhook-driven subscription lifecycles.",
    link: "https://github.com/ParthAhuja4",
  },
];
export const projects = [
  {
    id: 8,
    img: meetlyImg,
    link: "https://parth-meetly.vercel.app",
    category: "Development",
    title: "Meetly - AI Conferencing SaaS",
    description:
      "A fault-tolerant consultation platform where AI is a first-class participant. Meetly unifies sub-100ms WebRTC video and global MoR monetization, relying on Inngest to orchestrate durable micro-workflows while autonomous AI agents join every call to instantly capture and synthesize zero-loss data.",
  },
  {
    id: 10,
    img: koveImg,
    link: "https://github.com/ParthAhuja4/Kove",
    category: "Development",
    title: "Kove- Scalable Messaging App",
    description:
      "A highly resilient, real-time communication platform built on a distributed microservices architecture. Utilizes Node.js and WebSockets, backed by RabbitMQ for asynchronous message brokering and Redis/MongoDB for low-latency state caching.",
  },
  {
    id: 9,
    img: tnmImg,
    link: "https://tnm-delta.vercel.app",
    category: "Industry",
    title: "Ads Analysis & Scheduling Tool",
    description:
      "A comprehensive B2B telemetry dashboard engineered for enterprise ad scheduling. Features a bespoke admin interface integrating real-time data visualization and embedded e-commerce analytics to drive high-level marketing decisions.",
  },
  {
    id: 1,
    link: "https://vistyo.vercel.app/",
    img: vistyo,
    category: "Development",
    title: "VISTYO - AI SAAS",
    description:
      "An AI-native SaaS platform architected to override algorithmic noise using backend-enforced PBAC, Cohere-powered semantic query filtering, and serverless business logic orchestration via Appwrite Functions. Engineered on React 19, Vite, and TailwindCSS, featuring Stripe Webhook integration for multi-tenant scalability and zero-trust client-side data gating.",
  },
  {
    id: 2,
    img: ai,
    link: "https://github.com/ParthAhuja4/CAMPUS-AI-HACKATHON-PROJECT",
    category: "Hackathon",
    title: "Campus AI",
    description:
      "A distributed campus automation ecosystem leveraging a real-time Firebase backend. Integrates ML-driven facial recognition for attendance, geofencing protocols, and a dynamic scheduling engine. Designed with a modular architecture to handle concurrent IoT data streams and localized e-commerce transactions seamlessly.",
  },
  {
    id: 12,
    img: helloDoctorImg,
    link: "https://github.com/ParthAhuja4/HelloDoctor",
    category: "Development",
    title: "HelloDoctor - Appointment Booking",
    description:
      "A production-grade healthcare orchestration system. Engineered to handle strict concurrency controls, stateless JWT-based authentication, and idempotent transactional workflows to ensure data integrity during payment and scheduling.",
  },
  {
    id: 7,
    img: adidasImg,
    link: "https://adidas-parth.vercel.app",
    category: "Development",
    title: "Adidas 3D Experience",
    description:
      "A spatial computing web application fusing Next.js with Three.js (WebGL) and GSAP. Architected for photorealistic 3D asset rendering with highly optimized draw calls and synchronized scroll-bound animations to deliver an elite, fluid e-commerce UX.",
  },
  {
    id: 13,
    img: authMicroserviceImg,
    link: "https://github.com/ParthAhuja4/AuthtenticationAuthorization-Microservice",
    category: "Development",
    title: "Auth Microservice",
    description:
      "A decoupled, scalable identity and access management (IAM) microservice. Built utilizing production-grade security practices (hashing, salting, stateless tokens) for seamless plug-and-play integration into distributed architectures.",
  },

  {
    id: 14,
    img: graphqlTodoImg,
    link: "https://github.com/ParthAhuja4/GraphQL-ToDo",
    category: "Development",
    title: "GraphQL Task Manager",
    description:
      "A strictly-typed, full-stack application leveraging GraphQL for precise payload fetching and reduced over-fetching. Integrates React, Express, and PostgreSQL via the Prisma ORM to ensure end-to-end type safety and optimized database mutations.",
  },

  {
    id: 11,
    img: gfgImg,
    link: "https://gfgadgips.netlify.app",
    category: "Development",
    title: "GFG ADGIPS Landing Page",
    description:
      "A high-octane React Single Page Application (SPA) optimized for sub-second Largest Contentful Paint (LCP). Incorporates GPU-accelerated motion shaders and a strictly utility-first modular architecture to maximize conversion rates.",
  },
  {
    id: 3,
    link: "https://flip-and-match-seven.vercel.app/",
    img: flip,
    category: "Development",
    title: "FLIP & MATCH",
    description:
      "An interactive client-side application demonstrating advanced DOM manipulation and state management. Features a highly optimized game loop, real-time match validation, and an implementation of the Fisher-Yates algorithm for unbiased, performant array shuffling.",
  },
  {
    id: 4,
    img: tic,
    link: "https://tic-tac-toe-two-mocha-15.vercel.app/",
    category: "Development",
    title: "TIC-TAC-TOE",
    description:
      "A zero-dependency JavaScript application showcasing matrix evaluation algorithms for win-state detection. Built with an emphasis on clean separation of concerns between the logic controller and the responsive CSS Grid UI layer.",
  },
  {
    id: 5,
    img: carousel,
    link: "https://image-carousel-lake.vercel.app/",
    category: "Development",
    title: "Image Carousel",
    description:
      "A high-performance image slider engineered with hardware-accelerated CSS transitions (`transform: translateX`). Implements modular indexing logic for infinite looping and layout reflow prevention, ensuring strict adherence to Core Web Vitals.",
  },
  {
    id: 6,
    img: quote,
    link: "https://github.com/ParthAhuja4/VANILLA_JS_PROJECTS",
    category: "Development",
    title: "Quote Generator",
    description:
      "An asynchronous JavaScript application utilizing the Fetch API for remote data retrieval. Implements robust promise handling, error boundaries, and dynamic DOM injection with CSS fade-in sequencing for a fluid user experience.",
  },
];

export const experienceData = [
  {
    id: 1,
    title: "Frontend Web Dev Intern",
    company: "The Night Marketer - Wazirpur,Delhi",
    duration: "Sep 2025 - Oct 2025",
    responsibilities: [
      "Architected Ad Analytics Platform using React.js, JavaScript (ES6+), Recharts to visualize performance metrics (ROAS, Conversion Funnels); optimized state management and TanStack Query, reducing API calls by 40% and improving user insights",
      "Built custom Chrome Extension using JavaScript DOM manipulation for automated lead generation and data extraction, directly improving sales team outreach efficiency.",
      "Engineered dynamic Calendar Event Manager & E-Commerce application featuring end-to-end data workflows, image uploads, and threaded collaboration features for enhanced user experience.",
    ],
    link: "https://drive.google.com/file/d/1MCH8WOifIGOp5a1-7y7gjbU3tuRNAuqN/view?usp=drive_link",
    techStack: [
      "React JS",
      "Postman",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Recharts",
      "Framer Motion",
    ],
  },
];

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Experience",
    path: "experience",
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
