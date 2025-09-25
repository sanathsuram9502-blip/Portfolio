import React from 'react';
import { useTheme } from '../context/ThemeContext';

const DNVCaseStudySimple = ({ onBack }) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0a0a', 
      color: '#ffffff',
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Header */}
      <button 
        onClick={onBack}
        style={{
          padding: '1rem 2rem',
          background: '#3b82f6',
          color: 'white',
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
          DNV Accreditation Portal
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2rem' }}>
          Healthcare Accreditation Management Platform
        </p>
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#06b6d4' }}>⏱️</span>
            <span>8 months</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#06b6d4' }}>👤</span>
            <span>Lead UX Designer</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#06b6d4' }}>👥</span>
            <span>6 designers, 4 developers</span>
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
              Healthcare organizations struggled with complex, time-consuming accreditation processes using outdated systems that lacked clarity and efficiency, leading to delayed certifications and frustrated users.
            </p>
          </div>
          <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>The Solution</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              Designed a comprehensive digital platform that streamlines the entire accreditation workflow with intuitive interfaces, clear progress tracking, and automated processes to reduce complexity and improve user experience.
            </p>
          </div>
        </div>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.7' }}>
          The DNV Accreditation Portal is a comprehensive healthcare accreditation management platform designed to streamline the complex process of healthcare facility certifications. This project focused on creating an intuitive digital experience that guides healthcare organizations through accreditation requirements, document management, and compliance tracking with DNV GL Healthcare standards.
        </p>
      </div>

      {/* Design Process */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#f1f5f9' }}>Design & Prototyping</h2>
        <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>
          The design process included extensive user research, wireframing, and creating a comprehensive design system to ensure consistency across the platform's complex workflows.
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
                src: "/images/dnv-case-study/wireframes/wireframe_dnv_healthcare_homepage.png",
                title: "Healthcare Homepage",
                desc: "Main landing page wireframe showing key navigation and features"
              },
              { 
                src: "/images/dnv-case-study/wireframes/wireframe_dnv_hospital_lookup_map.png",
                title: "Hospital Lookup Map", 
                desc: "Interactive map interface for finding healthcare facilities"
              },
              { 
                src: "/images/dnv-case-study/wireframes/wireframe_dnv_hospital_profile.png",
                title: "Hospital Profile",
                desc: "Detailed facility information and accreditation status"
              },
              { 
                src: "/images/dnv-case-study/wireframes/wireframe_dnv_quote_request_form.png",
                title: "Quote Request Form",
                desc: "Streamlined form for requesting accreditation quotes"
              },
              { 
                src: "/images/dnv-case-study/wireframes/wireframe_clara_ai_assistant.png",
                title: "AI Assistant Interface",
                desc: "Clara AI helper for guiding users through processes"
              },
              { 
                src: "/images/dnv-case-study/wireframes/image.png",
                title: "Additional Wireframe",
                desc: "Supporting wireframe for complex user flows"
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
                    <span>🏥</span>
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

        {/* Design System Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#06b6d4' }}>Design System Components</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem'
          }}>
            {[
              { 
                src: "/images/dnv-case-study/design-system/Color Palette.png",
                title: "Color Palette",
                desc: "Brand colors and accessibility-compliant color system"
              },
              { 
                src: "/images/dnv-case-study/design-system/Typography.png",
                title: "Typography System",
                desc: "Hierarchical text styles for consistent communication"
              },
              { 
                src: "/images/dnv-case-study/design-system/Button.png",
                title: "Button Components",
                desc: "Interactive button states and variations"
              },
              { 
                src: "/images/dnv-case-study/design-system/Label.png",
                title: "Label System",
                desc: "Consistent labeling for forms and navigation"
              },
              { 
                src: "/images/dnv-case-study/design-system/Action.png",
                title: "Action Components",
                desc: "Interactive elements and micro-interactions"
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
                    <span style={{ marginTop: '1rem' }}>Loading design system...</span>
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
                src: "/images/dnv-case-study/final-designs/Initial Page.png",
                title: "Landing Page",
                desc: "Clean, professional entry point to the accreditation portal"
              },
              { 
                src: "/images/dnv-case-study/final-designs/Login-Hospital Login.png",
                title: "Hospital Login",
                desc: "Secure authentication interface for healthcare facilities"
              },
              { 
                src: "/images/dnv-case-study/final-designs/Hospital Profile - Organization Information.png",
                title: "Organization Profile",
                desc: "Comprehensive hospital information and accreditation status"
              },
              { 
                src: "/images/dnv-case-study/final-designs/New or Existing.png",
                title: "User Journey Selection",
                desc: "Clear onboarding flow separating new and existing users"
              },
              { 
                src: "/images/dnv-case-study/final-designs/New DNV Quote Request.png",
                title: "Quote Request Form",
                desc: "Streamlined multi-step form with intelligent validation"
              },
              { 
                src: "/images/dnv-case-study/final-designs/analysis.png",
                title: "Analytics Dashboard",
                desc: "Data visualization for tracking accreditation progress"
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
                    <span>💻</span>
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

      {/* Key Features */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#f1f5f9' }}>Key Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            { title: "Clara AI Assistant", desc: "Intelligent guidance system to help users navigate complex accreditation processes" },
            { title: "Progress Tracking", desc: "Real-time visibility into accreditation status and next steps" },
            { title: "Document Management", desc: "Centralized repository for all accreditation-related documentation" },
            { title: "Interactive Maps", desc: "Geographic visualization of healthcare facilities and their accreditation status" }
          ].map((feature, index) => (
            <div key={index} style={{ 
              background: '#1e293b', 
              padding: '2rem', 
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ color: '#06b6d4', marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#f1f5f9' }}>Results & Impact</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {[
            { value: "+70%", metric: "Process Efficiency", desc: "Reduction in accreditation completion time" },
            { value: "+85%", metric: "User Satisfaction", desc: "Improvement in overall user experience" },
            { value: "+50%", metric: "Document Management", desc: "Faster document processing and retrieval" }
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
          Ready to streamline your next project?
        </h2>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Let's collaborate to create intuitive digital experiences that solve complex challenges.
        </p>
        <button 
          onClick={onBack}
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
};

export default DNVCaseStudySimple;
