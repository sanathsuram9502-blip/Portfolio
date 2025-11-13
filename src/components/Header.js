import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle body scroll lock when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isMenuOpen]);

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Case Studies' },
        // { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu
        setIsMenuOpen(false);
    };

    return (
        <motion.header
            className={`header ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}>
              Sanath Suram
            </a>
          </motion.div>
            
           
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="header-actions">
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? <HiSun /> : <HiMoon />}
            </motion.button>

            <motion.button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </motion.button>
          </div>
               
          
        </div>
      </div> */}
            <div className="container">
                <div className="header-content">
                    <motion.div
                        className="logo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="#home" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#home');
                        }}>
                            Sanath Suram
                        </a>
                    </motion.div>

                    {/* Grouped nav and header-actions */}
                    <div className="nav-actions-wrapper">
                        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    className="nav-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    whileHover={window.innerWidth > 768 ? { y: -2 } : {}}
                                    whileTap={{ scale: 0.98 }}
                                    style={{ pointerEvents: 'auto' }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </nav>

                        <div className="header-actions">
                            <motion.button
                                className="theme-toggle"
                                onClick={toggleTheme}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                            >
                                {isDarkMode ? <HiSun /> : <HiMoon />}
                            </motion.button>

                            <motion.button
                                className="menu-toggle"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                            </motion.button>
                        </div>
                    </div>
                    {/* End grouping */}
                </div>
            </div>

            {/* Mobile menu backdrop */}
            {isMenuOpen && (
                <motion.div
                    className="mobile-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

        </motion.header>
    );
};

export default Header;
