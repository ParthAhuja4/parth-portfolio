import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData } from "../../Data";
import "./Experience.css";

const ExperienceCard = ({ exp }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = exp.responsibilities.length > 2;

  const displayResponsibilities = isExpanded
    ? exp.responsibilities
    : exp.responsibilities.slice(0, 2);

  return (
    <div className="experience__card">
      <a href={exp.link} target="_blank">
        <div className="experience__header">
          <h3 className="experience__title">{exp.title}</h3>
          <span className="experience__company">{exp.company}</span>
          <span className="experience__duration">{exp.duration}</span>
        </div>

        <ul className="experience__responsibilities">
          <AnimatePresence initial={false}>
            {displayResponsibilities.map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="experience__responsibility-item"
              >
                <span className="experience__icon">▹</span>
                <p>{item}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </a>

      {isLong && (
        <button
          className="experience__toggle-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
      <a href={exp.link} target="_blank">
        {exp.techStack && (
          <div className="experience__tech-stack">
            {exp.techStack.map((tech, i) => (
              <span key={i} className="experience__tech-item">
                {tech}
              </span>
            ))}
          </div>
        )}
      </a>
    </div>
  );
};

const Experience = () => {
  const isSingle = experienceData.length === 1;

  return (
    <section className="experience section" id="experience">
      <h2 className="section_title text-cs">Work Experience</h2>
      <div
        className={`experience__container container ${
          isSingle ? "experience__single" : "experience__timeline"
        }`}
      >
        {experienceData.map((exp, index) => {
          return (
            <motion.div
              className={`experience__item ${
                isSingle ? "single-item" : "timeline-item"
              }`}
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {!isSingle && <div className="timeline-dot"></div>}

              <ExperienceCard exp={exp} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
