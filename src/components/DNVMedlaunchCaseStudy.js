import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const DNVMedlaunchCaseStudy = ({ onBack }) => {
  const baseImageUrl = (process.env.PUBLIC_URL || '') + '/images/medlaunch';
  const { isDarkMode } = useTheme();

  const getThemedStyles = () => {
    return {
      container: {
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        padding: '2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      },
      backButton: {
        padding: '1rem 2rem',
        background: 'var(--accent-primary)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        marginBottom: '3rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'all 0.3s ease'
      },
      title: {
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        marginBottom: '1rem',
        background: 'var(--gradient-primary)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: '1.2'
      },
      subtitle: {
        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
        lineHeight: '1.6'
      },
      sectionTitle: {
        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
        marginBottom: '2rem',
        marginTop: '4rem',
        color: 'var(--text-primary)',
        fontWeight: '700'
      },
      subsectionTitle: {
        fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
        marginBottom: '1.5rem',
        marginTop: '3rem',
        color: 'var(--accent-primary)',
        fontWeight: '600'
      },
      metaInfo: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem',
        padding: '2rem',
        background: isDarkMode ? '#1e293b' : '#f8fafc',
        borderRadius: '16px'
      },
      metaItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      },
      metaLabel: {
        fontSize: '0.875rem',
        color: 'var(--text-secondary)',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      },
      metaValue: {
        fontSize: '1rem',
        color: 'var(--text-primary)',
        lineHeight: '1.6'
      },
      contributionCard: {
        background: isDarkMode ? '#1e293b' : '#f1f5f9',
        padding: '2rem',
        borderRadius: '16px',
        marginBottom: '2rem',
        border: `2px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`
      },
      contributionNumber: {
        fontSize: '3rem',
        fontWeight: '700',
        background: 'var(--gradient-primary)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '1rem'
      },
      challengeGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      },
      challengeCard: {
        background: isDarkMode ? '#1e293b' : '#fef3f2',
        padding: '2rem',
        borderRadius: '16px',
        borderLeft: `4px solid ${isDarkMode ? '#f59e0b' : '#ea580c'}`
      },
      solutionCard: {
        background: isDarkMode ? '#1e293b' : '#f0fdf4',
        padding: '2rem',
        borderRadius: '16px',
        borderLeft: `4px solid ${isDarkMode ? '#10b981' : '#059669'}`
      },
      challengeLabel: {
        fontSize: '0.875rem',
        color: isDarkMode ? '#f59e0b' : '#ea580c',
        fontWeight: '700',
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      },
      solutionLabel: {
        fontSize: '0.875rem',
        color: isDarkMode ? '#10b981' : '#059669',
        fontWeight: '700',
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      },
      cardTitle: {
        fontSize: '1.3rem',
        fontWeight: '600',
        marginBottom: '1rem',
        color: 'var(--text-primary)'
      },
      cardText: {
        color: 'var(--text-secondary)',
        lineHeight: '1.7',
        fontSize: '1rem'
      },
      featureGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      },
      featureCard: {
        background: isDarkMode ? '#1e293b' : '#f8fafc',
        padding: '2rem',
        borderRadius: '16px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`
      },
      featureIcon: {
        fontSize: '2.5rem',
        marginBottom: '1rem'
      },
      featureTitle: {
        fontSize: '1.2rem',
        fontWeight: '600',
        marginBottom: '0.75rem',
        color: 'var(--text-primary)'
      },
      featureDesc: {
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        fontSize: '0.95rem'
      },
      imageContainer: {
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        background: isDarkMode ? '#f8fafc' : '#ffffff',
        boxShadow: isDarkMode ? '0 8px 30px rgba(0, 0, 0, 0.15)' : '0 8px 30px rgba(0, 0, 0, 0.08)',
        marginBottom: '3rem',
        transition: 'transform 0.3s ease'
      },
      imageGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      },
      impactCard: {
        background: isDarkMode ?
          'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)' :
          'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        padding: '3rem',
        borderRadius: '20px',
        color: 'white',
        marginTop: '4rem',
        marginBottom: '3rem'
      },
      impactTitle: {
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '2rem',
        color: 'white'
      },
      impactText: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: 'rgba(255, 255, 255, 0.95)'
      },
      retrospectiveCard: {
        background: isDarkMode ? '#18181b' : '#fafafa',
        padding: '3rem',
        borderRadius: '20px',
        marginBottom: '3rem'
      }
    };
  };

  const styles = getThemedStyles();

  const challenges = [
    {
      number: 1,
      title: 'Design System',
      challenge: 'When I first joined the company, they only had a design guideline written in a doc',
      solution: 'I built and maintained the design system, which serves 300+ screens to make a cohesive visual.'
    },
    {
      number: 2,
      title: 'Different Ideas',
      challenge: 'There were times when the PM and I had different ideas, and it wasn\'t clear which direction was better',
      solution: 'I conducted competitive research, then discussed with PM to figure out the best decision.'
    },
    {
      number: 3,
      title: 'Unclear Direction',
      challenge: 'Sometimes I wasn\'t sure which page layout would work better.',
      solution: 'I usually designed 2–3 variations and then asked colleagues for feedback.'
    },
    {
      number: 4,
      title: 'Lack of Human Resource',
      challenge: 'At first, since there was no QA team, the design quality wasn\'t consistent.',
      solution: 'I took the initiative to review the outcomes and created a fix checklist for developers.'
    }
  ];

  const features = [
    {
      icon: '📊',
      title: 'Analytics and Benchmarking',
      description: 'Visualize your data to enhance quality, reduce risks, and drive better outcomes.'
    },
    {
      icon: '🔄',
      title: 'Accreditation Lifecycle Management',
      description: 'In our closed loop and scalable architecture, we can handle everything from initial outreach to existing client management.'
    },
    {
      icon: '📁',
      title: 'Central Document Repository',
      description: 'Store and manage all certification-related documents with ease for improved access and organization.'
    },
    {
      icon: '🔍',
      title: 'Entity Search',
      description: 'An accreditation portal powered by data from all 1000+ USA based networks, 6000+ hospitals, 6000+ ASCs and more.'
    }
  ];

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        style={styles.backButton}
        whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Projects
      </motion.button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={styles.title}>
          DNV & Medlaunch Concepts
        </h1>
        <p style={styles.subtitle}>
          Digitalize the Complex Accreditation Process for Healthcare SaaS · Digitalizing Accreditation for 2 Healthcare SaaS
        </p>
        <p style={{...styles.subtitle, marginTop: '1rem'}}>
          Led product design to transform legacy healthcare accreditation workflows into scalable digital systems for DNV and institutions—driving efficiency, collaboration, and helping the startup secure major funding.
        </p>
      </motion.div>

      {/* Meta Information */}
      <motion.div
        style={styles.metaInfo}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>My Role</span>
          <span style={styles.metaValue}>Product Design Lead, UX/UI Design, Design System</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Timeline</span>
          <span style={styles.metaValue}>2025.05 - 2025.08 (4 months)</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Team</span>
          <span style={styles.metaValue}>UX/UI Designer, PM, Engineers</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Tools Used</span>
          <span style={styles.metaValue}>Figma, Figjam, Google Workspace</span>
        </div>
      </motion.div>

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 style={styles.sectionTitle}>01 Overview</h2>
        <h3 style={styles.subsectionTitle}>My first product design lead role—owning UX from 0 to launch</h3>
        <p style={{...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
          In summer 2025, I led product design at a healthcare SaaS startup, designing 2 complex accreditation systems and building 0–1 design systems across over 300+ screens.
        </p>
        <p style={{...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem'}}>
          Beyond UI, I drove cross-team alignment, made confident product decisions, and balanced user needs with business goals. This was also the first time my design work directly supported a successful fundraising round.
        </p>

        {/* Contributions */}
        <div style={styles.contributionCard}>
          <div style={styles.contributionNumber}>01</div>
          <h4 style={styles.cardTitle}>Contributions</h4>
          <p style={styles.cardText}>
            Established 2 accreditation systems & a cohesive design system with PM and engineers
          </p>
        </div>

        <div style={styles.contributionCard}>
          <div style={styles.contributionNumber}>02</div>
          <h4 style={styles.cardTitle}>Contributions</h4>
          <p style={styles.cardText}>
            Rebranding the company website to enhance visual identity and clarity
          </p>
        </div>
      </motion.section>

      {/* Understand Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 style={styles.sectionTitle}>02 Understand</h2>

        <h3 style={styles.subsectionTitle}>The Problem</h3>
        <div style={styles.challengeCard}>
          <p style={styles.cardText}>
            Dealing with complex accreditation requirements takes a lot of manpower, and it often turns into a confusing and time-consuming process. The information was scattered across email and systems, increasing the extra workload and confusion...
          </p>
        </div>

        <h3 style={styles.subsectionTitle}>The Goals</h3>
        <div style={styles.solutionCard}>
          <p style={styles.cardText}>
            Transform legacy healthcare accreditation workflows into scalable digital systems for DNV and healthcare institutions. The information was scattered across email and systems, increasing the extra workload and confusion...
          </p>
        </div>
      </motion.section>

      {/* Result Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 style={styles.sectionTitle}>03 Result</h2>

        <h3 style={styles.subsectionTitle}>Outcomes</h3>
        <p style={{...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
          2 systems were designed to facilitate and digitalize the accreditation application and modification process. One system is for a healthcare institution, and the other is for DNV Healthcare.
        </p>

        {/* Features Grid */}
        <div style={styles.featureGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              style={styles.featureCard}
              whileHover={{ transform: 'translateY(-5px)', boxShadow: isDarkMode ? '0 12px 40px rgba(0, 0, 0, 0.2)' : '0 12px 40px rgba(0, 0, 0, 0.1)' }}
            >
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h4 style={styles.featureTitle}>{feature.title}</h4>
              <p style={styles.featureDesc}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Design System Images */}
        <h3 style={styles.subsectionTitle}>Design System</h3>
        <div style={styles.imageGrid}>
          <div style={styles.imageContainer}>
            <img
              src={`${baseImageUrl}/Color Palette.png`}
              alt="Color Palette"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={styles.imageContainer}>
            <img
              src={`${baseImageUrl}/Typography.png`}
              alt="Typography"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        <div style={styles.imageGrid}>
          <div style={styles.imageContainer}>
            <img
              src={`${baseImageUrl}/Button.png`}
              alt="Button Components"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={styles.imageContainer}>
            <img
              src={`${baseImageUrl}/Action.png`}
              alt="Action Components"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        <div style={styles.imageContainer}>
          <img
            src={`${baseImageUrl}/Label.png`}
            alt="Label Components"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Final Designs */}
        <h3 style={styles.subsectionTitle}>Final Designs</h3>

        <div style={styles.imageContainer}>
          <img
            src={`${baseImageUrl}/Initial Page.png`}
            alt="Initial Page"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div style={styles.imageContainer}>
          <img
            src={`${baseImageUrl}/Login-Hospital Login.png`}
            alt="Hospital Login"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div style={styles.imageContainer}>
          <img
            src={`${baseImageUrl}/New or Existing.png`}
            alt="New or Existing Selection"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div style={styles.imageContainer}>
          <img
            src={`${baseImageUrl}/New DNV Quote Request.png`}
            alt="New DNV Quote Request"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div style={styles.imageContainer}>
          <img
            src={`${baseImageUrl}/Hospital Search Result - Map View.png`}
            alt="Hospital Search - Map View"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div style={styles.imageGrid}>
          <div style={styles.imageContainer}>
            <img
              src={`${baseImageUrl}/Hospital Profile - Organization Information.png`}
              alt="Hospital Profile - Organization Info"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={styles.imageContainer}>
            <img
              src={`${baseImageUrl}/User Management.png`}
              alt="User Management"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        <div style={styles.imageContainer}>
          <img
            src={`${baseImageUrl}/analysis.png`}
            alt="Analytics Dashboard"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div style={styles.imageGrid}>
          <div style={styles.imageContainer}>
            <img
              src={`${baseImageUrl}/Frame-1.png`}
              alt="Additional Design Frame 1"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={styles.imageContainer}>
            <img
              src={`${baseImageUrl}/Frame-2.png`}
              alt="Additional Design Frame 2"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        <p style={{...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginTop: '3rem', textAlign: 'center', fontWeight: '600'}}>
          Results: Improved user experience for healthcare institutions and streamlined the workload for DNV staff.
        </p>

        <p style={{...styles.cardText, fontSize: '1.3rem', lineHeight: '1.8', marginTop: '2rem', textAlign: 'center', fontStyle: 'italic'}}>
          Let's take a step back and look at how I got here! ⏪
        </p>
      </motion.section>

      {/* Challenges & Solutions */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 style={styles.sectionTitle}>04 Challenges & Solutions</h2>

        <div style={styles.challengeGrid}>
          {challenges.map((item, index) => (
            <div key={index}>
              <div style={styles.challengeCard}>
                <div style={styles.challengeLabel}>Challenge {item.number}</div>
                <h4 style={styles.cardTitle}>{item.title}</h4>
                <p style={styles.cardText}>{item.challenge}</p>
              </div>
              <div style={{...styles.solutionCard, marginTop: '1rem'}}>
                <div style={styles.solutionLabel}>Solution {item.number}</div>
                <p style={styles.cardText}>{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Impact */}
      <motion.div
        style={styles.impactCard}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 style={styles.impactTitle}>Impact</h2>
        <p style={styles.impactText}>
          We won a key project from DNV, gained their trust for future work, and as a result, the company secured funding to grow the team.
        </p>
      </motion.div>

      {/* Retrospective */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 style={styles.sectionTitle}>Retrospective</h2>

        <div style={styles.retrospectiveCard}>
          <h3 style={{...styles.subsectionTitle, marginTop: 0}}>
            Beyond pixel polish, I had to ask: Will this design help the startup survive?
          </h3>

          <h4 style={{...styles.cardTitle, marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <span>🤝</span> Thinking like a strategist, not just a designer
          </h4>
          <p style={{...styles.cardText, marginBottom: '2rem'}}>
            <strong>Thinking at a broader level:</strong> As a first-time product design lead, I needed to think long-term: Will this scale? Is this profitable? Can new designers follow this system and build with consistency?
          </p>

          <h4 style={{...styles.cardTitle, marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <span>⚙️</span> After building a first design system?
          </h4>
          <p style={styles.cardText}>
            <strong>Balancing cohesion and variety:</strong> I created a design system that scaled across 300+ screens without sacrificing clarity or consistency. While keeping things cohesive, I never took shortcuts—whenever a new use case emerged, I thoughtfully introduced new components instead of forcing mismatched patterns.
          </p>
        </div>
      </motion.section>

      {/* Back Button at Bottom */}
      <motion.button
        onClick={onBack}
        style={{...styles.backButton, marginTop: '4rem', marginBottom: '2rem'}}
        whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Projects
      </motion.button>
    </motion.div>
  );
};

export default DNVMedlaunchCaseStudy;
