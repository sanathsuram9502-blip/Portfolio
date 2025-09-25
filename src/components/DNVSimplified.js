import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowLeft, HiClock, HiUser, HiExternalLink, HiUsers, HiChartBar, HiDesktopComputer } from 'react-icons/hi';
import './DNVAccreditationCaseStudy.css';

const DNVSimplified = ({ onBack }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [lightboxImage, setLightboxImage] = useState(null);

  const projectDetails = {
    timeline: '8 Months',
    role: 'Lead UI/UX Designer',
    client: 'Medlaunch Concepts',
    scope: '100+ Screens',
    year: '2025'
  };

  return (
    <div className="dnv-case-study" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="case-study-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <button className="back-button" onClick={onBack}>
            <HiArrowLeft />
            Back to Projects
          </button>
          
          <div className="case-study-hero">
            <h1>DNV Accreditation Portal</h1>
            <p className="hero-subtitle">
              A comprehensive hospital accreditation platform designed for healthcare quality management, 
              compliance tracking, and certification workflows. This enterprise-scale solution encompasses 
              100+ screens serving multiple user roles in the healthcare compliance ecosystem.
            </p>
            
            <div className="project-meta">
              <div className="meta-item">
                <HiClock />
                <span>Timeline: {projectDetails.timeline}</span>
              </div>
              <div className="meta-item">
                <HiUser />
                <span>Role: {projectDetails.role}</span>
              </div>
              <div className="meta-item">
                <HiDesktopComputer />
                <span>Scope: {projectDetails.scope}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Project Overview</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <h3>The Challenge</h3>
              <p>
                Healthcare organizations struggle with complex accreditation processes involving hundreds of 
                compliance requirements, multiple stakeholders, and extensive documentation. The existing 
                manual processes were time-consuming, error-prone, and difficult to track.
              </p>
            </div>
            <div className="overview-card">
              <h3>The Solution</h3>
              <p>
                A comprehensive digital platform that streamlines the entire accreditation lifecycle, 
                from initial assessment to final certification, with intelligent workflows, automated 
                reminders, and real-time compliance tracking.
              </p>
            </div>
            <div className="overview-card">
              <h3>The Impact</h3>
              <p>
                Reduced accreditation preparation time by 70%, improved compliance accuracy by 85%, 
                and enabled seamless collaboration across hospital departments and external auditors.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Design & Prototyping Section */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
              <h2>Design & Prototyping</h2>
              <p className="section-intro">
                From initial wireframes to polished final designs, this section showcases the complete design evolution 
                of the DNV Accreditation Portal. Starting with low-fidelity wireframes to map complex user flows, 
                then progressing to high-fidelity interfaces that bring the healthcare compliance platform to life.
              </p>
              
              <div className="wireframes-grid">
                <div className="wireframe-item">
                  <div className="wireframe-image" onClick={() => setLightboxImage({
                    src: "/images/dnv-case-study/wireframes/wireframe_dnv_healthcare_homepage.png",
                    alt: "DNV Healthcare Homepage Wireframe",
                    title: "Homepage & Navigation"
                  })}>
                    <img 
                      src="/images/dnv-case-study/wireframes/wireframe_dnv_healthcare_homepage.png" 
                      alt="DNV Healthcare Homepage Wireframe"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none', padding: '2rem', textAlign: 'center'}}>
                      Image not available
                    </div>
                    <div className="image-overlay">
                      <span>Click to view full size</span>
                    </div>
                  </div>
                  <div className="wireframe-details">
                    <h4>Homepage & Navigation</h4>
                    <p>Main entry point with clear navigation structure and role-based access controls</p>
                  </div>
                </div>

                <div className="wireframe-item">
                  <div className="wireframe-image" onClick={() => setLightboxImage({
                    src: "/images/dnv-case-study/wireframes/wireframe_dnv_quote_request_form.png",
                    alt: "Quote Request Form Wireframe",
                    title: "Quote Request Flow"
                  })}>
                    <img 
                      src="/images/dnv-case-study/wireframes/wireframe_dnv_quote_request_form.png" 
                      alt="Quote Request Form Wireframe"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none', padding: '2rem', textAlign: 'center'}}>
                      Image not available
                    </div>
                    <div className="image-overlay">
                      <span>Click to view full size</span>
                    </div>
                  </div>
                  <div className="wireframe-details">
                    <h4>Quote Request Flow</h4>
                    <p>Complex multi-step form with smart field validation and progressive disclosure</p>
                  </div>
                </div>

                <div className="wireframe-item">
                  <div className="wireframe-image" onClick={() => setLightboxImage({
                    src: "/images/dnv-case-study/final-designs/Login-Hospital Login.png",
                    alt: "Hospital Login Interface",
                    title: "Authentication Portal"
                  })}>
                    <img 
                      src="/images/dnv-case-study/final-designs/Login-Hospital Login.png" 
                      alt="Hospital Login Interface"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none', padding: '2rem', textAlign: 'center'}}>
                      Image not available
                    </div>
                    <div className="image-overlay">
                      <span>Click to view full size</span>
                    </div>
                  </div>
                  <div className="wireframe-details">
                    <h4>Authentication Portal</h4>
                    <p>Secure login interface with role-based access and seamless integration options</p>
                  </div>
                </div>

                <div className="wireframe-item">
                  <div className="wireframe-image" onClick={() => setLightboxImage({
                    src: "/images/dnv-case-study/final-designs/New or Existing.png",
                    alt: "User Path Selection Interface",
                    title: "User Journey Selection"
                  })}>
                    <img 
                      src="/images/dnv-case-study/final-designs/New or Existing.png" 
                      alt="User Path Selection Interface"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none', padding: '2rem', textAlign: 'center'}}>
                      Image not available
                    </div>
                    <div className="image-overlay">
                      <span>Click to view full size</span>
                    </div>
                  </div>
                  <div className="wireframe-details">
                    <h4>User Journey Selection</h4>
                    <p>Clear onboarding flow separating new and existing users for optimized experiences</p>
                  </div>
                </div>

                <div className="wireframe-item">
                  <div className="wireframe-image" onClick={() => setLightboxImage({
                    src: "/images/dnv-case-study/final-designs/New DNV Quote Request.png",
                    alt: "DNV Quote Request Interface",
                    title: "Quote Request Form"
                  })}>
                    <img 
                      src="/images/dnv-case-study/final-designs/New DNV Quote Request.png" 
                      alt="DNV Quote Request Interface"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none', padding: '2rem', textAlign: 'center'}}>
                      Image not available
                    </div>
                    <div className="image-overlay">
                      <span>Click to view full size</span>
                    </div>
                  </div>
                  <div className="wireframe-details">
                    <h4>Quote Request Form</h4>
                    <p>Streamlined multi-step form with intelligent validation and progress tracking</p>
                  </div>
                </div>

                <div className="wireframe-item">
                  <div className="wireframe-image" onClick={() => setLightboxImage({
                    src: "/images/dnv-case-study/final-designs/Initial Page.png",
                    alt: "Dashboard Initial Page",
                    title: "Dashboard Overview"
                  })}>
                    <img 
                      src="/images/dnv-case-study/final-designs/Initial Page.png" 
                      alt="Dashboard Initial Page"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none', padding: '2rem', textAlign: 'center'}}>
                      Image not available
                    </div>
                    <div className="image-overlay">
                      <span>Click to view full size</span>
                    </div>
                  </div>
                  <div className="wireframe-details">
                    <h4>Dashboard Overview</h4>
                    <p>Comprehensive dashboard providing at-a-glance compliance status and key metrics</p>
                  </div>
                </div>

                <div className="wireframe-item">
                  <div className="wireframe-image" onClick={() => setLightboxImage({
                    src: "/images/dnv-case-study/final-designs/Hospital Profile - Organization Information.png",
                    alt: "Hospital Organization Profile",
                    title: "Organization Management"
                  })}>
                    <img 
                      src="/images/dnv-case-study/final-designs/Hospital Profile - Organization Information.png" 
                      alt="Hospital Organization Profile"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none', padding: '2rem', textAlign: 'center'}}>
                      Image not available
                    </div>
                    <div className="image-overlay">
                      <span>Click to view full size</span>
                    </div>
                  </div>
                  <div className="wireframe-details">
                    <h4>Organization Management</h4>
                    <p>Detailed hospital profile management with document handling and compliance tracking</p>
                  </div>
                </div>

                <div className="wireframe-item">
                  <div className="wireframe-image" onClick={() => setLightboxImage({
                    src: "/images/dnv-case-study/final-designs/analysis.png",
                    alt: "Analytics and Reporting Interface",
                    title: "Analytics & Reporting"
                  })}>
                    <img 
                      src="/images/dnv-case-study/final-designs/analysis.png" 
                      alt="Analytics and Reporting Interface"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{display: 'none', padding: '2rem', textAlign: 'center'}}>
                      Image not available
                    </div>
                    <div className="image-overlay">
                      <span>Click to view full size</span>
                    </div>
                  </div>
                  <div className="wireframe-details">
                    <h4>Analytics & Reporting</h4>
                    <p>Advanced analytics dashboard with custom reporting and data visualization tools</p>
                  </div>
                </div>
              </div>
        </motion.section>

        {/* Results */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Results & Impact</h2>
          <div className="results-container">
            <div className="results-grid">
              <div className="result-card">
                <div className="result-number">70%</div>
                <div className="result-label">Reduction in accreditation prep time</div>
              </div>
              <div className="result-card">
                <div className="result-number">85%</div>
                <div className="result-label">Improvement in compliance accuracy</div>
              </div>
              <div className="result-card">
                <div className="result-number">95%</div>
                <div className="result-label">User adoption rate within 3 months</div>
              </div>
              <div className="result-card">
                <div className="result-number">60%</div>
                <div className="result-label">Reduction in oversight time</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="case-study-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="cta-content">
            <h3>Ready to transform your healthcare workflow?</h3>
            <p>Let's discuss how thoughtful UX design can simplify complex compliance processes.</p>
            <a href="#contact" className="btn-primary">
              Start a Conversation
              <HiExternalLink />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="lightbox-overlay"
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
                {lightboxImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DNVSimplified;
