import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink, HiEye } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import LeadsProCaseStudy from './LeadsProCaseStudy';
import DNVCaseStudyThemed from './DNVCaseStudyThemed';
import BSNLCaseStudyThemed from './BSNLCaseStudyThemed';
import UniServeReachCaseStudy from './UniServeReachCaseStudy';
import CanaraBankCaseStudy from './canaraBankCaseStudy';
import SmartCitiesEnergyPrediction from './SmartCitiesEnergyPrediction'; 
import './Projects.css';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [showCaseStudy, setShowCaseStudy] = useState(null);


  const projects = [
    // {
    //   id: 1,
    //   title: 'DNV Accreditation Portal',
    //   category: 'ui-ux',
    //   description: 'A comprehensive hospital accreditation platform with 100+ screens designed for healthcare quality management, compliance tracking, and certification workflows.',
    //   tags: ['Healthcare', 'Enterprise', 'Compliance', 'Portal Design'],
    //   image: '/images/dnv-case-study/final-designs/mockup.png',
    //   link: '#',
    //   type: 'Case Study',
    //   hasDetailedCaseStudy: true
    // },
    // {
    //   id: 2,
    //   title: 'Leads Pro CRM',
    //   category: 'ui-ux',
    //   description: 'A comprehensive CRM solution that helps real estate and business professionals manage leads, track interactions, and close deals more effectively.',
    //   tags: ['UI/UX Design', 'CRM', 'Real Estate', 'Business Tools'],
    //   image: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="100%25" height="100%25" fill="%238b5cf6"%3E%3C/rect%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="white"%3ELeads Pro CRM%3C/text%3E%3C/svg%3E',
    //   link: '#',
    //   type: 'Case Study',
    //   hasDetailedCaseStudy: true
    // },
    // {
    //   id: 3,
    //   title: 'Green Basket',
    //   category: 'ui-ux',
    //   description: 'Mobile application for easy grocery shopping with eco-friendly products. Focus on sustainable living and convenient shopping experience.',
    //   tags: ['Mobile App', 'E-commerce', 'Sustainability', 'Grocery'],
    //   image: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="100%25" height="100%25" fill="%2310b981"%3E%3C/rect%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="white"%3EGreen Basket%3C/text%3E%3C/svg%3E',
    //   link: '#',
    //   type: 'Mobile App'
    // },
    // {
    //   id: 4,
    //   title: 'Ez Drone',
    //   category: 'ui-ux',
    //   description: 'Mobile application for affordable, high-quality drones. Streamlined interface for drone enthusiasts and professionals.',
    //   tags: ['Mobile App', 'Drones', 'E-commerce', 'Technology'],
    //   image: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="100%25" height="100%25" fill="%23f59e0b"%3E%3C/rect%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="white"%3EEz Drone%3C/text%3E%3C/svg%3E',
    //   link: '#',
    //   type: 'Mobile App'
    // },
    {
      id: 5,
      title: 'BSNL App Redesign',
      category: 'ui-ux',
      description: 'Complete redesign of the BSNL mobile application, focusing on enhancing user experience and streamlining telecom service management with modern UI design.',
      tags: ['Mobile App', 'Telecommunications', 'UX Design', 'Service Management'],
      image: '/images/bsnl-case-study/new_screens/mockup.png',
      link: '#',
      type: 'Case Study',
      hasDetailedCaseStudy: true
    },
    {
      id: 6,
      title: 'UniServe™ Reach',
      category: 'ui-ux',
      description: 'Comprehensive multi-channel communication analytics dashboard that unified Email, SMS, and WhatsApp performance data into a single, intuitive interface for enterprise teams.',
      tags: ['Analytics', 'Dashboard', 'Enterprise', 'UX Design'],
      image: '/images/uniserve-case-study/Channel.png',
      link: '#',
      type: 'Case Study',
      hasDetailedCaseStudy: true
    },
    {
      id: 7,
      title: 'Canara Bank Credit Card Platform',
      category: 'ui-ux',
      description: 'UX analysis and research of a comprehensive credit card management platform featuring account management, rewards, payments, and customer support.',
      tags: ['Banking', 'Financial Services', 'UX Research', 'Platform Design'],
      image: '/images/canara-bank-case-study/Dashboard.png',
      link: '#',
      type: 'Case Study',
      hasDetailedCaseStudy: true
    },
    {
      id: 8,
      title: 'Smart Cities Energy Prediction',
      category: 'data',
      description: 'Machine learning-driven analysis of residential energy consumption patterns across U.S. cities using Random Forest and KNN algorithms to predict electricity and natural gas usage.',
      tags: ['Machine Learning', 'Data Analysis', 'Smart Cities', 'Energy Prediction'],
      image: '/images/energy-consumption-case-study/rq1-graph1.png',
      link: '#',
      type: 'Case Study',
      hasDetailedCaseStudy: true
    }
  ];

  const filters = [
    { key: 'all', label: 'All Case Studies' },
    { key: 'ui-ux', label: 'UI/UX Design' },
    // { key: 'web', label: 'Web Design' },
    { key: 'data', label: 'Data Analysis' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project) => {
    if (project.hasDetailedCaseStudy) {
      setShowCaseStudy(project.id);
    } else {
      window.open(project.link, '_blank');
    }
  };

  if (showCaseStudy === 1) {
    return <DNVCaseStudyThemed onBack={() => setShowCaseStudy(null)} />;
  }
  
  if (showCaseStudy === 2) {
    return <LeadsProCaseStudy onBack={() => setShowCaseStudy(null)} />;
  }
  
  if (showCaseStudy === 5) {
    return <BSNLCaseStudyThemed onBack={() => setShowCaseStudy(null)} />;
  }
  
  if (showCaseStudy === 6) {
    return <UniServeReachCaseStudy onBack={() => setShowCaseStudy(null)} />;
  }
  
  if (showCaseStudy === 7) {
    return <CanaraBankCaseStudy onBack={() => setShowCaseStudy(null)} />;
  }
  
  if (showCaseStudy === 8) {
    return <SmartCitiesEnergyPrediction onBack={() => setShowCaseStudy(null)} />;
  }

  // OLD INLINE VERSION - REMOVE
  if (showCaseStudy === 999) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'var(--bg-primary)', 
        color: 'var(--text-primary)',
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <button 
          onClick={() => setShowCaseStudy(null)}
          style={{
            padding: '1rem 2rem',
            background: 'var(--accent-primary)',
            color: isDarkMode ? 'white' : 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          ← Back to Projects
        </button>
        
        <div style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            BSNL App Redesign
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2rem' }}>
            Comprehensive Mobile Application UX/UI Redesign
          </p>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#06b6d4' }}>⏱️</span>
              <span>6 months</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#06b6d4' }}>👤</span>
              <span>Lead UX/UI Designer</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#06b6d4' }}>👥</span>
              <span>4 designers, 3 developers</span>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#f1f5f9' }}>Project Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '12px' }}>
              <h3 style={{ color: '#f59e0b', marginBottom: '1rem' }}>The Challenge</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                The existing BSNL mobile app suffered from poor user experience with cluttered interfaces, confusing navigation, and outdated design patterns that frustrated users trying to manage their telecom services efficiently.
              </p>
            </div>
            <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '12px' }}>
              <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>The Solution</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                Redesigned the entire app with a modern, intuitive interface focusing on simplified navigation, clear visual hierarchy, and streamlined user flows for essential tasks like account management, bill payments, and service requests.
              </p>
            </div>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.7' }}>
            This project involved a comprehensive redesign of the existing BSNL mobile application, focusing on enhancing user experience (UX) and user interface (UI) to create a more intuitive, efficient, and visually appealing platform for managing mobile services. The goal was to address common user frustrations with legacy telecom apps, such as cluttered interfaces, difficult navigation, and lack of clarity, by implementing a modern design language and streamlining core functionalities.
          </p>
        </div>

        {/* Design Process */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#f1f5f9' }}>Design & Prototyping</h2>
          <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>
            The design process included creating wireframes to establish the structure and user flow, followed by high-fidelity designs that brought the modern BSNL app experience to life.
          </p>

          {/* Wireframes Section */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#06b6d4' }}>Wireframes & User Flow</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem'
            }}>
              {[
                { 
                  src: "/images/bsnl-case-study/BSNL App Home Screen Wireframe.png",
                  title: "Home Screen Wireframe",
                  desc: "Initial wireframe design for the main dashboard"
                },
                { 
                  src: "/images/bsnl-case-study/BSNL App Account Screen Wireframe.png",
                  title: "Account Screen Wireframe", 
                  desc: "User account management wireframe"
                },
                { 
                  src: "/images/bsnl-case-study/BSNL App Payments Screen Wireframe.png",
                  title: "Payments Screen Wireframe",
                  desc: "Bill payment flow wireframe"
                },
                { 
                  src: "/images/bsnl-case-study/BSNL App Services Screen Wireframe.png",
                  title: "Services Screen Wireframe",
                  desc: "Service management wireframe"
                }
              ].map((item, index) => (
                <div key={index} style={{ cursor: 'pointer' }}>
                  <div style={{ 
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: '#f8fafc',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                    marginBottom: '1rem'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <img 
                      src={item.src} 
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ 
                      display: 'none', 
                      padding: '3rem', 
                      textAlign: 'center',
                      color: '#64748b',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '200px'
                    }}>
                      <span>📱</span>
                      <span style={{ marginTop: '1rem' }}>Loading wireframe...</span>
                    </div>
                  </div>
                  <h4 style={{ 
                    margin: '0 0 0.5rem 0', 
                    fontSize: '1.1rem', 
                    fontWeight: '600',
                    color: '#f1f5f9'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ 
                    margin: 0, 
                    color: '#94a3b8', 
                    fontSize: '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Designs Section */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#06b6d4' }}>Final High-Fidelity Designs</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem'
            }}>
              {[
                { 
                  src: "/images/bsnl-case-study/BSNL App Home Screen Hi-Fi Design.png",
                  title: "Home Screen Design",
                  desc: "Final high-fidelity home screen design with modern UI"
                },
                { 
                  src: "/images/bsnl-case-study/BSNL App Account Screen Hi-Fi Design.png",
                  title: "Account Screen Design",
                  desc: "Clean account management interface"
                },
                { 
                  src: "/images/bsnl-case-study/BSNL App Payments Screen Hi-Fi Design.png",
                  title: "Payments Screen Design",
                  desc: "Streamlined payment experience"
                },
                { 
                  src: "/images/bsnl-case-study/BSNL App Services Screen Hi-Fi Design.png",
                  title: "Services Screen Design",
                  desc: "Organized service management interface"
                }
              ].map((item, index) => (
                <div key={index} style={{ cursor: 'pointer' }}>
                  <div style={{ 
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: '#f8fafc',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                    marginBottom: '1rem'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <img 
                      src={item.src} 
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ 
                      display: 'none', 
                      padding: '3rem', 
                      textAlign: 'center',
                      color: '#64748b',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '200px'
                    }}>
                      <span>🎨</span>
                      <span style={{ marginTop: '1rem' }}>Loading design...</span>
                    </div>
                  </div>
                  <h4 style={{ 
                    margin: '0 0 0.5rem 0', 
                    fontSize: '1.1rem', 
                    fontWeight: '600',
                    color: '#f1f5f9'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ 
                    margin: 0, 
                    color: '#94a3b8', 
                    fontSize: '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#f1f5f9' }}>Results & Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { value: "+45%", metric: "User Satisfaction", desc: "Increase in user satisfaction scores" },
              { value: "+60%", metric: "Task Completion", desc: "Improvement in task completion rates" },
              { value: "+35%", metric: "Navigation Efficiency", desc: "Reduction in time to complete key tasks" }
            ].map((result, index) => (
              <div key={index} style={{ 
                background: '#1e293b', 
                padding: '2rem', 
                borderRadius: '12px', 
                textAlign: 'center',
                border: '1px solid #334155'
              }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#06b6d4', marginBottom: '0.5rem' }}>
                  {result.value}
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#f1f5f9', marginBottom: '0.5rem' }}>
                  {result.metric}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  {result.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#f1f5f9' }}>
            Interested in working together?
          </h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Let's discuss how we can create exceptional user experiences for your next project.
          </p>
          <button 
            onClick={() => setShowCaseStudy(null)}
            style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}
          >
            View More Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Case Studies
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore my projects to experience innovative design and uncover creative solutions.
        </motion.p>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.length === 0 ? (
            <div>No projects found</div>
          ) : null}
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <button 
                      onClick={() => handleProjectClick(project)} 
                      className="project-link"
                    >
                      <HiEye />
                      <span>View Project</span>
                    </button>
                    {!project.hasDetailedCaseStudy && (
                      <a href={project.link} className="project-external" target="_blank" rel="noopener noreferrer">
                        <HiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-type">{project.type}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3>Interested in working together?</h3>
          <p>I'm always open to discussing new opportunities and exciting projects.</p>
          <a href="#contact" className="btn-primary">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
