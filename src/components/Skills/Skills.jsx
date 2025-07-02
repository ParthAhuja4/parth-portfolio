import "./Skills.css";
import { t_skills } from "../../Data.jsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [softRef, softInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="skills section" id="skill">
      <h2 className="section_title text-cs">Professional Skills</h2>
      <div className="tech" ref={skillsRef}>
        <p className="section_subtitle">
          Technical<span> Competencies</span>
        </p>
        <div className="skills_container container grid">
          {t_skills.map(({ id, name, description, link }, index) => (
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="skills_item"
              key={id}
              custom={index}
              initial="hidden"
              animate={skillsInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <a href={link} target="_blank">
                <div className="skills_titles"></div>
                <h3 className="skills_name">{name}</h3>
                <p className="skills_description">{description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="soft">
        <p className="section_subtitle">
          SOFT<span> SKILLS</span>
        </p>
        <div>
          <motion.p
            ref={softRef}
            className="soft-para"
            initial={{ x: -150, skewX: 5 }}
            animate={softInView ? { x: 0, skewX: 0 } : { x: -50, skewX: 5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            My strength lies in translating ideas into action through clear
            communication, adaptive teamwork, and purpose-driven leadership. As
            a technical member of the Google Developer Student Clubs and
            GeeksforGeeks at my college, I've collaborated on tech initiatives
            that demanded both technical insight and team synergy. I led a
            state-level, medal-winning science project, presenting a
            solar-powered vehicle prototype — sharpening both public speaking
            and innovative thinking. During a 36-hour hackathon, I stayed
            composed under pressure, guiding my team to a 3rd place finish by
            delivering a real-time solution. My curiosity fuels continuous
            learning — earning me certifications in Robotics and AutoCAD through
            clearing final rounds at IIT Delhi and IIT Kanpur. I thrive in
            dynamic environments where collaboration meets creativity.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
