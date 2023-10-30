import React, { useRef, useState } from "react";
import "./projects.css";

//context
import { useScreen } from "../../Context/ScreenContext";

//interactive elements
import UnderlineText from "../InteractiveElements/UnderlineText/UnderlineText";

//data
import projectsData from "../../projects.json";

import { AnimatePresence, motion, useInView } from "framer-motion";

const customEase = [0.17, 0.55, 0.55, 1]; // Özel cubic-bezier eğrisi

const projectAnimation = {
  initial: { opacity: 0, x: -200 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.9, ease: customEase, delay: 0.2 },
};

function Projects() {
  const { isDesktop } = useScreen();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.01 });

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <motion.section
      ref={ref}
      initial={projectAnimation.initial}
      animate={isInView ? projectAnimation.animate : projectAnimation.initial}
      transition={projectAnimation.transition}
      className="projects"
    >
      <div className="projectsTop">
        <h1 className="projectsTopText headingXL whiteText">Projects</h1>
        <UnderlineText label="contact me" />
      </div>
      <div className="projectsPortfolio">
        {projectsData.map((project, index) => (
          <div
            key={project.title + index}
            className="project"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            {isDesktop && (
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: [1, 0] }}
                    className="projectBlackOut"
                  >
                    <UnderlineText label="view code" />
                    <UnderlineText label="view project" />
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            <img
              src={isDesktop ? project.photo.large : project.photo.small}
              alt="projectPhoto"
              className="projectPhoto"
            />
            <h3 className="projectTitle headingM whiteText">{project.title}</h3>
            <div className="projectTags">
              {project.tags.map((tag) => (
                <p
                  key={project.title + tag}
                  className="projectTag bodyText grayText"
                >
                  {tag}
                </p>
              ))}
            </div>
            {!isDesktop && (
              <div className="viewProject">
                <UnderlineText label="view project" />
                <UnderlineText label="view code" />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
