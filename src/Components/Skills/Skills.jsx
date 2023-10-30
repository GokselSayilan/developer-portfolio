import React, { useRef } from "react";
import "./skills.css";

import { motion, useInView } from "framer-motion";

const customEase = [0.17, 0.55, 0.55, 1]; // Özel cubic-bezier eğrisi

const navbarAnimation = {
  initial: { opacity: 0, x: -200 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.9, ease: customEase, delay: 0.2 },
};

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={navbarAnimation.initial}
      animate={isInView ? navbarAnimation.animate : navbarAnimation.initial}
      transition={navbarAnimation.transition}
      className="skills"
    >
      <img
        src="assets/pattern-rings.svg"
        alt="ringsShape"
        className="skillsShape"
      />
      <div className="skill whiteText">
        <h3 className="skillTitle headingL">HTML</h3>
        <p className="skillExp bodyText grayText">4 Years Experience</p>
      </div>
      <div className="skill whiteText">
        <h3 className="skillTitle headingL">CSS</h3>
        <p className="skillExp bodyText grayText">4 Years Experience</p>
      </div>
      <div className="skill whiteText">
        <h3 className="skillTitle headingL">Javascript</h3>
        <p className="skillExp bodyText grayText">4 Years Experience</p>
      </div>
      <div className="skill whiteText">
        <h3 className="skillTitle headingL">Accessibility</h3>
        <p className="skillExp bodyText grayText">4 Years Experience</p>
      </div>
      <div className="skill whiteText">
        <h3 className="skillTitle headingL">React</h3>
        <p className="skillExp bodyText grayText">3 Years Experience</p>
      </div>
      <div className="skill whiteText">
        <h3 className="skillTitle headingL">Sass</h3>
        <p className="skillExp bodyText grayText">3 Years Experience</p>
      </div>
    </motion.div>
  );
}

export default Skills;
