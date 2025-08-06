import "./Home.css";
import profileImg from "../../assets/Profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { motion } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";
import resume from "../../assets/Parth Ahuja Resume FrontEnd.pdf"

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
            I architect performant, accessible frontends with semantic HTML5,
            modern CSS (Flexbox, Grid, animations), and JavaScript, underpinned
            by clean, scalable architecture principles. My primary JS library is
            React + Vite for modular, production-grade UIs, integrated with
            Redux for deterministic state management, Framer Motion for high-FPS
            animations, React Hook Form for optimized form state handling,
            EmailJS for transactional mail, and DOMPurify for XSS-safe HTML
            sanitization. I implement robust API consumption via the Fetch API,
            maintain disciplined Git workflows with feature branching, PR
            reviews, and CI-friendly commits, and optimize delivery velocity
            with Tailwind CSS. On the backend, I leverage Appwrite for
            authentication, database operations, and serverless functions, and
            integrate Stripe Checkout with webhook validation for secure,
            scalable subscription management.
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
