import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowLeft, HiClock, HiUser, HiDesktopComputer, HiOfficeBuilding } from 'react-icons/hi';
import './DNVAccreditationCaseStudy.css';

const DNVAccreditationCaseStudy = ({ onBack }) => {
  const baseImageUrl = (process.env.PUBLIC_URL || '') + '/images/dnv-case-study';
  const [ref] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const complexityAreas = [
    {
      number: '01',
      title: 'Organization Discovery',
      description: 'Find the healthcare organization the user needs before entering deeper workflows.'
    },
    {
      number: '02',
      title: 'New vs. Existing Paths',
      description: 'Separate different starting conditions early so users are not exposed to irrelevant steps.'
    },
    {
      number: '03',
      title: 'Accreditation Requests',
      description: 'Guide users through information-heavy requests in a structured sequence.'
    },
    {
      number: '04',
      title: 'Organization Profiles',
      description: 'Keep related organization information together so users retain context.'
    },
    {
      number: '05',
      title: 'Administration',
      description: 'Separate user-management and administrative tasks from primary accreditation workflows.'
    },
    {
      number: '06',
      title: 'Analytics & Monitoring',
      description: 'Provide broader operational visibility without overloading transactional screens.'
    }
  ];

  const journeySteps = [
    'Enter',
    'Choose Path',
    'Find Organization',
    'Submit Request',
    'Maintain Organization',
    'Monitor'
  ];

  const journeyDetails = [
    {
      step: 'STEP 1 — ENTER THE EXPERIENCE',
      title: 'Entry & Authentication',
      src: 'final-designs/Login-Hospital Login.png',
      alt: 'Hospital login and authentication screen',
      description: 'The experience begins with a focused entry point before users reach organization and accreditation workflows.'
    },
    {
      step: 'STEP 2 — ESTABLISH THE PATH',
      title: 'New or Existing?',
      src: 'final-designs/New or Existing.png',
      alt: 'New or existing accreditation path selection',
      description: 'Rather than immediately presenting a complex accreditation form, the experience establishes whether the user is beginning a new relationship or working with an existing one. This allows subsequent information to stay relevant to the user\'s situation.'
    },
    {
      step: 'STEP 3 — FIND THE ORGANIZATION',
      title: 'Organization Discovery',
      src: 'final-designs/Hospital Search Result - Map View.png',
      alt: 'Hospital search results with map view',
      description: 'Organization search provides a dedicated discovery layer before users move into detailed organization or accreditation information. Findability becomes part of the core workflow rather than an afterthought.'
    },
    {
      step: 'STEP 4 — BEGIN THE REQUEST',
      title: 'Structured Request Flow',
      src: 'final-designs/New DNV Quote Request.png',
      alt: 'New DNV quote request form',
      description: 'Once the user\'s context is established, the request experience can focus on the information required for that task instead of mixing discovery, organization management, and request details together.'
    },
    {
      step: 'STEP 5 — MAINTAIN CONTEXT',
      title: 'Organization Profile',
      src: 'final-designs/Hospital Profile - Organization Information.png',
      secondarySrc: 'final-designs/Hospital Profile - Organization Information2.png',
      alt: 'Hospital organization profile information',
      secondaryAlt: 'Additional organization profile information view',
      description: 'The organization profile acts as a persistent context for information associated with a healthcare institution, making it easier to understand which entity the user is working with as they move through related tasks.'
    },
    {
      step: 'STEP 6 — MONITOR',
      title: 'Operational Visibility',
      src: 'final-designs/Initial Page.png',
      secondarySrc: 'final-designs/analysis.png',
      alt: 'Initial operational dashboard',
      secondaryAlt: 'Analytics and monitoring dashboard',
      description: 'Dashboard and analytical views provide broader visibility while remaining separate from task-focused accreditation workflows.'
    }
  ];

  const findabilityPrinciples = [
    {
      title: 'Search Before Navigation',
      description: 'Allow users to locate a known organization directly instead of forcing them through deep navigation.'
    },
    {
      title: 'Context With Results',
      description: 'Give users enough identifying information to distinguish between organizations with similar names.'
    },
    {
      title: 'Discovery → Detail',
      description: 'Once the correct organization is identified, transition into the organization profile where related information can stay grouped.'
    }
  ];

  const designExploration = [
    {
      number: '01',
      title: 'Entry & Orientation',
      question: 'How much context does a user need before choosing where to go?',
      explanation: 'The entry experience needed to orient users without immediately exposing the full complexity of accreditation workflows.'
    },
    {
      number: '02',
      title: 'Path Selection',
      question: 'When should the system determine whether the user is new or returning?',
      explanation: 'Separating new and existing paths early helped keep later steps relevant to the user\'s situation.'
    },
    {
      number: '03',
      title: 'Request Structure',
      question: 'How should an information-heavy accreditation request be organized?',
      explanation: 'The request experience needed a clear hierarchy so users could focus on the information required for the current task rather than process unrelated information at the same time.'
    },
    {
      number: '04',
      title: 'Organization Context',
      question: 'What information should stay together once a healthcare organization is selected?',
      explanation: 'Organization profiles became the persistent context for related information so users could understand which entity they were working with across connected tasks.'
    },
    {
      number: '05',
      title: 'Findability',
      question: 'How can users locate the correct healthcare organization efficiently?',
      explanation: 'Organization discovery was treated as a dedicated workflow rather than forcing users to navigate through multiple sections before reaching the entity they needed.'
    },
    {
      number: '06',
      title: 'Monitoring vs. Task Work',
      question: 'What belongs in analytics and monitoring views versus transactional workflows?',
      explanation: 'Operational monitoring was kept separate from task-focused accreditation screens so users could scan broader activity without adding unnecessary complexity to active workflows.'
    }
  ];

  const designSystemItems = [
    {
      src: 'design-system/Color Palette.png',
      title: 'Color Palette',
      description: 'Consistent visual language across the platform.',
      alt: 'Design system color palette'
    },
    {
      src: 'design-system/Typography.png',
      title: 'Typography',
      description: 'Clear hierarchy for dense enterprise information.',
      alt: 'Design system typography'
    },
    {
      src: 'design-system/Button.png',
      title: 'Buttons',
      description: 'Reusable action patterns and interaction states.',
      alt: 'Design system button components'
    },
    {
      src: 'design-system/Action.png',
      title: 'Actions',
      description: 'Consistent treatment of repeated workflow actions.',
      alt: 'Design system action components'
    },
    {
      src: 'design-system/Label.png',
      title: 'Labels',
      description: 'Clear, reusable labeling patterns for information-heavy interfaces.',
      alt: 'Design system label components'
    }
  ];

  const finalExperience = [
    {
      src: 'final-designs/Initial Page.png',
      title: 'Operational Home',
      description: 'A high-level entry view for monitoring activity without entering a specific accreditation task.',
      alt: 'Initial operational page'
    },
    {
      src: 'final-designs/New or Existing.png',
      title: 'Path Selection',
      description: 'Establishes the user\'s starting condition before deeper workflows begin.',
      alt: 'New or existing path selection'
    },
    {
      src: 'final-designs/New DNV Quote Request.png',
      title: 'Accreditation Request',
      description: 'A structured request flow focused on the information needed for that task.',
      alt: 'New DNV quote request screen'
    },
    {
      src: 'final-designs/Hospital Search Result - Map View.png',
      title: 'Organization Search',
      description: 'A dedicated discovery layer for locating the correct healthcare organization.',
      alt: 'Hospital search map results'
    },
    {
      src: 'final-designs/Hospital Profile - Organization Information.png',
      title: 'Organization Profile',
      description: 'Keeps related organization information together so users retain context.',
      alt: 'Hospital organization profile'
    },
    {
      src: 'final-designs/User Management.png',
      title: 'User Management',
      description: 'Administrative access management kept separate from primary accreditation workflows.',
      alt: 'User management screen'
    },
    {
      src: 'final-designs/analysis.png',
      title: 'Analytics',
      description: 'Broader operational visibility presented separately from transactional screens.',
      alt: 'Analytics dashboard'
    }
  ];

  const designChallenges = [
    {
      number: '01',
      title: 'No Established Design System',
      challenge: 'The product began with design guidance but without a mature reusable component system.',
      solution: 'I established reusable components and patterns so new workflows could be designed and implemented more consistently.',
      icon: '📄',
      solutionIcon: '🎨'
    },
    {
      number: '02',
      title: 'Different Product Directions',
      challenge: 'The PM and I sometimes had different ideas about how a workflow or layout should work.',
      solution: 'I explored alternatives, reviewed relevant product patterns, and used prototypes to make the tradeoffs easier to evaluate together.',
      icon: '💭',
      solutionIcon: '💡'
    },
    {
      number: '03',
      title: 'Ambiguous Layout Decisions',
      challenge: 'Some information-heavy screens did not have an obvious layout solution.',
      solution: 'I created multiple variations and compared how each option affected hierarchy, task flow, and implementation before selecting a direction.',
      icon: '❓',
      solutionIcon: '💬'
    },
    {
      number: '04',
      title: 'Limited Design QA Coverage',
      challenge: 'Early implementation did not have dedicated design QA coverage, creating inconsistencies between intended and implemented UI.',
      solution: 'I reviewed implemented screens and created a design QA checklist so issues could be communicated clearly to engineering.',
      icon: '⚠️',
      solutionIcon: '✅'
    }
  ];

  return (
    <div className="dnv-case-study" ref={ref}>
      <div className="container">
        <motion.div
          className="case-study-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button className="back-button" onClick={onBack} type="button">
            <HiArrowLeft />
            Back to Projects
          </button>

          <div className="case-study-hero">
            <h1>Digitalizing a Complex Healthcare Accreditation Journey</h1>
            <p className="hero-subtitle">
              Designing a scalable healthcare SaaS experience that transforms fragmented accreditation
              workflows into a structured digital system for healthcare institutions and accreditation teams.
            </p>
            <p className="hero-support">
              Designed as part of Medlaunch Concepts' healthcare accreditation platform work.
            </p>

            <div className="project-meta">
              <div className="meta-item">
                <HiUser />
                <span>Role: Product Design Lead / UX/UI Designer</span>
              </div>
              <div className="meta-item">
                <HiOfficeBuilding />
                <span>Client / Product: Medlaunch Concepts — Healthcare Accreditation SaaS</span>
              </div>
              <div className="meta-item">
                <HiDesktopComputer />
                <span>Scope: End-to-end product design</span>
              </div>
              <div className="meta-item">
                <HiClock />
                <span>Timeline: 8 Months</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 01 Overview */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>01 Overview</h2>
          <p className="section-intro">
            Healthcare accreditation is not a single task. It involves organizations, applications,
            documentation, reviews, approvals, user access, and ongoing accreditation management.
            When those activities are handled across disconnected processes, users have to understand
            not only accreditation requirements but also where information lives and what they need
            to do next.
          </p>
          <p className="section-intro">
            My role was to help translate that operational complexity into a structured digital
            experience. Instead of treating the product as a collection of independent forms and
            screens, I approached it as a connected system of organizations, workflows, information,
            and user actions.
          </p>
          <div className="overview-grid">
            <div className="overview-card overview-card-problem">
              <h3>The Problem</h3>
              <p>
                Accreditation-related information and tasks were spread across complex workflows involving
                multiple entities, documents, decisions, and user roles. The experience needed to make those
                relationships easier to understand and manage.
              </p>
            </div>
            <div className="overview-card overview-card-goal">
              <h3>The Product Goal</h3>
              <p>
                Create a scalable digital environment where healthcare organizations and accreditation
                teams could find organizations, begin the appropriate accreditation path, manage organization
                information, complete requests, and return to ongoing operational information.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 02 Complexity */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2>02 Making Sense of the Complexity</h2>
          <p className="section-intro">
            One of the main UX challenges was that accreditation does not follow a single screen-to-screen
            journey. Users may enter the system with different intentions: identifying an organization,
            starting a new request, returning to an existing organization, managing users, reviewing
            information, or monitoring activity.
          </p>
          <div className="dnv-feature-grid">
            {complexityAreas.map((area) => (
              <div key={area.number} className="dnv-feature-card">
                <div className="dnv-feature-number">{area.number}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 03 Information Architecture */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>03 Information Architecture</h2>
          <p className="section-intro">
            The IA problem was not simply deciding where individual pages belonged. I needed to make
            relationships between organizations, accreditation activities, users, documents, and
            operational information understandable within one product.
          </p>
          <p className="section-intro">
            That led me to organize the experience around what users were trying to accomplish rather
            than exposing the internal structure of the system.
          </p>

          <h3 className="dnv-subsection-label">Simplified information architecture</h3>
          <div className="ia-diagram" aria-label="Simplified information architecture diagram">
            <div className="ia-root">DNV Accreditation Platform</div>
            <div className="ia-connector" aria-hidden="true" />
            <div className="ia-branches">
              <div className="ia-branch">
                <div className="ia-node ia-node-primary">Organization</div>
                <div className="ia-leaf">Search / Map</div>
                <div className="ia-leaf">Org Profile</div>
                <div className="ia-leaf">Org Information</div>
              </div>
              <div className="ia-branch">
                <div className="ia-node ia-node-primary">Accreditation</div>
                <div className="ia-leaf">New / Existing</div>
                <div className="ia-leaf">Quote / Request</div>
                <div className="ia-leaf">Workflow Details</div>
              </div>
              <div className="ia-branch">
                <div className="ia-node ia-node-primary">Administration</div>
                <div className="ia-leaf">User Mgmt</div>
              </div>
              <div className="ia-branch">
                <div className="ia-node ia-node-primary">Analytics</div>
                <div className="ia-leaf">Monitoring</div>
              </div>
            </div>
          </div>
          <p className="ia-caption">
            This simplified portfolio view shows how the major experience areas relate. It is not
            intended to reproduce every business rule or accreditation requirement.
          </p>

          <div className="ia-principle-card">
            <h3>Orient users before asking them to act</h3>
            <p>
              A recurring design principle was establishing context before exposing complexity. Before
              asking users for detailed accreditation information, the experience first helps them identify
              the organization and the path they are working with. That influenced the separation between
              organization discovery, new/existing selection, organization profiles, and deeper request
              workflows.
            </p>
          </div>
        </motion.section>

        {/* 04 Core Journey */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2>04 Designing the Core Journey</h2>
          <p className="section-intro">
            The product was designed as a connected journey rather than a set of isolated screens.
            Establishing path and organization context early made later request and profile screens easier to reason about.
          </p>

          <div className="journey-indicator" aria-label="Core user journey steps">
            {journeySteps.map((step, index) => (
              <React.Fragment key={step}>
                <div className="journey-pill">{step}</div>
                {index < journeySteps.length - 1 && (
                  <div className="journey-arrow" aria-hidden="true">→</div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="journey-steps">
            {journeyDetails.map((item) => (
              <div key={item.step} className="journey-step-block">
                <div className="journey-step-label">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={`journey-image-grid ${item.secondarySrc ? 'has-secondary' : ''}`}>
                  <div className="final-design-image">
                    <img src={`${baseImageUrl}/${item.src}`} alt={item.alt} />
                  </div>
                  {item.secondarySrc && (
                    <div className="final-design-image">
                      <img src={`${baseImageUrl}/${item.secondarySrc}`} alt={item.secondaryAlt} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 05 Findability */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <h2>05 Findability & Organization Discovery</h2>
          <p className="section-intro">
            In a platform containing many healthcare organizations, findability becomes part of the
            core workflow. Users should not have to navigate through multiple layers simply to locate
            the organization they need.
          </p>
          <p className="section-intro">
            The hospital search experience creates a dedicated discovery layer where users can identify
            the correct organization before moving into detailed accreditation information.
          </p>

          <div className="findability-media">
            <div className="final-design-image">
              <img
                src={`${baseImageUrl}/final-designs/Hospital Search Result - Map View.png`}
                alt="Hospital search result map view"
              />
            </div>
            <div className="final-design-image">
              <img
                src={`${baseImageUrl}/wireframes/wireframe_dnv_hospital_lookup_map.png`}
                alt="Hospital lookup map wireframe"
              />
            </div>
          </div>

          <div className="dnv-feature-grid">
            {findabilityPrinciples.map((principle) => (
              <div key={principle.title} className="dnv-feature-card">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 06 Design Exploration */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>06 Design Exploration & Decision Making</h2>
          <p className="section-intro">
            Before moving into final interface design, I worked through the structural questions behind
            the major workflows. The focus was less on visual styling and more on deciding what users
            needed to understand at each point, what information belonged together, and when deeper
            complexity should become visible.
          </p>

          <div className="dnv-feature-grid">
            {designExploration.map((item, index) => (
              <motion.div
                key={item.number}
                className="dnv-feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 + index * 0.05 }}
              >
                <div className="dnv-feature-number">{item.number}</div>
                <h3>{item.title}</h3>
                <p className="design-decision-question">{item.question}</p>
                <p>{item.explanation}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 07 Design System */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <h2>07 Design System at Scale</h2>
          <p className="section-intro">
            As the product grew, consistency became more than a visual concern. Repeating the same
            patterns across many workflows without a shared system would make both the user experience
            and implementation increasingly difficult to maintain.
          </p>
          <p className="section-intro">
            I created and maintained reusable visual and interaction patterns so hierarchy, actions,
            labels, typography, and common controls behaved consistently across the product.
            The design system ultimately supported 300+ screens across the broader accreditation
            product work.
          </p>

          <div className="design-system-grid">
            {designSystemItems.map((item, index) => (
              <motion.div
                key={item.src}
                className="design-system-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
              >
                <div className="design-system-image">
                  <img src={`${baseImageUrl}/${item.src}`} alt={item.alt} />
                </div>
                <div className="design-system-details">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 08 Final Experience */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2>08 Final Experience</h2>
          <p className="section-intro">
            The final experience brings the architecture together: users can enter, establish their path,
            locate an organization, complete a request, maintain organization context, and return to
            operational monitoring without treating each of those as a separate product.
          </p>

          {/* <div className="final-design-image mockup-feature">
            <img
              src={`${baseImageUrl}/final-designs/mockup.png`}
              alt="DNV accreditation platform product mockup"
            />
          </div> */}

          <div className="final-designs-grid">
            {finalExperience.map((item, index) => (
              <motion.div
                key={item.src}
                className="final-design-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 + index * 0.05 }}
              >
                <div className="final-design-image">
                  <img src={`${baseImageUrl}/${item.src}`} alt={item.alt} />
                </div>
                <div className="final-design-details">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 09 Challenges */}
        <motion.section
          className="case-study-section challenges-solutions-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <h2>09 Working Through Product Constraints</h2>
          <div className="challenges-grid">
            {designChallenges.map((item, index) => (
              <motion.div
                key={item.number}
                className="challenge-solution-pair"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.08 }}
              >
                <div className="challenge-side">
                  <div className="challenge-header">
                    <span className="challenge-number">Challenge {item.number}</span>
                    <h3 className="challenge-title">{item.title}</h3>
                  </div>
                  <div className="challenge-content">
                    <div className="challenge-icon">{item.icon}</div>
                    <p className="challenge-text">{item.challenge}</p>
                  </div>
                </div>

                <div className="arrow-separator">
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="var(--accent-primary)" strokeWidth="2" />
                  </svg>
                </div>

                <div className="solution-side">
                  <div className="solution-header">
                    <span className="solution-number">Response {item.number}</span>
                  </div>
                  <div className="solution-content">
                    <div className="solution-icon">{item.solutionIcon}</div>
                    <p className="solution-text">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 10 Outcome & Reflection */}
        <motion.section
          className="case-study-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          <h2>10 Outcome & Reflection</h2>
          <div className="dnv-outcome-card">
            <h3>Outcome</h3>
            <p>
              The project transformed a complex accreditation concept into a cohesive digital product
              spanning organization discovery, request workflows, organization profiles, administration,
              and analytics.
            </p>
            <p>
              The work helped Medlaunch demonstrate the viability of the product, strengthen the DNV
              relationship, and contributed to the company's broader ability to secure funding and grow
              the team.
            </p>

            <h3>What I Learned</h3>
            <p>
              The biggest lesson from this project was that complex enterprise UX is often an
              information-organization problem before it becomes a screen-design problem. Once the
              relationships between organizations, tasks, users, and information were clearer, individual
              interface decisions became easier to reason about.
            </p>

            <h3>What I Would Validate Next</h3>
            <p>
              As the product evolves, I would continue validating whether users can quickly understand
              where they are in the accreditation lifecycle, locate the correct organization or information,
              and move between related tasks without losing context.
            </p>
          </div>
        </motion.section>

        <motion.button
          className="back-button back-button-bottom"
          onClick={onBack}
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <HiArrowLeft />
          Back to Projects
        </motion.button>
      </div>
    </div>
  );
};

export default DNVAccreditationCaseStudy;
