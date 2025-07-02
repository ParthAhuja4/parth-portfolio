import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container container grid">
        <div className="footer_socials">
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

        <div className="copyright text-cs">
          &copy; 2025 <span>PARTH, </span> All Rights Reserved
        </div>

        <div className="copyright text-cs">
          DEVELOPED BY <span>PARTH AHUJA </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
