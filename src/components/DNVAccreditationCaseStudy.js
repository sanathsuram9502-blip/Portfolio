import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowLeft, HiClock, HiUser, HiExternalLink, HiUsers, HiChartBar, HiDesktopComputer } from 'react-icons/hi';
import './DNVAccreditationCaseStudy.css';

const DNVAccreditationCaseStudy = ({ onBack }) => {
  // Get the base URL for images
  const baseImageUrl = (process.env.PUBLIC_URL || '') + '/images';
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projectDetails = {
    timeline: '8 Months',
    role: 'Lead UI/UX Designer',
    client: 'Medlaunch Concepts',
    scope: '100+ Screens',
    year: '2025'
  };

  const uxProcessSteps = [
    {
      phase: 'Discovery & Research',
      duration: '4 weeks',
      icon: <HiUsers />,
      activities: [
        'Stakeholder interviews with healthcare administrators',
        'User research with hospital quality managers',
        'Competitive analysis of existing accreditation platforms',
        'Domain expert consultations with DNV compliance specialists',
        'Current workflow analysis and pain point identification'
      ],
      deliverables: [
        'User personas and journey maps',
        'Competitive analysis report',
        'Requirements documentation',
        'Research insights summary'
      ]
    },
    {
      phase: 'Information Architecture',
      duration: '3 weeks',
      icon: <HiChartBar />,
      activities: [
        'Content inventory and audit of 100+ screens',
        'Card sorting exercises with healthcare professionals',
        'Site mapping and user flow development',
        'Navigation hierarchy optimization',
        'Compliance workflow mapping'
      ],
      deliverables: [
        'Site architecture diagrams',
        'User flow charts',
        'Navigation structure',
        'Content strategy framework'
      ]
    },
    {
      phase: 'Design & Prototyping',
      duration: '12 weeks',
      icon: <HiDesktopComputer />,
      activities: [
        'Low-fidelity wireframing for all 100+ screens',
        'Design system creation for healthcare compliance',
        'High-fidelity mockup development',
        'Interactive prototype creation',
        'Accessibility compliance (WCAG 2.1 AA)'
      ],
      deliverables: [
        'Complete wireframe library',
        'Design system documentation',
        'High-fidelity screen designs',
        'Interactive prototypes',
        'Component library'
      ]
    },
    {
      phase: 'Testing & Iteration',
      duration: '4 weeks',
      icon: <HiUsers />,
      activities: [
        'Usability testing with hospital staff',
        'Compliance validation with DNV experts',
        'Accessibility testing and validation',
        'Performance and workflow optimization',
        'Stakeholder feedback integration'
      ],
      deliverables: [
        'Usability testing reports',
        'Design iteration documentation',
        'Final design specifications',
        'Development handoff materials'
      ]
    }
  ];

  const keyFeatures = [
    {
      title: 'Compliance Dashboard',
      description: 'Centralized view of accreditation status, pending items, and compliance metrics',
      complexity: 'High',
      screens: '15 screens',
      userImpact: 'Reduced compliance oversight time by 60%'
    },
    {
      title: 'Documentation Management',
      description: 'Secure document upload, version control, and approval workflows',
      complexity: 'High',
      screens: '25 screens',
      userImpact: 'Streamlined document processes for 500+ staff members'
    },
    {
      title: 'Audit Trail System',
      description: 'Comprehensive tracking of all changes, approvals, and compliance activities',
      complexity: 'Medium',
      screens: '20 screens',
      userImpact: 'Enhanced transparency and accountability'
    },
    {
      title: 'Reporting & Analytics',
      description: 'Custom report generation and data visualization for compliance metrics',
      complexity: 'High',
      screens: '18 screens',
      userImpact: 'Improved decision-making with data insights'
    },
    {
      title: 'User Management',
      description: 'Role-based access control and permission management system',
      complexity: 'Medium',
      screens: '12 screens',
      userImpact: 'Secure and organized user access'
    },
    {
      title: 'Notification Center',
      description: 'Smart alerts and reminders for compliance deadlines and tasks',
      complexity: 'Medium',
      screens: '10 screens',
      userImpact: 'Zero missed compliance deadlines'
    }
  ];

  const designChallenges = [
    {
      challenge: 'Complex Healthcare Regulations',
      solution: 'Created intuitive interfaces that guide users through complex compliance workflows step-by-step',
      impact: 'Reduced training time for new users from 2 weeks to 3 days'
    },
    {
      challenge: 'Information Overload',
      solution: 'Implemented progressive disclosure and smart filtering to surface relevant information contextually',
      impact: 'Improved task completion rates by 45%'
    },
    {
      challenge: 'Multi-role User Base',
      solution: 'Designed role-specific dashboards and customizable interfaces for different user types',
      impact: 'Increased user satisfaction scores by 40%'
    },
    {
      challenge: 'Legacy System Integration',
      solution: 'Created seamless data import/export flows and maintained familiar interaction patterns',
      impact: 'Smooth migration with 95% user adoption rate'
    }
  ];

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

        {/* UX Design Process */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>UX Design Process</h2>
          <p className="process-intro">
            Given the complexity of healthcare compliance and the scale of 100+ screens, I followed a 
            comprehensive UX design process focused on user research, iterative design, and continuous validation.
          </p>
          
          <div className="process-timeline">
            {uxProcessSteps.map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="step-header">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-info">
                    <h3>{step.phase}</h3>
                    <span className="step-duration">{step.duration}</span>
                  </div>
                </div>
                
                <div className="step-content">
                  <div className="activities">
                    <h4>Key Activities</h4>
                    <ul>
                      {step.activities.map((activity, actIndex) => (
                        <li key={actIndex}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="deliverables">
                    <h4>Deliverables</h4>
                    <ul>
                      {step.deliverables.map((deliverable, delIndex) => (
                        <li key={delIndex}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Design & Prototyping */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Design & Prototyping</h2>
          <p className="section-intro">
            Starting with low-fidelity wireframes, I mapped out the complex user flows and information architecture 
            for all 100+ screens. These wireframes helped stakeholders visualize the structure and validate the 
            user experience before moving to high-fidelity designs.
          </p>
          
          <div className="wireframes-grid">
            <motion.div
              className="wireframe-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="wireframe-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/wireframes/wireframe_dnv_healthcare_homepage.png" 
                  alt="DNV Healthcare Homepage Wireframe"
                />
              </div>
              <div className="wireframe-details">
                <h4>Homepage & Navigation</h4>
                <p>Main entry point with clear navigation structure and role-based access controls</p>
              </div>
            </motion.div>

            <motion.div
              className="wireframe-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="wireframe-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/wireframes/wireframe_dnv_quote_request_form.png" 
                  alt="Quote Request Form Wireframe"
                />
              </div>
              <div className="wireframe-details">
                <h4>Quote Request Flow</h4>
                <p>Complex multi-step form with smart field validation and progressive disclosure</p>
              </div>
            </motion.div>

            <motion.div
              className="wireframe-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="wireframe-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/wireframes/wireframe_dnv_hospital_profile.png" 
                  alt="Hospital Profile Wireframe"
                />
              </div>
              <div className="wireframe-details">
                <h4>Organization Profile</h4>
                <p>Comprehensive hospital information management with document handling</p>
              </div>
            </motion.div>

            <motion.div
              className="wireframe-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="wireframe-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/wireframes/wireframe_dnv_hospital_lookup_map.png" 
                  alt="Hospital Lookup Map Wireframe"
                />
              </div>
              <div className="wireframe-details">
                <h4>Hospital Lookup & Mapping</h4>
                <p>Interactive map interface for finding and managing hospital locations</p>
              </div>
            </motion.div>

            <motion.div
              className="wireframe-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="wireframe-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/wireframes/wireframe_clara_ai_assistant.png" 
                  alt="Clara AI Assistant Wireframe"
                />
              </div>
              <div className="wireframe-details">
                <h4>AI Assistant Integration</h4>
                <p>Clara AI helper for guiding users through complex compliance processes</p>
              </div>
            </motion.div>

            <motion.div
              className="wireframe-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="wireframe-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/wireframes/image.png" 
                  alt="Additional Wireframe"
                />
              </div>
              <div className="wireframe-details">
                <h4>Dashboard Analytics</h4>
                <p>Data visualization and reporting interface for compliance metrics</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Design System */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2>Design System</h2>
          <p className="section-intro">
            To ensure consistency across 100+ screens and enable efficient development, I created a comprehensive 
            design system tailored for healthcare compliance interfaces. The system prioritizes accessibility, 
            clarity, and trust-building elements essential for medical environments.
          </p>
          
          <div className="design-system-grid">
            <motion.div
              className="design-system-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="design-system-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/design-system/Color Palette.png" 
                  alt="Color Palette Design System"
                />
              </div>
              <div className="design-system-details">
                <h4>Color Palette</h4>
                <p>Healthcare-focused color scheme ensuring WCAG 2.1 AA compliance and professional trust</p>
              </div>
            </motion.div>

            <motion.div
              className="design-system-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="design-system-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/design-system/Typography.png" 
                  alt="Typography Design System"
                />
              </div>
              <div className="design-system-details">
                <h4>Typography System</h4>
                <p>Clear hierarchy and readable fonts optimized for complex medical documentation</p>
              </div>
            </motion.div>

            <motion.div
              className="design-system-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="design-system-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/design-system/Button.png" 
                  alt="Button Component System"
                />
              </div>
              <div className="design-system-details">
                <h4>Button Components</h4>
                <p>Comprehensive button library with states, sizes, and contextual variations</p>
              </div>
            </motion.div>

            <motion.div
              className="design-system-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="design-system-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/design-system/Action.png" 
                  alt="Action Components"
                />
              </div>
              <div className="design-system-details">
                <h4>Action Components</h4>
                <p>Interactive elements and controls for complex workflow management</p>
              </div>
            </motion.div>

            <motion.div
              className="design-system-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="design-system-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/design-system/Label.png" 
                  alt="Label System"
                />
              </div>
              <div className="design-system-details">
                <h4>Label System</h4>
                <p>Consistent labeling and form elements for clear user guidance</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Final Designs */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Final Designs</h2>
          <p className="section-intro">
            The final high-fidelity designs showcase the complete user experience, from initial login through 
            complex compliance workflows. Each screen demonstrates the design system in action while solving 
            specific user needs in the healthcare accreditation process.
          </p>
          
          <div className="final-designs-grid">
            <motion.div
              className="final-design-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="final-design-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/final-designs/Login-Hospital Login.png" 
                  alt="Hospital Login Interface"
                />
              </div>
              <div className="final-design-details">
                <h4>Authentication Portal</h4>
                <p>Secure login interface with role-based access and seamless integration options</p>
                <div className="design-features">
                  <span className="feature-tag">Multi-factor Auth</span>
                  <span className="feature-tag">Role Selection</span>
                  <span className="feature-tag">SSO Integration</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="final-design-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="final-design-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/final-designs/New DNV Quote Request.png" 
                  alt="DNV Quote Request Interface"
                />
              </div>
              <div className="final-design-details">
                <h4>Quote Request Form</h4>
                <p>Streamlined multi-step form with intelligent validation and progress tracking</p>
                <div className="design-features">
                  <span className="feature-tag">Smart Validation</span>
                  <span className="feature-tag">Progress Tracking</span>
                  <span className="feature-tag">Auto-save</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="final-design-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="final-design-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/final-designs/New or Existing.png" 
                  alt="User Path Selection Interface"
                />
              </div>
              <div className="final-design-details">
                <h4>User Journey Selection</h4>
                <p>Clear onboarding flow separating new and existing users for optimized experiences</p>
                <div className="design-features">
                  <span className="feature-tag">Clear CTAs</span>
                  <span className="feature-tag">User Guidance</span>
                  <span className="feature-tag">Path Optimization</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="final-design-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="final-design-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/final-designs/Initial Page.png" 
                  alt="Dashboard Initial Page"
                />
              </div>
              <div className="final-design-details">
                <h4>Dashboard Overview</h4>
                <p>Comprehensive dashboard providing at-a-glance compliance status and key metrics</p>
                <div className="design-features">
                  <span className="feature-tag">Real-time Data</span>
                  <span className="feature-tag">Status Tracking</span>
                  <span className="feature-tag">Quick Actions</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="final-design-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="final-design-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/final-designs/Hospital Profile - Organization Information.png" 
                  alt="Hospital Organization Profile"
                />
              </div>
              <div className="final-design-details">
                <h4>Organization Management</h4>
                <p>Detailed hospital profile management with document handling and compliance tracking</p>
                <div className="design-features">
                  <span className="feature-tag">Document Upload</span>
                  <span className="feature-tag">Version Control</span>
                  <span className="feature-tag">Compliance Status</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="final-design-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="final-design-image">
                <img 
                  src=baseImageUrl + '/dnv-case-study/final-designs/analysis.png" 
                  alt="Analytics and Reporting Interface"
                />
              </div>
              <div className="final-design-details">
                <h4>Analytics & Reporting</h4>
                <p>Advanced analytics dashboard with custom reporting and data visualization tools</p>
                <div className="design-features">
                  <span className="feature-tag">Data Visualization</span>
                  <span className="feature-tag">Custom Reports</span>
                  <span className="feature-tag">Export Tools</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2>Key Features & Modules</h2>
          <div className="features-grid">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="feature-header">
                  <h3>{feature.title}</h3>
                  <div className="feature-meta">
                    <span className={`complexity ${feature.complexity.toLowerCase()}`}>
                      {feature.complexity} Complexity
                    </span>
                    <span className="screen-count">{feature.screens}</span>
                  </div>
                </div>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-impact">
                  <strong>Impact:</strong> {feature.userImpact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Design Challenges */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Design Challenges & Solutions</h2>
          <div className="challenges-container">
            {designChallenges.map((item, index) => (
              <motion.div
                key={index}
                className="challenge-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="challenge-section">
                  <h4>Challenge</h4>
                  <p>{item.challenge}</p>
                </div>
                <div className="solution-section">
                  <h4>Solution</h4>
                  <p>{item.solution}</p>
                </div>
                <div className="impact-section">
                  <h4>Impact</h4>
                  <p>{item.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
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
            
            <div className="testimonial">
              <blockquote>
                "The DNV Accreditation Portal has transformed how we manage compliance. What used to take 
                months now takes weeks, and our staff feels confident navigating the complex requirements."
              </blockquote>
              <cite>— Chief Quality Officer, Partner Hospital</cite>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="case-study-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
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
    </div>
  );
};

export default DNVAccreditationCaseStudy;
