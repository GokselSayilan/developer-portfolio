import React from "react";
import "./header.css";

//interactiveElements
import UnderlineText from "../InteractiveElements/UnderlineText/UnderlineText";


//context
import { useScreen } from "../../Context/ScreenContext";
//framet-motion
import { motion } from "framer-motion";

function Header() {
  const { currentScreen } = useScreen();

  return (
    <motion.header
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="header"
    >
      <div className="headerContent">
        <h1 className="headerContentTitle headingXL whiteText">
          Nice to meet you! I’m
          <span className="headerTitleUnderlineText">Adam Keyes</span>.
        </h1>

        <p className="headerContentDesc bodyText mediumWeight whiteText">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <UnderlineText label="contact me"/>
        <img
          src="assets/pattern-rings.svg"
          alt="ringsShape"
          className="headerContentShape"
        />
      </div>
      <div className="headerPhotoWrapper">
        <img
          src={`assets/image-profile-${currentScreen}.webp`}
          alt="headerPhoto"
          className="headerPhoto"
        />
        <img
          src="assets/pattern-circle.svg"
          alt="circleShape"
          className="headerPhotoShape"
        />
      </div>
    </motion.header>
  );
}

export default Header;
