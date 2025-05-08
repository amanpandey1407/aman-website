"use client";
import React from "react";
import "../style/contact.css";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    const subject = encodeURIComponent("Connecting from Portfolio website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:amanpandey1400@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-description">
            Let’s build something amazing together! Reach out to me.
          </p>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            />
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-details">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:amanpandey1400@gmail.com">
                amanpandey1400@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
