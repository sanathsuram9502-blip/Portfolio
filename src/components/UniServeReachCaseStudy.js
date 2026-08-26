import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const UniServeReachCaseStudy = ({ onBack }) => {
  const baseImageUrl = (process.env.PUBLIC_URL || '') + '/images/uniserve-case-study';
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
      quote: {
        fontStyle: 'italic',
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        borderLeft: '4px solid var(--accent-primary)',
        paddingLeft: '1rem',
        margin: '1rem 0'
      },
      hierarchyStep: {
        background: isDarkMode ? '#1e293b' : '#f8fafc',
        border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
        borderRadius: '12px',
        padding: '1rem 1.5rem',
        textAlign: 'center',
        fontWeight: '600',
        color: 'var(--text-primary)',
        width: '100%',
        maxWidth: '420px'
      },
      hierarchyArrow: {
        color: 'var(--accent-primary)',
        fontSize: '1.25rem',
        margin: '0.5rem 0',
        textAlign: 'center'
      }
    };
  };

  const styles = getThemedStyles();

  const userGroups = [
    {
      count: '5',
      title: 'Marketing Directors',
      need: 'Understand overall performance quickly enough to make strategic decisions.',
      question: 'How are our communication channels performing overall?'
    },
    {
      count: '6',
      title: 'Campaign Managers',
      need: 'Compare channel performance and identify opportunities or problems during day-to-day campaign management.',
      question: 'Which channel or source is driving this change?'
    },
    {
      count: '4',
      title: 'Technical Operations',
      need: 'Trace delivery and system-level problems quickly enough to diagnose operational issues.',
      question: 'Which source system or aggregator is affected?'
    }
  ];

  const iaPerspectives = [
    {
      number: '01',
      title: 'Channel',
      label: 'Primary performance perspective',
      content: 'Email, SMS, and WhatsApp provide the fastest way for marketing users to understand cross-channel performance and compare outcomes.'
    },
    {
      number: '02',
      title: 'Source System',
      label: 'Operational investigation',
      content: 'Source-system views allow users to move beyond channel-level symptoms and understand where messaging activity originates.'
    },
    {
      number: '03',
      title: 'Aggregator',
      label: 'Technical diagnosis',
      content: 'Aggregator-level views provide another layer of operational detail for users investigating delivery behavior and system load.'
    }
  ];

  const hierarchySteps = [
    'Overview',
    'Channel Performance',
    'Source / Aggregator Breakdown',
    'Detailed Operational Metrics'
  ];

  const researchMetrics = [
    { value: '85%', label: 'wanted real-time updates' },
    { value: '92%', label: 'needed drill-down capabilities' },
    { value: '78%', label: 'required customizable date ranges' },
    { value: '89%', label: 'wanted automated alerting' }
  ];

  const designDecisions = [
    {
      title: '1. Scannable KPI Hierarchy',
      src: 'card.png',
      alt: 'Card-based KPI display',
      decision: 'Prioritize a small set of high-value metrics in prominent cards before exposing detailed tables and system information.',
      why: 'Users needed to understand whether something required attention before investigating why. Establishing a clear KPI hierarchy reduced the amount of information they had to process at entry.'
    },
    {
      title: '2. Navigation by Analysis Perspective',
      src: 'nav-tab.png',
      alt: 'Channel, Source System, and Aggregator navigation',
      decision: 'Organize primary navigation around Channel, Source System, and Aggregator.',
      why: 'The three perspectives matched different user questions while keeping everyone inside the same analytics environment. Users could change the way they viewed the information without losing their overall context.'
    },
    {
      title: '3. Related Information Side by Side',
      src: 'pie-chart.png',
      alt: 'Top source systems and load distribution charts',
      decision: 'Place Top Source Systems and Load Distribution in the same analytical area.',
      why: 'Showing related information together helped users compare system activity and distribution patterns without navigating to another screen.'
    }
  ];

  const finalScreens = [
    {
      src: 'Channel.png',
      title: 'Channel Overview',
      desc: 'The entry view prioritizes cross-channel performance so users can quickly compare Email, SMS, and WhatsApp before deciding whether deeper investigation is necessary.'
    },
    {
      src: 'Channel-1.png',
      title: 'Drill-Down Analysis',
      desc: 'Detailed views expose granular performance and source-system information when users need to investigate what is driving an issue or change.'
    },
    {
      src: 'Channel_success.png',
      title: 'Success & System Monitoring',
      desc: 'Success-rate and system-health information gives operational users additional context while keeping the same overall navigation model.'
    }
  ];

  const impactMetrics = [
    { value: '93%', title: 'Time Reduction', desc: 'From 45 minutes to 3 minutes' },
    { value: '250%', title: 'Engagement Increase', desc: 'Analytics page views' },
    { value: '65%', title: 'Support Reduction', desc: 'Data-related inquiries' },
    { value: '$1.2M', title: 'Additional ARR', desc: 'From improved retention' }
  ];

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={onBack}
        style={styles.backButton}
        whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Projects
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={styles.title}>UniServe™ Reach</h1>
        <p style={styles.subtitle}>
          Designing a unified information experience for multi-channel communication analytics
        </p>
      </motion.div>

      <motion.div
        style={styles.metaInfo}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Timeline</span>
          <span style={styles.metaValue}>12 weeks</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>My Role</span>
          <span style={styles.metaValue}>Senior UX/UI Designer</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Team</span>
          <span style={styles.metaValue}>Product Manager, 2 Engineers, Data Analyst, QA Engineer</span>
        </div>
        <div style={styles.metaItem}>
          <span style={styles.metaLabel}>Tools</span>
          <span style={styles.metaValue}>Figma, Miro, Hotjar, Google Analytics, UserTesting</span>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 style={styles.sectionTitle}>01 Overview</h2>
        <p style={{ ...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          UniServe™ Reach serves enterprise marketing and communication teams managing performance across Email, SMS, and WhatsApp. The challenge was not simply displaying more analytics — users already had plenty of data. The problem was that the information lived across multiple tools and was organized differently depending on the system producing it. My role was to help turn that fragmented environment into one coherent experience where users could move from a high-level channel overview to the source of a performance issue without losing context.
        </p>
        <div style={styles.challengeGrid}>
          <div style={styles.challengeCard}>
            <div style={styles.challengeLabel}>The Problem</div>
            <p style={styles.cardText}>
              Teams were switching between 3–4 tools to understand multi-channel performance. Reporting was fragmented, comparisons were difficult, and important insights could take up to 45 minutes to assemble.
            </p>
          </div>
          <div style={styles.solutionCard}>
            <div style={styles.solutionLabel}>The UX Goal</div>
            <p style={styles.cardText}>
              Create one analytics experience that supports both quick performance scanning and deeper investigation — allowing different roles to reach the level of information they need without exposing every detail at once.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 style={styles.sectionTitle}>02 Problem & Research</h2>
        <p style={{ ...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          Interviews with 15 users across roles made the information-access problem concrete: people spent 40% of their time gathering data instead of acting on insights.
        </p>

        <div style={styles.featureGrid}>
          {userGroups.map((group) => (
            <div key={group.title} style={styles.featureCard}>
              <div style={styles.contributionNumber}>{group.count}</div>
              <h4 style={styles.featureTitle}>{group.title}</h4>
              <p style={{ ...styles.featureDesc, marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Primary need: </strong>
                {group.need}
              </p>
              <p style={styles.featureDesc}>
                <strong style={{ color: 'var(--text-primary)' }}>Typical question: </strong>
                {group.question}
              </p>
            </div>
          ))}
        </div>

        <div style={styles.featureGrid}>
          {researchMetrics.map((metric) => (
            <div key={metric.label} style={{ ...styles.featureCard, textAlign: 'center' }}>
              <div style={{ ...styles.contributionNumber, marginBottom: '0.5rem' }}>{metric.value}</div>
              <p style={{ ...styles.featureDesc, margin: 0 }}>{metric.label}</p>
            </div>
          ))}
        </div>

        <h3 style={{ ...styles.subsectionTitle, marginTop: '1rem' }}>Roles, not demographics</h3>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img
                src={`${baseImageUrl}/persona1.png`}
                alt="Srinivas, Marketing Operations Manager"
                style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <h4 style={{ ...styles.featureTitle, marginBottom: '0.25rem' }}>Srinivas</h4>
                <p style={{ ...styles.featureDesc, margin: 0 }}>Marketing Operations Manager</p>
              </div>
            </div>
            <p style={styles.featureDesc}><strong style={{ color: 'var(--text-primary)' }}>Goal: </strong>Monitor campaign performance, identify optimization opportunities, and report to leadership.</p>
            <p style={styles.featureDesc}><strong style={{ color: 'var(--text-primary)' }}>Information need: </strong>See how all channels are performing without hunting through separate dashboards.</p>
            <p style={{ ...styles.featureDesc, marginBottom: 0 }}><strong style={{ color: 'var(--text-primary)' }}>Typical question: </strong>How are all our channels performing at a glance?</p>
          </div>
          <div style={styles.featureCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img
                src={`${baseImageUrl}/persona2.png`}
                alt="Sarah Rodriguez, Technical Operations Lead"
                style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <h4 style={{ ...styles.featureTitle, marginBottom: '0.25rem' }}>Sarah Rodriguez</h4>
                <p style={{ ...styles.featureDesc, margin: 0 }}>Technical Operations Lead</p>
              </div>
            </div>
            <p style={styles.featureDesc}><strong style={{ color: 'var(--text-primary)' }}>Goal: </strong>Monitor system health, troubleshoot issues, and optimize infrastructure.</p>
            <p style={styles.featureDesc}><strong style={{ color: 'var(--text-primary)' }}>Information need: </strong>A unified view of system load and the ability to correlate issues across channels.</p>
            <p style={{ ...styles.featureDesc, marginBottom: 0 }}><strong style={{ color: 'var(--text-primary)' }}>Typical question: </strong>Which systems are affected, and how?</p>
          </div>
        </div>

        <div style={styles.contributionCard}>
          <h3 style={{ ...styles.cardTitle, marginTop: 0 }}>The important research shift</h3>
          <p style={{ ...styles.cardText, marginBottom: 0 }}>
            The research showed that the users were looking at much of the same underlying data, but they approached it through different mental models. Marketing users tended to think in terms of communication channels and performance, while technical users needed to trace activity through source systems and aggregators. That meant the solution could not simply be one large dashboard containing every metric.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 style={styles.sectionTitle}>03 Information Architecture</h2>
        <p style={{ ...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          The IA challenge was deciding how users should enter and move through the same analytics environment without creating separate products for each role.
        </p>

        <div style={styles.featureGrid}>
          {iaPerspectives.map((item) => (
            <div key={item.title} style={styles.featureCard}>
              <div style={styles.contributionNumber}>{item.number}</div>
              <h4 style={styles.featureTitle}>{item.title}</h4>
              <p style={{ ...styles.featureDesc, color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '0.75rem' }}>
                {item.label}
              </p>
              <p style={{ ...styles.featureDesc, marginBottom: 0 }}>{item.content}</p>
            </div>
          ))}
        </div>

        <div style={{ ...styles.imageContainer, marginBottom: '1rem' }}>
          <img
            src={`${baseImageUrl}/nav-tab.png`}
            alt="Primary navigation for Channel, Source System, and Aggregator"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        <p style={{ ...styles.cardText, marginBottom: '3rem' }}>
          The resulting primary navigation separated the analytics environment into Channel, Source System, and Aggregator perspectives. Instead of exposing all dimensions simultaneously, users could enter through the perspective that matched the question they were trying to answer.
        </p>

        <h3 style={styles.subsectionTitle}>Progressive Disclosure</h3>
        <p style={{ ...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          I used progressive disclosure to keep the first view focused on high-value KPIs while allowing users to move deeper when investigation was necessary. The experience follows a simple pattern: overview → comparison → drill-down → system detail. This reduced the need to jump between disconnected dashboards while keeping the interface manageable for users who only needed a quick answer.
        </p>

        <h4 style={{ ...styles.featureTitle, marginBottom: '1rem' }}>Information hierarchy</h4>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem' }}>
          {hierarchySteps.map((step, index) => (
            <React.Fragment key={step}>
              <div style={styles.hierarchyStep}>{step}</div>
              {index < hierarchySteps.length - 1 && (
                <div style={styles.hierarchyArrow}>↓</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 style={styles.sectionTitle}>04 Design Decisions</h2>
        {designDecisions.map((item) => (
          <div key={item.title} style={{ marginBottom: '3rem' }}>
            <h3 style={styles.subsectionTitle}>{item.title}</h3>
            <div style={{ ...styles.imageContainer, marginBottom: '1.5rem' }}>
              <img
                src={`${baseImageUrl}/${item.src}`}
                alt={item.alt}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div style={styles.challengeGrid}>
              <div style={styles.featureCard}>
                <h4 style={styles.featureTitle}>Decision</h4>
                <p style={{ ...styles.cardText, marginBottom: 0 }}>{item.decision}</p>
              </div>
              <div style={styles.featureCard}>
                <h4 style={styles.featureTitle}>Why</h4>
                <p style={{ ...styles.cardText, marginBottom: 0 }}>{item.why}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 style={styles.sectionTitle}>05 Final Experience</h2>
        <p style={{ ...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          The final experience was designed as a connected analytical journey rather than a collection of independent dashboards. Users could begin with broad performance, identify an anomaly, and progressively move toward the system-level information needed to understand it.
        </p>
        <div style={styles.imageGrid}>
          {finalScreens.map((screen) => (
            <div key={screen.src}>
              <div style={{ ...styles.imageContainer, marginBottom: '1rem' }}>
                <img
                  src={`${baseImageUrl}/${screen.src}`}
                  alt={screen.title}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <h4 style={styles.featureTitle}>{screen.title}</h4>
              <p style={styles.featureDesc}>{screen.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 style={styles.sectionTitle}>06 Usability Testing & Iteration</h2>
        <div style={styles.featureGrid}>
          <div style={{ ...styles.featureCard, textAlign: 'center' }}>
            <div style={styles.contributionNumber}>8</div>
            <p style={{ ...styles.featureDesc, margin: 0 }}>Current Users</p>
          </div>
          <div style={{ ...styles.featureCard, textAlign: 'center' }}>
            <div style={styles.contributionNumber}>45 min</div>
            <p style={{ ...styles.featureDesc, margin: 0 }}>Remote Sessions</p>
          </div>
          <div style={{ ...styles.featureCard, textAlign: 'center' }}>
            <div style={styles.contributionNumber}>4</div>
            <p style={{ ...styles.featureDesc, margin: 0 }}>Key Tasks</p>
          </div>
        </div>

        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <h4 style={styles.featureTitle}>Find Email Success Rate</h4>
            <p style={{ ...styles.cardText, fontWeight: '600', color: 'var(--text-primary)' }}>100% task success</p>
            <p style={{ ...styles.featureDesc, margin: 0 }}>Average time: 12 seconds</p>
          </div>
          <div style={styles.featureCard}>
            <h4 style={styles.featureTitle}>Compare Channels</h4>
            <p style={{ ...styles.cardText, fontWeight: '600', color: 'var(--text-primary)' }}>87.5% task success</p>
            <p style={{ ...styles.featureDesc, margin: 0 }}>Average time: 28 seconds</p>
          </div>
        </div>

        <p style={{ ...styles.cardText, fontSize: '1.1rem', lineHeight: '1.8' }}>
          The testing focused on whether users could locate key performance information and move between analytical perspectives without having to reconstruct the context themselves. The results gave us evidence that the hierarchy and navigation supported both quick lookup and comparison tasks.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h2 style={styles.sectionTitle}>07 Impact</h2>
        <p style={{ ...styles.cardText, marginBottom: '2rem' }}>Quantitative results, 3 months post-launch.</p>
        <div style={styles.featureGrid}>
          {impactMetrics.map((metric) => (
            <div key={metric.title} style={{ ...styles.featureCard, textAlign: 'center' }}>
              <div style={styles.contributionNumber}>{metric.value}</div>
              <h4 style={styles.featureTitle}>{metric.title}</h4>
              <p style={{ ...styles.featureDesc, margin: 0 }}>{metric.desc}</p>
            </div>
          ))}
        </div>

        <div style={styles.featureCard}>
          <h3 style={{ ...styles.cardTitle, marginTop: 0 }}>Qualitative feedback</h3>
          <div style={styles.quote}>
            "This dashboard has transformed how we monitor our campaigns. I can now spot issues and opportunities in real-time instead of waiting for weekly reports."
            <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--accent-primary)', fontStyle: 'normal' }}>— Marketing Director</span>
          </div>
          <div style={styles.quote}>
            "The unified view helps me quickly identify which channels are performing best and allocate budget accordingly."
            <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--accent-primary)', fontStyle: 'normal' }}>— Campaign Manager</span>
          </div>
        </div>
      </motion.section>

      <motion.div
        style={styles.impactCard}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <h2 style={styles.impactTitle}>08 Reflection</h2>
        <p style={styles.impactText}>
          The biggest lesson from UniServe Reach was that simplifying a complex product does not necessarily mean removing information. It often means giving different users clear entry points into the same information environment. Marketing teams needed an immediate understanding of channel performance, while technical users needed paths into source systems and aggregators. Structuring those perspectives into one connected hierarchy allowed us to support both without creating separate experiences.
        </p>
        <h3 style={{ ...styles.impactTitle, fontSize: '1.35rem', marginTop: '2rem', marginBottom: '1rem' }}>
          What I would explore next
        </h3>
        <p style={{ ...styles.impactText, margin: 0 }}>
          I would continue validating the navigation as the platform grows, especially as new channels, source systems, and analytical dimensions are introduced. The key question would be whether the existing information model continues to scale without increasing navigation complexity.
        </p>
      </motion.div>

      <motion.button
        onClick={onBack}
        style={{ ...styles.backButton, marginTop: '4rem', marginBottom: '2rem' }}
        whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Projects
      </motion.button>
    </motion.div>
  );
};

export default UniServeReachCaseStudy;
