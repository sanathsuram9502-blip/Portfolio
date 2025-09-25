import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowLeft, HiClock, HiUser, HiExternalLink, HiUsers, HiChartBar, HiDesktopComputer, HiDeviceMobile } from 'react-icons/hi';
import './DNVAccreditationCaseStudy.css'; // Reusing DNV styles for consistency

const BSNLCaseStudy = ({ onBack }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [lightboxImage, setLightboxImage] = useState(null);

  const projectDetails = {
    title: "BSNL App Redesign",
    subtitle: "Comprehensive Mobile Application UX/UI Redesign",
    duration: "6 months",
    role: "Lead UX/UI Designer",
    team: "4 designers, 3 developers",
    overview: "This project involved a comprehensive redesign of the existing BSNL mobile application, focusing on enhancing user experience (UX) and user interface (UI) to create a more intuitive, efficient, and visually appealing platform for managing mobile services. The goal was to address common user frustrations with legacy telecom apps, such as cluttered interfaces, difficult navigation, and lack of clarity, by implementing a modern design language and streamlining core functionalities.",
    problem: "The existing BSNL mobile app suffered from poor user experience with cluttered interfaces, confusing navigation, and outdated design patterns that frustrated users trying to manage their telecom services efficiently.",
    solution: "Redesigned the entire app with a modern, intuitive interface focusing on simplified navigation, clear visual hierarchy, and streamlined user flows for essential tasks like account management, bill payments, and service requests."
  };

  const uxProcessSteps = [
    {
      title: "User Research & Analysis",
      description: "Conducted comprehensive user interviews and usability testing to identify pain points in the existing app experience.",
      icon: HiUsers
    },
    {
      title: "Information Architecture",
      description: "Restructured the app's navigation and content organization to create a more logical and intuitive user flow.",
      icon: HiDesktopComputer
    },
    {
      title: "Wireframing & Prototyping",
      description: "Created low-fidelity wireframes and interactive prototypes to test and validate design concepts.",
      icon: HiDeviceMobile
    },
    {
      title: "Visual Design & Testing",
      description: "Developed high-fidelity designs with modern UI components and conducted usability testing for validation.",
      icon: HiChartBar
    }
  ];

  const keyFeatures = [
    {
      title: "Simplified Dashboard",
      description: "Clean, organized account overview with quick access to essential information and actions."
    },
    {
      title: "Streamlined Payments",
      description: "Intuitive bill payment flow with multiple payment options and transaction history."
    },
    {
      title: "Service Management",
      description: "Easy access to all BSNL services with clear categorization and quick actions."
    },
    {
      title: "Modern UI Components",
      description: "Contemporary design system with consistent visual language throughout the app."
    }
  ];

  const designChallenges = [
    {
      challenge: "Complex Legacy Features",
      solution: "Simplified feature organization through card-based design and progressive disclosure patterns."
    },
    {
      challenge: "Information Overload",
      solution: "Implemented clear visual hierarchy and prioritized content based on user research insights."
    },
    {
      challenge: "Poor Navigation",
      solution: "Redesigned navigation structure with intuitive iconography and logical grouping of features."
    }
  ];

  const results = [
    {
      metric: "User Satisfaction",
      value: "+45%",
      description: "Increase in user satisfaction scores"
    },
    {
      metric: "Task Completion",
      value: "+60%",
      description: "Improvement in task completion rates"
    },
    {
      metric: "Navigation Efficiency",
      value: "+35%",
      description: "Reduction in time to complete key tasks"
    }
  ];

  const wireframeImages = [
    {
      src: "/images/bsnl-case-study/BSNL App Home Screen Wireframe.png",
      alt: "BSNL App Home Screen Wireframe",
      title: "Home Screen Wireframe",
      description: "Initial wireframe design for the main dashboard"
    },
    {
      src: "/images/bsnl-case-study/BSNL App Account Screen Wireframe.png",
      alt: "BSNL App Account Screen Wireframe", 
      title: "Account Screen Wireframe",
      description: "User account management wireframe"
    },
    {
      src: "/images/bsnl-case-study/BSNL App Payments Screen Wireframe.png",
      alt: "BSNL App Payments Screen Wireframe",
      title: "Payments Screen Wireframe", 
      description: "Bill payment flow wireframe"
    },
    {
      src: "/images/bsnl-case-study/BSNL App Services Screen Wireframe.png",
      alt: "BSNL App Services Screen Wireframe",
      title: "Services Screen Wireframe",
      description: "Service management wireframe"
    }
  ];

  const finalDesignImages = [
    {
      src: "/images/bsnl-case-study/BSNL App Home Screen Hi-Fi Design.png",
      alt: "BSNL App Home Screen Hi-Fi Design",
      title: "Home Screen Design",
      description: "Final high-fidelity home screen design with modern UI"
    },
    {
      src: "/images/bsnl-case-study/BSNL App Account Screen Hi-Fi Design.png",
      alt: "BSNL App Account Screen Hi-Fi Design",
      title: "Account Screen Design", 
      description: "Clean account management interface"
    },
    {
      src: "/images/bsnl-case-study/BSNL App Payments Screen Hi-Fi Design.png",
      alt: "BSNL App Payments Screen Hi-Fi Design",
      title: "Payments Screen Design",
      description: "Streamlined payment experience"
    },
    {
      src: "/images/bsnl-case-study/BSNL App Services Screen Hi-Fi Design.png",
      alt: "BSNL App Services Screen Hi-Fi Design", 
      title: "Services Screen Design",
      description: "Organized service management interface"
    }
  ];

  return (
    <div className="case-study-container">
      {/* Header Section */}
      <motion.section 
        className="case-study-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.button 
            className="back-button"
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiArrowLeft /> Back to Projects
          </motion.button>
          
          <div className="header-content">
            <motion.h1 
              className="project-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {projectDetails.title}
            </motion.h1>
            
            <motion.p 
              className="project-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {projectDetails.subtitle}
            </motion.p>
            
            <div className="project-meta">
              <div className="meta-item">
                <HiClock className="meta-icon" />
                <span>{projectDetails.duration}</span>
              </div>
              <div className="meta-item">
                <HiUser className="meta-icon" />
                <span>{projectDetails.role}</span>
              </div>
              <div className="meta-item">
                <HiUsers className="meta-icon" />
                <span>{projectDetails.team}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Overview */}
      <motion.section 
        className="case-study-section"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <h2 className="section-title">Project Overview</h2>
          <div className="overview-grid">
            <div className="overview-item">
              <h3>The Challenge</h3>
              <p>{projectDetails.problem}</p>
            </div>
            <div className="overview-item">
              <h3>The Solution</h3>
              <p>{projectDetails.solution}</p>
            </div>
          </div>
          <p className="overview-description">{projectDetails.overview}</p>
        </div>
      </motion.section>

      {/* UX Design Process */}
      <motion.section 
        className="case-study-section process-section"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container">
          <h2 className="section-title">UX Design Process</h2>
          <div className="process-grid">
            {uxProcessSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="step-icon">
                  <step.icon />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Design & Prototyping Section - Always visible */}
      <motion.section 
        className="case-study-section"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="container">
          <h2 className="section-title">Design & Prototyping</h2>
          <p className="section-intro">
            The design process included creating wireframes to establish the structure and user flow, 
            followed by high-fidelity designs that brought the modern BSNL app experience to life.
          </p>

          {/* Wireframes */}
          <div className="wireframes-section">
            <h3 className="subsection-title">Wireframes & User Flow</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem',
              marginBottom: '3rem' 
            }}>
              {wireframeImages.map((image, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setLightboxImage(image)}
                >
                  <div style={{ 
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease',
                    background: '#f8fafc'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                  }}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        transition: 'transform 0.3s ease'
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
                      <HiDesktopComputer size={40} />
                      <span style={{ marginTop: '1rem' }}>Image Loading...</span>
                    </div>
                    
                    {/* Hover overlay */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                    >
                      <HiExternalLink size={24} style={{ marginRight: '0.5rem' }} />
                      Click to view full size
                    </div>
                  </div>
                  
                  <div style={{ padding: '1rem 0' }}>
                    <h4 style={{ 
                      margin: '0 0 0.5rem 0', 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      color: '#1e293b'
                    }}>
                      {image.title}
                    </h4>
                    <p style={{ 
                      margin: 0, 
                      color: '#64748b', 
                      fontSize: '0.9rem',
                      lineHeight: '1.5'
                    }}>
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final Designs */}
          <div className="final-designs-section">
            <h3 className="subsection-title">Final High-Fidelity Designs</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem' 
            }}>
              {finalDesignImages.map((image, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setLightboxImage(image)}
                >
                  <div style={{ 
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease',
                    background: '#f8fafc'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                  }}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        transition: 'transform 0.3s ease'
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
                      <HiDeviceMobile size={40} />
                      <span style={{ marginTop: '1rem' }}>Image Loading...</span>
                    </div>
                    
                    {/* Hover overlay */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                    >
                      <HiExternalLink size={24} style={{ marginRight: '0.5rem' }} />
                      Click to view full size
                    </div>
                  </div>
                  
                  <div style={{ padding: '1rem 0' }}>
                    <h4 style={{ 
                      margin: '0 0 0.5rem 0', 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      color: '#1e293b'
                    }}>
                      {image.title}
                    </h4>
                    <p style={{ 
                      margin: 0, 
                      color: '#64748b', 
                      fontSize: '0.9rem',
                      lineHeight: '1.5'
                    }}>
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section 
        className="case-study-section features-section"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            {keyFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Design Challenges */}
      <motion.section 
        className="case-study-section challenges-section"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="container">
          <h2 className="section-title">Design Challenges & Solutions</h2>
          <div className="challenges-grid">
            {designChallenges.map((item, index) => (
              <motion.div 
                key={index}
                className="challenge-card"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="challenge-content">
                  <h3>Challenge</h3>
                  <p>{item.challenge}</p>
                </div>
                <div className="solution-content">
                  <h3>Solution</h3>
                  <p>{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Results */}
      <motion.section 
        className="case-study-section results-section"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="container">
          <h2 className="section-title">Results & Impact</h2>
          <div className="results-grid">
            {results.map((result, index) => (
              <motion.div 
                key={index}
                className="result-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="result-value">{result.value}</div>
                <div className="result-metric">{result.metric}</div>
                <div className="result-description">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="case-study-cta"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="container">
          <div className="cta-content">
            <h2>Interested in working together?</h2>
            <p>Let's discuss how we can create exceptional user experiences for your next project.</p>
            <motion.button 
              className="btn-primary"
              onClick={onBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Projects
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'pointer'
          }}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '1.5rem',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>
            
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '80vh',
                objectFit: 'contain'
              }}
            />
            
            <div style={{
              padding: '1rem',
              backgroundColor: '#f8f9fa',
              borderTop: '1px solid #e9ecef'
            }}>
              <h4 style={{ margin: 0, color: '#333' }}>{lightboxImage.title}</h4>
              <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
                {lightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BSNLCaseStudy;