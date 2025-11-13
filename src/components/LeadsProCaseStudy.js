import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowLeft, HiClock, HiUser, HiExternalLink } from 'react-icons/hi';
import './LeadsProCaseStudy.css';

const LeadsProCaseStudy = ({ onBack }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projectDetails = {
    timeline: '4 Weeks',
    role: 'UI/UX Designer',
    client: 'Leads Pro CRM',
    year: '2024'
  };

  const problemPoints = [
    'Overwhelming dashboard layout with excessive information',
    'Lack of visual hierarchy making it difficult to focus on key performance indicators',
    'Inefficient call disposition tracking workflow'
  ];

  const goals = [
    'Minimize complexity in UI design while maintaining functionality',
    'Reduce information overload by structuring data intuitively',
    'Improve table and card designs for better data visualization'
  ];

  const improvements = [
    {
      section: 'Side Navigation',
      problems: [
        'Users were forced to hover over each icon to reveal its meaning, creating friction',
        'Absence of clear context or section headers reduced user confidence',
        'Trial-and-error exploration due to poor discoverability'
      ],
      solutions: [
        'Icon + Text Label Combo for instant recognition',
        'Visual feedback with color and bold text for active sections',
        'Persistent visibility with fixed sidebar for consistent orientation'
      ]
    },
    {
      section: 'Card Design',
      problems: [
        'Cards lacked hierarchy, giving each metric equal visual weight',
        'Heavy reliance on small fonts and text-based descriptions',
        'Users had to process all data points simultaneously'
      ],
      solutions: [
        'Emphasized main metrics with bold, larger fonts',
        'Split cards into balanced rows for better readability',
        'Introduced directional arrows and color-coded trends'
      ]
    },
    {
      section: 'Call Disposition Section',
      problems: [
        'Lacked visual clarity with too much upfront information',
        'Large buttons on every row created visual noise',
        'Overwhelming and unclear focus areas for new users'
      ],
      solutions: [
        'Restructured table with pagination for digestible content',
        'Compact eye icons replaced large buttons',
        'Color-coded pill badges for status indicators'
      ]
    },
    {
      section: 'Call Activity Section',
      problems: [
        'Lacked visual flow and comparative context',
        'All outcomes treated equally with no prioritization',
        'Users had to manually compare values across tiles'
      ],
      solutions: [
        'Bar graph visualization for immediate distribution understanding',
        'Distinct color coding for each call outcome',
        'Direct comparison and proportional insights'
      ]
    }
  ];

  return (
    <div className="case-study" ref={ref}>
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
            <h1>Leads Pro</h1>
            <p className="hero-subtitle">
              A CRM tailored for real estate, investors, and businesses to improve marketing and lead management. 
              Key features include property search, records management, direct mail automation, marketing sequences, 
              call disposition tracking, and analytics.
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
            </div>
          </div>
        </motion.div>

        {/* Problem Statement */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Problem Statement</h2>
          <p>
            The current Leads Pro dashboard presents challenges related to visual hierarchy, information overload, 
            inconsistent UI elements, and complex workflows. Users struggle with navigating key metrics and managing 
            their workflows efficiently. A redesign is needed to improve usability, reduce complexity, and ensure 
            a modern, consistent UI aligned with industry best practices.
          </p>
        </motion.section>

        {/* Project Goals */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>Project Goals</h2>
          <ul className="goals-list">
            {goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </motion.section>

        {/* Pain Points */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Pain Points</h2>
          <div className="pain-points-grid">
            {problemPoints.map((point, index) => (
              <div key={index} className="pain-point-card">
                <span className="pain-point-number">{index + 1}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Competitive Analysis */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2>Competitive Analysis</h2>
          <div className="competitive-insights">
            <h3>Key Takeaways from Competitors</h3>
            <div className="insights-grid">
              <div className="insight-card">
                <h4>Simple, clean UI</h4>
                <p>Users prefer dashboards with clear, minimalistic design elements.</p>
              </div>
              <div className="insight-card">
                <h4>Efficient data Presentation</h4>
                <p>Organizing information into digestible formats improves usability.</p>
              </div>
              <div className="insight-card">
                <h4>Consistent themes</h4>
                <p>A unified design language enhances user experience.</p>
              </div>
              <div className="insight-card">
                <h4>Proper contrast and spacing</h4>
                <p>Ensuring adequate contrast improves readability and usability.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Design Process */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Design Process</h2>
          <div className="design-process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h4>Research & Analysis</h4>
              <p>User interviews, competitive analysis, and current system audit to identify pain points and opportunities.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h4>Information Architecture</h4>
              <p>Restructured navigation and content hierarchy to improve user flow and reduce cognitive load.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h4>Wireframing</h4>
              <p>Low-fidelity wireframes to test layout concepts and validate design decisions early.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h4>Visual Design</h4>
              <p>High-fidelity mockups with proper visual hierarchy, color coding, and modern UI components.</p>
            </div>
          </div>
        </motion.section>

        {/* UI/UX Enhancements */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2>UI/UX Enhancements</h2>
          <div className="enhancements-container">
            {improvements.map((improvement, index) => (
              <div key={index} className="enhancement-section">
                <h3>{improvement.section}</h3>
                
                {/* Design Images Placeholder */}
                <div className="design-showcase">
                  <div className="design-comparison">
                    <div className="design-before">
                      <h5>Before</h5>
                      <div className="design-image-placeholder">
                        <div className="placeholder-content">
                          <span>Original {improvement.section}</span>
                          <p>Complex layout with poor hierarchy</p>
                        </div>
                      </div>
                    </div>
                    <div className="design-after">
                      <h5>After</h5>
                      <div className="design-image-placeholder improved">
                        <div className="placeholder-content">
                          <span>Redesigned {improvement.section}</span>
                          <p>Clean, intuitive interface</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="before-after-grid">
                  <div className="problems-section">
                    <h4>Problems</h4>
                    <ul>
                      {improvement.problems.map((problem, problemIndex) => (
                        <li key={problemIndex}>{problem}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="solutions-section">
                    <h4>Improvements</h4>
                    <ul>
                      {improvement.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2>Conclusion</h2>
          <div className="conclusion-content">
            <p>
              Enhanced clarity and usability by introducing a cleaner layout, better visual hierarchy, 
              and more intuitive navigation throughout the dashboard.
            </p>
            <p>
              Redesigned key components—like the sidebar, KPI cards, call disposition table, and call activity 
              section—to reduce cognitive load and streamline user actions.
            </p>
            <p>
              Shifted from static data displays to interactive, insight-driven visuals, helping users interpret 
              and act on information more efficiently.
            </p>
            <p>
              Improved user experience across all skill levels, making the platform more accessible for first-time 
              users while still powerful for advanced workflows.
            </p>
            <p>
              Transformed the dashboard from a functional tool into a decision-making assistant, reinforcing trust, 
              confidence, and productivity.
            </p>
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
            <h3>Interested in similar projects?</h3>
            <p>Let's discuss how I can help improve your product's user experience.</p>
            <a href="#contact" className="btn-primary">
              Get in Touch
              <HiExternalLink />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeadsProCaseStudy;
