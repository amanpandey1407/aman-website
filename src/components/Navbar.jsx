'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import "../style/navbar.css";

const sections = ['home', 'about', 'projects'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navRefs = useRef({});
  const navbarRef = useRef(null);

  // Measure navbar height
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    updateNavbarHeight();

    const resizeObserver = new ResizeObserver(updateNavbarHeight);
    if (navbarRef.current) {
      resizeObserver.observe(navbarRef.current);
    }

    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
      if (navbarRef.current) {
        resizeObserver.unobserve(navbarRef.current);
      }
    };
  }, []);

  // Scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  // Active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + navbarHeight + 1;
      let found = false;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (
          el &&
          scrollPos >= el.offsetTop - el.offsetHeight / 2 &&
          scrollPos < el.offsetTop + el.offsetHeight / 2
        ) {
          setActiveSection(section);
          found = true;
          break;
        }
      }

      if (!found) setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight]);

  // Update underline
  useEffect(() => {
    const activeEl = navRefs.current[activeSection];
    if (activeEl) {
      const { offsetLeft, offsetWidth } = activeEl;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeSection, isOpen]);

  // Recalculate underline on resize
  useEffect(() => {
    const updateUnderline = () => {
      const activeEl = navRefs.current[activeSection];
      if (activeEl) {
        const { offsetLeft, offsetWidth } = activeEl;
        setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
      }
    };

    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [activeSection]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="logo">
        <Link href="/" className="logoText">Aman</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>☰</div>

      <ul className={`navLinks ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
        {sections.map((sec) => (
          <li
            key={sec}
            ref={(el) => { navRefs.current[sec] = el }}
            className={`navItem ${activeSection === sec ? 'active' : ''}`}
          >
            <a
              href={`#${sec}`}
              className="navLink"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sec);
                setIsOpen(false);
              }}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          </li>
        ))}

        <li className="navItem">
          <a
            href="#contact"
            className="talkButton"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
              setIsOpen(false);
              setActiveSection('');
            }}
          >
            Let’s Talk
          </a>
        </li>

        {activeSection && <div className="underline" style={underlineStyle} />}
      </ul>
    </nav>
  );
};

export default Navbar;
