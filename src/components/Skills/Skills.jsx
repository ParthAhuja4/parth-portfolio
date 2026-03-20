import "./Skills.css";
import { t_skills } from "../../Data.jsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink } from "react-icons/fi";

function Skills() {
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
                <h3 className="skills_name">
                  {name} <FiExternalLink aria-label="External link" />
                </h3>
                <p className="skills_description">{description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
