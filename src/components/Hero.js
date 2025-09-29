import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HiDownload, HiArrowDown } from 'react-icons/hi';
import './Hero.css';

// Counter component for animated numbers
const CounterNumber = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = target / 50;
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev < target) {
            return Math.min(prev + increment, target);
          }
          clearInterval(timer);
          return target;
        });
      }, 30);
      return () => clearInterval(timer);
    }, 1500); // Start after hero animation
    
    return () => clearTimeout(timer);
  }, [target]);
  
  return (
    <span className="stat-number">
      {Math.floor(count)}{suffix}
    </span>
  );
};

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const controls = useAnimation();
  
  const roles = [
    'UI/UX Designer',
    'Product Designer',
  ];

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Typewriter effect for roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Floating animation trigger
  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Sanath</span> —
            </motion.h1>
            
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              a{' '}
              <motion.span
                className="gradient-text typewriter-text"
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
              {' '}who bridges{' '}
              <span > the gap between complex data and intuitive experiences.</span>
            </motion.h2>

            {/* <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              With a Masters in Advanced Data Analytics and experience designing for cutting-edge 
              technologies, I bridge the gap between complex technical requirements and intuitive 
              user interfaces. From AI-powered AR platforms to healthcare portals, I create 
              experiences that drive real business impact.
            </motion.p> */}

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                className="btn-primary" 
                onClick={scrollToProjects}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.span
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  View Case Studies
                </motion.span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiArrowDown />
                </motion.div>
              </motion.button>
              
              <motion.a 
                href="/SanathSuram _UI _UX Designer.pdf"
                className="btn-secondary"
                download
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "var(--accent-primary)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <HiDownload />
                </motion.div>
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div 
                className="stat"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CounterNumber target={5} suffix="+" />
                <span className="stat-label">Years of Experience</span>
              </motion.div>
              <motion.div 
                className="stat"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CounterNumber target={20} suffix="+" />
                <span className="stat-label">Applications Designed</span>
              </motion.div>
              <motion.div 
                className="stat"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CounterNumber target={50} suffix="%" />
                <span className="stat-label">Conversion Rate Boost</span>
              </motion.div>
              <motion.div 
                className="stat"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CounterNumber target={500} suffix="+" />
                <span className="stat-label">Users Tested</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="image-container"
              animate={controls}
            >
              <motion.img 
                src="/images/canara-bank-case-study/profile-pic.png" 
                alt="Sanath Suram - UI/UX Designer"
                className="profile-image"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                drag
                dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                dragElastic={0.1}
              />
              <div className="image-bg"></div>
              
              {/* Floating particles */}
              <motion.div
                className="floating-particle particle-1"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="floating-particle particle-2"
                animate={{
                  y: [0, 15, 0],
                  x: [0, -15, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="floating-particle particle-3"
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToProjects}
          whileHover={{ 
            scale: 1.2,
            color: "var(--accent-primary)",
            y: -5
          }}
          whileTap={{ scale: 0.9 }}
        >
          <HiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
