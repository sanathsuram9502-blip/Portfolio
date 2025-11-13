import React from 'react';
import { motion } from 'framer-motion';
import { HiHeart } from 'react-icons/hi';
import { FaLinkedin, FaDribbble, FaBehance, FaTwitter, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/sanath-suram-84bb8a20b',
      label: 'LinkedIn'
    },
    // {
    //   icon: <FaGithub />,
    //   url: 'https://github.com/sanathsuram',
    //   label: 'GitHub'
    // }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Case Studies' },
    // { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <h3>Sanath Suram</h3>
              <p>
                UI/UX Designer passionate about creating meaningful digital experiences 
                that solve real problems and delight users.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li><a href="#contact">UI/UX Design</a></li>
                  <li><a href="#contact">Mobile App Design</a></li>
                  <li><a href="#contact">Web Design</a></li>
                  <li><a href="#contact">Design Systems</a></li>
                  <li><a href="#contact">Prototyping</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Let's Connect</h4>
                <p>Ready to work together?</p>
                <div className="footer-social">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                <a href="#contact" className="footer-cta">
                  Start a Project
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="footer-copyright">
              <p>
                © {currentYear} Sanath Suram.

              </p>
            </div>


            <motion.button
              className="back-to-top"
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              aria-label="Back to top"
            >
              ↑
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
