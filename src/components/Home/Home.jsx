import "./Home.css";
import profileImg from "../../assets/Profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { motion } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";
import resume from "../../assets/Parth_Ahuja_Resume.pdf";

function Home() {
  return (
    <motion.section
      id="home"
      className="home"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
      <div className="content">
        <div className="home_container container">
          <p className="home_subtitle text-cs">
            HELLO, <span>MY NAME IS</span>
          </p>
          <h1 className="home_title text-cs">
            <span>PARTH </span>AHUJA
          </h1>
          <p className="home_job">
            <span className="text-cs">I Am</span>{" "}
            <b>PASSIONATE WEB DEVELOPER</b>
          </p>
          <p className="home_text">
            I architect scalable, <strong>full-stack applications</strong> and{" "}
            <strong>distributed microservices</strong>, underpinned by strong CS
            fundamentals (OOP, DSA) and multi-language proficiency
            <strong> (TypeScript, JavaScriprt(ES6+), Java, Python)</strong>. On
            the frontend, I engineer performant, SEO-optimized experiences using
            <strong> React and Next.js</strong>, leveraging Redux for
            deterministic state management, Three.js for immersive graphics, and
            <strong> Tailwind CSS</strong> for accessible, pixel-perfect UIs. My
            backend expertise centers on building secure
            <strong> REST and GraphQL APIs with Node.js</strong>, managing
            complex data via{" "}
            <strong>
              PostgreSQL, MongoDB, and Prisma ORM, and optimizing with Redis
            </strong>
            . Beyond CRUD, I design{" "}
            <strong>real-time, event-driven systems</strong> using{" "}
            <strong>
              WebRTC, WebSockets, and RabbitMQ, containerized with Docker
            </strong>
            . I actively <strong>integrate AI features</strong> like real-time
            transcription, and ensure production readiness by engineering{" "}
            <strong>idempotent MoR payment gateways</strong> for automated
            subscription lifecycles.
          </p>
          <div className="home_socials">
            <a
              href="https://github.com/ParthAhuja4"
              target="_blank"
              className="home_social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/parthahuja006/"
              target="_blank"
              className="home_social-link"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/parthahuja4"
              target="_blank"
              className="home_social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:parthahuja006@gmail.com"
              className="home_social-link"
              target="_blank"
            >
              <SiMinutemailer />
            </a>
          </div>
          <div className="home_bttns">
            <a href={resume} target="_blank" className="bttn text-cs">
              RESUME
            </a>
            <a href="#skill" className="hero_link text-cs">
              MY SKILLS
            </a>
          </div>
        </div>
        <div className="home_img-wrapper">
          <div className="home_banner">
            <img
              src={profileImg}
              alt="PROFILE PHOTO"
              className="home_profile"
            ></img>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
