import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const TrustHandoffCaseStudy = ({ onBack }) => {
  const baseImageUrl = (process.env.PUBLIC_URL || '') + '/images/trust-handoff';
  const { isDarkMode } = useTheme();

  const getThemedStyles = () => {
    return {
      container: {
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        padding: '2rem',
        maxWidth: '1200px',
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
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '1rem',
        color: 'var(--text-primary)'
      },
      subtitle: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
        lineHeight: '1.6'
      },
      sectionTitle: {
        fontSize: '2rem',
        marginBottom: '2rem',
        marginTop: '4rem',
        color: 'var(--text-primary)'
      },
      subsectionTitle: {
        fontSize: '1.5rem',
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

  const insights = [
    {
      number: 1,
      title: 'Unclear AI Capability',
      challenge: 'The customer is unsure whether the AI can actually help with their issue.',
      solution: 'Clearly communicate AI capabilities upfront so expectations are set before the conversation begins.'
    },
    {
      number: 2,
      title: 'Opaque Confidence',
      challenge: 'AI confidence may be insufficient, but the system still proceeds as if it is sure.',
      solution: 'Show transparent confidence and reasoning so the customer can see how sure the AI is — and why.'
    },
    {
      number: 3,
      title: 'Repeating the Story',
      challenge: 'Customers dislike repeating themselves when a conversation is handed off to a human.',
      solution: 'Preserve the full conversation context so the live agent already has the history.'
    },
    {
      number: 4,
      title: 'Friction to Reach a Human',
      challenge: 'It is unclear how or when to reach a human, which erodes trust at the worst moment.',
      solution: 'Let the customer request a human at any point, without friction or hidden gates.'
    }
  ];

  const structureScreens = [
    { src: 'home.png', alt: 'Home — unbranded structure pass', title: 'Home' },
    { src: 'ai_conversation.png', alt: 'AI conversation — unbranded structure pass', title: 'AI Conversation' },
    { src: 'ai_response.png', alt: 'AI response — unbranded structure pass', title: 'AI Response' },
    { src: 'human_escalation.png', alt: 'Human escalation — unbranded structure pass', title: 'Human Escalation' },
    { src: 'live_agent.png', alt: 'Live agent — unbranded structure pass', title: 'Live Agent' },
    { src: 'resolution.png', alt: 'Resolution — unbranded structure pass', title: 'Resolution' }
  ];

  const verizonScreens = [
    { src: 'verizon-home.png', alt: 'Home — Verizon visual identity concept', title: 'Home' },
    { src: 'verizon-ai-chat.png', alt: 'AI chat — Verizon visual identity concept', title: 'AI Chat' },
    { src: 'verizon-ai-response.png', alt: 'AI response — Verizon visual identity concept', title: 'AI Response' },
    { src: 'verizon-escalation.png', alt: 'Escalation — Verizon visual identity concept', title: 'Escalation' },
    { src: 'verizon-live-agent.png', alt: 'Live agent — Verizon visual identity concept', title: 'Live Agent' },
    { src: 'verizon-resolution.png', alt: 'Resolution — Verizon visual identity concept', title: 'Resolution' }
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
          Designing Trust into AI-to-Human Handoffs
        </h1>
        <p style={styles.subtitle}>
          A self-directed service design exploration of an AI customer support conversation — how do you hand a customer to a human without losing the trust the AI already built. One visual pass applies the concept to Verizon's brand identity as an unaffiliated design exercise, not commissioned or client work.
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
          <span style={styles.metaValue}>Service & Interaction Design (self-directed)</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Team</span>
          <span style={styles.metaValue}>Solo project</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Tools Used</span>
          <span style={styles.metaValue}>Figma, FigJam</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Type</span>
          <span style={styles.metaValue}>Concept Project</span>
        </div>
      </motion.div>

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 style={styles.sectionTitle}>01 Overview</h2>
        <p style={{...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
          This is a concept exploration motivated by a common AI-support failure mode: the moment an AI cannot confidently resolve an issue, and the handoff to a human breaks the trust the conversation had already started to build. Instead of treating escalation as a dead end, the work asks how the service can stay honest, continuous, and respectful when a person needs to take over.
        </p>
      </motion.section>

      {/* Research & Insight */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 style={styles.sectionTitle}>02 Research & Insight</h2>

        <div style={{...styles.imageContainer, marginBottom: '1rem'}}>
          <img
            src={`${baseImageUrl}/journey-map.jpg`}
            alt="Eight-stage customer journey map for an AI support conversation"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        <p style={{...styles.cardText, marginBottom: '3rem'}}>
          An 8-stage journey map: Open Chat → Describe Issue → AI Understands Intent → AI Responds → Confidence Evaluation → Human Escalation → Issue Resolution → Feedback. Confidence Evaluation is the Critical Trust Moment — the point where the system must decide whether to continue, explain itself, or hand off.
        </p>

        <div style={styles.challengeGrid}>
          {insights.map((item, index) => (
            <div key={index}>
              <div style={styles.challengeCard}>
                <div style={styles.challengeLabel}>Pain Point {item.number}</div>
                <h4 style={styles.cardTitle}>{item.title}</h4>
                <p style={styles.cardText}>{item.challenge}</p>
              </div>
              <div style={{...styles.solutionCard, marginTop: '1rem'}}>
                <div style={styles.solutionLabel}>Opportunity {item.number}</div>
                <p style={styles.cardText}>{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Design Decision */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 style={styles.sectionTitle}>03 Design Decision</h2>

        <div style={{...styles.imageContainer, marginBottom: '1rem'}}>
          <img
            src={`${baseImageUrl}/service-blueprint.jpg`}
            alt="Service blueprint mapping customer, AI, human support, and backend systems"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        <p style={{...styles.cardText, marginBottom: '3rem'}}>
          End-to-end blueprint mapping Customer Actions, Frontstage AI Conversation, Human Support, and Backend AI Systems across the same 7–8 steps of the journey.
        </p>

        <p style={{...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
          The core decision is a confidence threshold. Under an 80% confidence score, the AI does not silently guess. It transparently escalates and tells the customer why — so the handoff is framed as care, not failure, and the customer never has to re-explain what already happened.
        </p>
      </motion.section>

      {/* Final Screens */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 style={styles.sectionTitle}>04 Final Screens</h2>

        <h3 style={styles.subsectionTitle}>Pass 1 — Structure First</h3>
        <p style={{...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
          Neutral, unbranded screens that lock the interaction model before any brand layer is applied.
        </p>
        <div style={styles.imageGrid}>
          {structureScreens.map((screen) => (
            <div key={screen.src}>
              <div style={{...styles.imageContainer, marginBottom: '1rem'}}>
                <img
                  src={`${baseImageUrl}/${screen.src}`}
                  alt={screen.alt}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <h4 style={styles.featureTitle}>{screen.title}</h4>
            </div>
          ))}
        </div>

        <h3 style={styles.subsectionTitle}>Pass 2 — Applied to a Real Brand</h3>
        <p style={{...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
          This is an unsolicited concept application of Verizon's visual identity, included to show how the interaction model holds up once a real brand's tone and color are applied.
        </p>
        <div style={styles.imageGrid}>
          {verizonScreens.map((screen) => (
            <div key={screen.src}>
              <div style={{...styles.imageContainer, marginBottom: '1rem'}}>
                <img
                  src={`${baseImageUrl}/${screen.src}`}
                  alt={screen.alt}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <h4 style={styles.featureTitle}>{screen.title}</h4>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Reflection */}
      <motion.div
        style={styles.impactCard}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 style={styles.impactTitle}>05 Reflection</h2>
        <p style={styles.impactText}>
          No usability testing has been run yet. The two things to validate next are whether customers actually notice the AI's confidence signal, and whether the automatic conversation summary reduces the feeling of “repeating myself” at handoff.
        </p>
      </motion.div>

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

export default TrustHandoffCaseStudy;
