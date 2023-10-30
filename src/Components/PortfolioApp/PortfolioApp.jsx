import React from "react";
import "./portfolioApp.css";

//components
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

function PortfolioApp() {
  return (
    <div className="portfolio blackBg">
      <div className="portfolioWrapper">
        <Navbar />
        <Header/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}

export default PortfolioApp;
