"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../style/projects.css";

import { projects } from "./projectsData";
import { placeholder } from "@/assets/imageindex";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const mobilesettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Show 1 image at a time on mobile
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  let isDragging = false;
  const [isMobile, setIsMobile] = useState(false);

  // Use effect to detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Detect mobile devices
    };

    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile); // Update on window resize

    return () => window.removeEventListener("resize", checkMobile); // Clean up
  }, []);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-description">
        Here are some of the projects I've worked on recently.
      </p>

      <div className="project-container">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onMouseDown={() => (isDragging = false)}
              onMouseMove={() => (isDragging = true)}
              onClick={() => {
                if (!isDragging) setSelectedProject(project);
              }}
            >
              <div className="project-image">
                <img
                  src={project.images[0] || placeholder.src}
                  alt={project.title}
                />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </Slider>

        {selectedProject && (
          <div
            className="project-dialog-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="project-dialog-fullscreen"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="dialog-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <div className="dialog-scrollable">
                {isMobile ? (
                  // If it's a mobile screen, show Slick slider
                  <Slider
                    {...{
                      ...mobilesettings,
                      infinite: selectedProject.images.length > 1, // Only enable infinite scroll if more than one image
                    }}
                  >
                    {selectedProject.images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${selectedProject.title} ${i}`}
                      />
                    ))}
                  </Slider>
                ) : (
                  // For desktop/tablets, show images stacked vertically
                  <div className="dialog-images">
                    {selectedProject.images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${selectedProject.title} ${i}`}
                      />
                    ))}
                  </div>
                )}

                <div className="dialog-content">
                  <h3>{selectedProject.title}</h3>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Visit Project ↗
                    </a>
                  )}

                  <p className="project-description">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
