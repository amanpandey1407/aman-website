"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../style/projects.css";
import {
  expensetracker01,
  expensetracker02,
  expensetracker03,
  expensetracker04,
  expensetracker05,
  expensetracker06,
  multimart01,
  multimart02,
  multimart03,
  portfoliowebsite,
  webtypist,
} from "@/assets/imageindex";

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

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A full-stack Budget Planner App built with Angular, .NET Core, and PostgreSQL. Users can track expenses, set savings goals, and generate personalized budget plans. Admins manage categories and control a central budget plan. Features include Google OAuth login, responsive UI, and real-time budget tracking.",
    images: [
      expensetracker01.src,
      expensetracker02.src,
      expensetracker03.src,
      expensetracker04.src,
      expensetracker05.src,
      expensetracker06.src,
    ],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio using Next.js and Tailwind CSS.",
    images: [portfoliowebsite.src],
  },
  {
    title: "Multimart E-commerce Store",
    description:
      "A full-featured e-commerce application built with React on the frontend and Node.js on the backend. The site includes a dynamic product catalog, add-to-cart functionality, a secure checkout page and responsive design for smooth shopping on all devices. Designed with a modern UI and optimized for performance, this project showcases key features of a scalable online store.",
    images: [multimart01.src, multimart02.src, multimart03.src],
  },
  {
    title: "WebTypist",
    description:
      "This website is designed to help users significantly improve their typing speed and accuracy. In today's fast-paced digital world, typing is an essential skill for productivity and communication. Practice regularly, track your progress, and make this platform your go-to resource for developing efficient typing habits.",
    images: [webtypist.src],
  },
];

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
                <img src={project.images[0]} alt={project.title} />
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
