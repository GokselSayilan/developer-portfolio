import React from "react";
import "./navbar.css";

//motion
import { motion } from "framer-motion";

//icons
import {
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  FrontendMentor,
} from "../../Icons/Icons";

//animation

const navbarAnimation = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

function Navbar() {
  return (
    <motion.nav
      initial={navbarAnimation.initial}
      animate={navbarAnimation.animate}
      transition={navbarAnimation.transition}
      className="navbar"
    >
      <h3 className="navbarLogo whiteText boldWeight">adamkeyes</h3>
      <div className="navbarLinks">
        <GithubIcon />
        <FrontendMentor />
        <LinkedinIcon />
        <TwitterIcon />
      </div>
    </motion.nav>
  );
}

export default Navbar;
