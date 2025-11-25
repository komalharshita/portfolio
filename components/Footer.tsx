import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-brand">K.H.</div>

      <nav className="footer-nav">
        <a href="#about">About</a>
        <a href="#works">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="footer-socials">
        <a href="#">f</a>
        <a href="#">t</a>
        <a href="#">ig</a>
        <a href="#">in</a>
      </div>

      <div className="footer-copy">@komalharshita 2025</div>
    </footer>
  );
};

export default Footer;
