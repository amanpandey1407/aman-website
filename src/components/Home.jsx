'use client';
import React from 'react';
import '../style/home.css';
import { profileimage } from "@/assets/imageindex";

import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  console.log("Profile image path:", profileimage);

  return (
    <section className="home section" id="home">
      <div className="home-left">
        <h1 className="home-title">Hi, I'm Aman Pandey</h1>
        <div className="home-subtitle">
          <TypeAnimation
            sequence={[
              "I'm a Full-Stack Developer",
              2000,
              "I'm a UI/UX Designer",
              2000,
              "I'm a React Specialist",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>

        <div className="home-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/amanpandey1407" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/amanpandey1407/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="home-right">
      <img src={profileimage.src} alt="Aman Pandey" className="profile-img" />

      </div>
    </section>
  );
};

export default Home;
