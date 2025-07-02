import "./Home.css";
import profileImg from "../../assets/Profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { motion } from "framer-motion";

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
            <span className="text-cs">I Am</span> <b>FRONTEND WEB DEVELOPER</b>
          </p>
          <p className="home_text">
            I engineer performant, accessible frontends with semantic HTML,
            modern CSS (Flexbox, Grid, animations), and JavaScript—built on
            clean, scalable architecture. React is my core framework for
            building modular, production-grade interfaces. I integrate Redux for
            predictable state management, Framer Motion for fluid UI animations,
            React Hook Form for form handling, and EmailJS for email delivery
            services. I handle API integrations confidently with the Fetch API
            and maintain clean Git workflows with structured branching, pull
            requests, and peer reviews. I'm currently optimizing UI velocity
            with Tailwind CSS and expanding backend experience through Appwrite.
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
            <a href="" className="bttn text-cs">
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
