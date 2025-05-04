"use client";
import React from "react";
import "../style/about.css";
import { aboutimage } from "@/assets/imageindex";

const About = () => {
  return (
    <section id="about" className="about-section section">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={aboutimage.src} alt="Profile" />
        </div>
        <div className="about-text">
          <p className="section-description">
            I am a software engineer passionate about building secure, scalable,
            and user-focused web applications. With hands-on experience in
            frontend and backend technologies like React.js, Angular, .NET,
            JavaScript, and C++, I strive to deliver high-performance solutions
            through clean code, performance optimization, and thoughtful design.
            My background includes developing real-time systems, improving
            security, and working on cloud-based deployments, all while
            maintaining a strong focus on collaborative and efficient
            development practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
