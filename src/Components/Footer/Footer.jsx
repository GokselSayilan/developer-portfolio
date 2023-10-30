import React, { useEffect, useRef, useState } from "react";
import "./footer.css";

//interactive elements
import UnderlineText from "../InteractiveElements/UnderlineText/UnderlineText";

//icon
import {
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  FrontendMentor,
} from "../../Icons/Icons";

//animation
import { motion, useInView } from "framer-motion";

const customEase = [0.17, 0.55, 0.55, 1]; // Özel cubic-bezier eğrisi

const footerAnimation = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: customEase, delay: 0.2 },
};

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [emailValue, setEmailValue] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    setEmailValue(value);
  };

  const handleSubmit = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //regular exp
    if (emailPattern.test(emailValue)) {
      console.log("success");
      setIsSubmit(true);
    } else {
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    setErrorMessage(false);
  }, [emailValue]);

  return (
    <motion.footer
      ref={ref}
      initial={footerAnimation.initial}
      animate={isInView ? footerAnimation.animate : footerAnimation.initial}
      transition={footerAnimation.transition}
      className="footer lightBlackBg"
    >
      <div className="footerTop">
        <div className="footerContact">
          <img
            src="assets/pattern-rings.svg"
            alt="ringleShape"
            className="footerFormShape"
          />
          <h2 className="footerContactTitle whiteText headingXL">CONTACT</h2>
          <p className="footerContactDesc grayText bodyText">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="footerForm">
          <div className="formName">
            <input
              type="text"
              className="formNameInput whiteText"
              placeholder="NAME"
            />
          </div>
          <div className={`formEmail ${errorMessage && "errorStyle"}`}>
            <input
              type="email"
              value={emailValue}
              onChange={handleChange}
              className="formEmailInput whiteText"
              placeholder="EMAIL"
            />
            {errorMessage && <div className="errorIcon">!</div>}
            {errorMessage && (
              <div className="errorMessage">Sorry, invalid format here</div>
            )}
          </div>
          <div className="formMessage">
            <textarea
              className="formMessageInput whiteText"
              placeholder="MESSAGE"
            ></textarea>
          </div>
          <div className="sendMessageWrapper" onClick={handleSubmit}>
            <UnderlineText label="send message" />
          </div>
        </div>
      </div>
      <hr className="footerSep" />
      <div className="footerLinks">
        <h3 className="footerLogo whiteText">adamkeyes</h3>
        <div className="footerLinksSocial">
          <GithubIcon />
          <FrontendMentor />
          <LinkedinIcon />
          <TwitterIcon />
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
