import React from 'react';
import { useTheme } from '../context/ThemeContext';

const BSNLCaseStudyThemed = ({ onBack }) => {
    const { isDarkMode } = useTheme();

    // Get the base URL for images
    const baseImageUrl = (process.env.PUBLIC_URL || '') + '/images';

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
                gap: '0.5rem'
            },
            title: {
                fontSize: '3rem',
                marginBottom: '1rem',
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            },
            subtitle: {
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
            },
            sectionTitle: {
                fontSize: '2rem',
                marginBottom: '2rem',
                color: 'var(--text-primary)'
            },
            subsectionTitle: {
                fontSize: '1.5rem',
                marginBottom: '2rem',
                color: 'var(--accent-primary)'
            },
            card: {
                background: isDarkMode ? '#1e293b' : '#f1f5f9',
                padding: '2rem',
                borderRadius: '12px',
                border: isDarkMode ? '1px solid #334155' : '1px solid var(--border-color)'
            },
            challengeCard: {
                background: isDarkMode ? '#1e293b' : '#f1f5f9',
                padding: '2rem',
                borderRadius: '12px'
            },
            solutionCard: {
                background: isDarkMode ? '#1e293b' : '#f1f5f9',
                padding: '2rem',
                borderRadius: '12px'
            },
            challengeTitle: {
                color: isDarkMode ? '#f59e0b' : '#ea580c',
                marginBottom: '1rem'
            },
            solutionTitle: {
                color: isDarkMode ? '#10b981' : '#059669',
                marginBottom: '1rem'
            },
            cardText: {
                color: isDarkMode ? '#cbd5e1' : '#475569',
                lineHeight: '1.6'
            },
            imageContainer: {
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                background: isDarkMode ? '#f8fafc' : '#ffffff',
                boxShadow: isDarkMode ? '0 4px 15px rgba(0, 0, 0, 0.1)' : '0 4px 15px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.3s ease',
                marginBottom: '1rem'
            },
            imageTitle: {
                margin: '0 0 0.5rem 0',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--text-primary)'
            },
            imageDesc: {
                margin: 0,
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: '1.5'
            },
            resultCard: {
                background: isDarkMode ? '#1e293b' : '#f1f5f9',
                padding: '2rem',
                borderRadius: '12px',
                textAlign: 'center',
                border: isDarkMode ? '1px solid #334155' : '1px solid var(--border-color)'
            },
            resultValue: {
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
            },
            resultMetric: {
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
            },
            resultDesc: {
                fontSize: '0.9rem',
                color: 'var(--text-secondary)'
            },
            ctaButton: {
                padding: '1rem 2rem',
                background: 'var(--gradient-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '500'
            }
        };
    };

    const styles = getThemedStyles();

    return (
        <div style={styles.container}>
            {/* Header */}
            <button onClick={onBack} style={styles.backButton}>
                ← Back to Projects
            </button>

            <div style={{ marginBottom: '4rem' }}>
                <h1 style={styles.title}>
                    BSNL App Redesign
                </h1>
                <p style={styles.subtitle}>
                    A Case Study of the BSNL App
                </p>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>⏱️</span>
                        <span>6 months</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>👤</span>
                        <span>Lead UX/UI Designer</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>👥</span>
                        <span>4 designers, 3 developers</span>
                    </div>
                </div>
            </div>

            {/* Project Overview */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Project Overview</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '3rem' }}>
                    This project focuses on redesigning the BSNL mobile application, a digital platform for millions of users to manage their telecommunication services. The goal was to transform a dated, confusing interface into a modern, intuitive, and user-friendly experience.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    <div style={styles.challengeCard}>
                        <h3 style={styles.challengeTitle}>Problem Statement</h3>
                        <p style={styles.cardText}>
                            The existing BSNL app suffers from significant usability issues. Users face a confusing and cluttered interface with poor navigation, inconsistent design elements, and a lack of clear hierarchy. This leads to a frustrating user experience, high drop-off rates, and an increased number of customer support inquiries for common tasks like bill payments, plan management, and new service activation.
                        </p>
                    </div>
                    <div style={styles.solutionCard}>
                        <h3 style={styles.solutionTitle}>Objectives & Goals</h3>
                        <div style={styles.cardText}>
                            <p style={{ marginBottom: '1rem' }}>• <strong>Improve User Experience (UX):</strong> Create seamless and intuitive user flows for all key tasks</p>
                            <p style={{ marginBottom: '1rem' }}>• <strong>Enhance User Interface (UI):</strong> Modernize the app's visual design with clean, consistent aesthetics</p>
                            <p style={{ marginBottom: '1rem' }}>• <strong>Increase User Engagement:</strong> Drive higher usage by making it the go-to platform for BSNL services</p>
                            <p style={{ marginBottom: '1rem' }}>• <strong>Reduce Customer Support Load:</strong> Minimize user confusion with clear guidance and self-service options</p>
                            <p>• <strong>Boost Conversion Rates:</strong> Streamline critical flows like new connection onboarding</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Design Process */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Process: The Design Thinking Framework</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    {[
                        { step: "01", title: "Discover", desc: "User research and analysis" },
                        { step: "02", title: "Define", desc: "Problem definition and insights" },
                        { step: "03", title: "Ideate", desc: "Brainstorming and concept development" },
                        { step: "04", title: "Design", desc: "Prototyping and visual design" }
                    ].map((phase, index) => (
                        <div key={index} style={{
                            background: isDarkMode ? '#1e293b' : '#f1f5f9',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: isDarkMode ? '1px solid #334155' : '1px solid var(--border-color)',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                color: 'var(--accent-primary)',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem'
                            }}>
                                {phase.step}
                            </div>
                            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{phase.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>{phase.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Target Audience */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Target Audience</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {[
                        {
                            title: "Existing BSNL Subscribers",
                            desc: "Individuals who need to manage their existing prepaid/postpaid plans, pay bills, and recharge their accounts."
                        },
                        {
                            title: "Potential Customers",
                            desc: "People interested in getting a new BSNL connection (mobile or broadband) who need a simple, efficient onboarding process."
                        },
                        {
                            title: "Tech-Savvy Users",
                            desc: "Younger users who expect a modern, fast, and feature-rich app experience."
                        },
                        {
                            title: "General Users",
                            desc: "Individuals of all age groups who may be less tech-literate and require a very simple, guided interface."
                        }
                    ].map((audience, index) => (
                        <div key={index} style={{
                            background: isDarkMode ? '#1e293b' : '#f1f5f9',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            border: isDarkMode ? '1px solid #334155' : '1px solid var(--border-color)'
                        }}>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>{audience.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0, fontSize: '0.95rem' }}>{audience.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* User Needs */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>User Needs</h2>
                <div style={{
                    background: isDarkMode ? '#1e293b' : '#f1f5f9',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: isDarkMode ? '1px solid #334155' : '1px solid var(--border-color)'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Quickly pay bills and recharge their accounts",
                            "Easily find and understand their data usage and plan details",
                            "Navigate the app without confusion",
                            "Get a new connection without a complex, multi-step physical process",
                            "Receive clear notifications and updates about their services"
                        ].map((need, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', marginTop: '0.2rem' }}>✓</span>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{need}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* Existing Screens Analysis */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Existing Screens Analysis</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Analysis of the current BSNL app revealed significant usability issues including cluttered interfaces, poor navigation hierarchy, and inconsistent design patterns.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            src: baseImageUrl + '/bsnl-case-study/old_screens/login.png',
                            // title: "Original Home Screen",
                            // desc: "Cluttered interface with poor visual hierarchy and confusing navigation"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/old_screens/step1.png',
                            // title: "Original Home Screen",
                            // desc: "Cluttered interface with poor visual hierarchy and confusing navigation"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/old_screens/step2.png',
                            // title: "Original Home Screen",
                            // desc: "Cluttered interface with poor visual hierarchy and confusing navigation"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/old_screens/step3.png',
                            // title: "Original Home Screen",
                            // desc: "Cluttered interface with poor visual hierarchy and confusing navigation"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/old_screens/step3-2.png',
                            // title: "Original Home Screen",
                            // desc: "Cluttered interface with poor visual hierarchy and confusing navigation"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/old_screens/step4.png',
                            // title: "Original Home Screen",
                            // desc: "Cluttered interface with poor visual hierarchy and confusing navigation"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/old_screens/Declaration.png',
                            // title: "Original Home Screen",
                            // desc: "Cluttered interface with poor visual hierarchy and confusing navigation"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/old_screens/Declaration-success.png',
                            // title: "Original Home Screen",
                            // desc: "Cluttered interface with poor visual hierarchy and confusing navigation"
                        },
                    ].map((item, index) => (
                        <div key={index} style={{ cursor: 'pointer' }}>
                            <div
                                style={styles.imageContainer}
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
                                    color: 'var(--text-muted)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '200px'
                                }}>
                                    <span>📱</span>
                                    <span style={{ marginTop: '1rem' }}>Loading original screen...</span>
                                </div>
                            </div>
                            <h4 style={styles.imageTitle}>
                                {item.title}
                            </h4>
                            <p style={styles.imageDesc}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Competitor and SWOT Analysis */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}> Competitor and SWOT Analysis</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    For my competitive analysis, I took a deep dive into two of BSNL's main rivals in the Indian telecom market: Airtel and Jio. My goal was to conduct a high-level SWOT analysis of their respective app ecosystems to understand their strengths and weaknesses. This research was crucial for identifying key opportunities for BSNL to gain a competitive edge and inform my redesign strategy for their app.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            src: baseImageUrl + '/bsnl-case-study/SWOT_analysis/airtel.jpg',
                            // title: "Primary Color Palette",
                            // desc: "Main brand colors and their variations for consistent visual identity"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/SWOT_analysis/jio.jpg',
                            // title: "Secondary Colors",
                            // desc: "Supporting colors for accents, states, and UI elements"
                        }
                       
                    ].map((item, index) => (
                        <div key={index} style={{ cursor: 'pointer' }}>
                            <div
                                style={styles.imageContainer}
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
                                    color: 'var(--text-muted)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '200px'
                                }}>
                                    <span>🎨</span>
                                    <span style={{ marginTop: '1rem' }}>Loading color palette...</span>
                                </div>
                            </div>
                            <h4 style={styles.imageTitle}>
                                {item.title}
                            </h4>
                            <p style={styles.imageDesc}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Color Palette */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Color Palette</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    A modern color palette was developed to create a cohesive and accessible design system that reflects BSNL's brand identity while improving usability.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            src: baseImageUrl + '/bsnl-case-study/colors/1.png',
                            title: "Primary Color Palette",
                            // desc: "Main brand colors and their variations for consistent visual identity"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/colors/2.png',
                            title: "Secondary Colors",
                            // desc: "Supporting colors for accents, states, and UI elements"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/colors/3.png',
                            title: "Color Usage Guidelines",
                            // desc: "Accessibility-compliant color combinations and usage patterns"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/colors/4.png',
                            title: "Interactive States",
                            // desc: "Color variations for buttons, links, and interactive elements"
                        }
                    ].map((item, index) => (
                        <div key={index} style={{ cursor: 'pointer' }}>
                            <div
                                style={styles.imageContainer}
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
                                    color: 'var(--text-muted)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '200px'
                                }}>
                                    <span>🎨</span>
                                    <span style={{ marginTop: '1rem' }}>Loading color palette...</span>
                                </div>
                            </div>
                            <h4 style={styles.imageTitle}>
                                {item.title}
                            </h4>
                            <p style={styles.imageDesc}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Components */}
            {/* <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Components</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    A modern color palette was developed to create a cohesive and accessible design system that reflects BSNL's brand identity while improving usability.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            src: baseImageUrl + '/bsnl-case-study/components/Radio_option.png',
                            // title: "Secondary Colors",
                            // desc: "Supporting colors for accents, states, and UI elements"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/components/Day.png',
                            // title: "Primary Color Palette",
                            // desc: "Main brand colors and their variations for consistent visual identity"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/components/Month.png',
                            // title: "Secondary Colors",
                            // desc: "Supporting colors for accents, states, and UI elements"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/components/Year.png',
                            // title: "Secondary Colors",
                            // desc: "Supporting colors for accents, states, and UI elements"
                        },


                    ].map((item, index) => (
                        <div key={index} style={{ cursor: 'pointer' }}>
                            <div
                                style={styles.imageContainer}
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
                                    color: 'var(--text-muted)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '200px'
                                }}>
                                    <span>🎨</span>
                                    <span style={{ marginTop: '1rem' }}>Loading color palette...</span>
                                </div>
                            </div>
                            <h4 style={styles.imageTitle}>
                                {item.title}
                            </h4>
                            <p style={styles.imageDesc}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div> */}
            {/* Typography */}
            {/* <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Typography</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    A modern color palette was developed to create a cohesive and accessible design system that reflects BSNL's brand identity while improving usability.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            src: baseImageUrl + '/bsnl-case-study/components/typography.png',
                            // title: "Secondary Colors",
                            // desc: "Supporting colors for accents, states, and UI elements"
                        },
                        

                    ].map((item, index) => (
                        <div key={index} style={{ cursor: 'pointer' }}>
                            <div
                                style={styles.imageContainer}
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
                                    color: 'var(--text-muted)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '200px'
                                }}>
                                    <span>🎨</span>
                                    <span style={{ marginTop: '1rem' }}>Loading color palette...</span>
                                </div>
                            </div>
                            <h4 style={styles.imageTitle}>
                                {item.title}
                            </h4>
                            <p style={styles.imageDesc}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div> */}
            {/* Color Palette */}
            {/* <div>
                <h2 style={styles.sectionTitle}>Color Palette & Design System</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    A modern color palette was developed to create a cohesive and accessible design system that reflects BSNL's brand identity while improving usability.
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            src: baseImageUrl + '/bsnl-case-study/new_screens/Login-screen.png',
                            title: "Modern Login Screen",
                            desc: "Clean, user-friendly login interface with simplified authentication process"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/new_screens/Main-screen.png',
                            title: "Redesigned Home Screen",
                            desc: "Simplified dashboard with clear visual hierarchy and easy access to key features"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/new_screens/New-connection.png',
                            title: "New Connection Flow",
                            desc: "Streamlined onboarding process with guided steps for new service activation"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/new_screens/Number-verification.png',
                            title: "Number Verification",
                            desc: "Secure and intuitive phone number verification process"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/new_screens/SIM-allotment.png',
                            title: "SIM Allotment Interface",
                            desc: "Clear SIM allocation process with progress tracking and confirmation"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/new_screens/Declaration.png',
                            title: "Declaration Screen",
                            desc: "Simplified terms and declaration interface with clear acceptance flow"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/new_screens/Attachment.png',
                            title: "Document Upload",
                            desc: "User-friendly document attachment interface with clear guidelines"
                        },
                        {
                            src: baseImageUrl + '/bsnl-case-study/new_screens/Loading.png',
                            title: "Loading States",
                            desc: "Engaging loading animations that provide clear progress feedback to users"
                        }
                    ].map((item, index) => (
                        <div key={index} style={{ cursor: 'pointer' }}>
                            <div
                                style={styles.imageContainer}
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
                                    color: 'var(--text-muted)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '200px'
                                }}>
                                    <span>🎨</span>
                                    <span style={{ marginTop: '1rem' }}>Loading design...</span>
                                </div>
                            </div>
                            <h4 style={styles.imageTitle}>
                                {item.title}
                            </h4>
                            <p style={styles.imageDesc}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div> */}
            {/* Design & Prototyping Section */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Design & Prototyping</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    The wireframes and redesigned screens showcase the transformation from the old cluttered interface to a modern, user-friendly design.
                </p>

                {/* Wireframes Section */}
                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={styles.subsectionTitle}>Wireframes</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                src: baseImageUrl + '/bsnl-case-study/wireframes/login-screen.png',
                                // title: "Login Screen Wireframe",
                                // desc: "Initial wireframe design for the login page"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/wireframes/Number-verification.png',
                                // title: "Account Screen Wireframe",
                                // desc: "User account management wireframe"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/wireframes/New-connection.png',
                                // title: "Payments Screen Wireframe",
                                // desc: "Bill payment flow wireframe"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/wireframes/Sim-allotment.png',
                                // title: "Services Screen Wireframe",
                                // desc: "Service management wireframe"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/wireframes/Attachment.png',
                                // title: "Services Screen Wireframe",
                                // desc: "Service management wireframe"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/wireframes/Declaration.png',
                                // title: "Services Screen Wireframe",
                                // desc: "Service management wireframe"
                            }
                        ].map((item, index) => (
                            <div key={index} style={{ cursor: 'pointer' }}>
                                <div
                                    style={styles.imageContainer}
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
                                        color: 'var(--text-muted)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minHeight: '200px'
                                    }}>
                                        <span>📱</span>
                                        <span style={{ marginTop: '1rem' }}>Loading wireframe...</span>
                                    </div>
                                </div>
                                <h4 style={styles.imageTitle}>
                                    {item.title}
                                </h4>
                                <p style={styles.imageDesc}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Redesigned Screens */}
                <div>
                    <h3 style={styles.subsectionTitle}>Redesigned Screens</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                        The redesigned BSNL app features a clean, modern interface with improved navigation, simplified user flows, and enhanced visual hierarchy.
                    </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                src: baseImageUrl + '/bsnl-case-study/new_screens/Login-screen.png',
                                // title: "Modern Login Screen",
                                // desc: "Clean, user-friendly login interface with simplified authentication process"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/new_screens/dashboard.png',
                                // title: "Modern Login Screen",
                                // desc: "Clean, user-friendly login interface with simplified authentication process"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/new_screens/Number-verification.png',
                                // title: "Modern Login Screen",
                                // desc: "Clean, user-friendly login interface with simplified authentication process"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/new_screens/step0.png',
                                // title: "Redesigned Home Screen",
                                // desc: "Simplified dashboard with clear visual hierarchy and easy access to key features"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/new_screens/step1.png',
                                // title: "New Connection Flow",
                                // desc: "Streamlined onboarding process with guided steps for new service activation"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/new_screens/step2.png',
                                // title: "Number Verification",
                                // desc: "Secure and intuitive phone number verification process"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/new_screens/step3.png',
                                // title: "Loading States",
                                // desc: "Engaging loading animations that provide clear progress feedback to users"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/new_screens/step3-2.png',
                                // title: "SIM Allotment Interface",
                                // desc: "Clear SIM allocation process with progress tracking and confirmation"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/new_screens/step4.png',
                                // title: "Declaration Screen",
                                // desc: "Simplified terms and declaration interface with clear acceptance flow"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/new_screens/Declaration.png',
                                // title: "Document Upload",
                                // desc: "User-friendly document attachment interface with clear guidelines"
                            },
                            {
                                src: baseImageUrl + '/bsnl-case-study/new_screens/Declaration-success.png',
                                // title: "Document Upload",
                                // desc: "User-friendly document attachment interface with clear guidelines"
                            },

                        ].map((item, index) => (
                            <div key={index} style={{ cursor: 'pointer' }}>
                                <div
                                    style={styles.imageContainer}
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
                                        color: 'var(--text-muted)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minHeight: '200px'
                                    }}>
                                        <span>🎨</span>
                                        <span style={{ marginTop: '1rem' }}>Loading design...</span>
                                    </div>
                                </div>
                                <h4 style={styles.imageTitle}>
                                    {item.title}
                                </h4>
                                <p style={styles.imageDesc}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Working Prototype */}
                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={styles.subsectionTitle}>Working Prototype</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                        Watch the working prototype in action, demonstrating the smooth user flows and interactions of the redesigned BSNL app.
                    </p>
                    <div style={{
                        background: isDarkMode ? '#1e293b' : '#f1f5f9',
                        padding: '2rem',
                        borderRadius: '12px',
                        border: isDarkMode ? '1px solid #334155' : '1px solid var(--border-color)',
                        textAlign: 'center'
                    }}>
                        <video 
                            width="800" 
                            height="450" 
                            controls
                            style={{ 
                                borderRadius: '8px',
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                        >
                            <source src={baseImageUrl + '/bsnl-case-study/new_screens/prototype.mp4'} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            {/* Interactive Prototype */}
            {/* <div style={{ marginBottom: '4rem' }}>
                <h3 style={styles.subsectionTitle}>Interactive Prototype</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Experience the redesigned BSNL app through our interactive prototype. Navigate through the improved user interface and explore the streamlined user flows.
                </p>
                <div style={{
                    background: isDarkMode ? '#1e293b' : '#f1f5f9',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: isDarkMode ? '1px solid #334155' : '1px solid var(--border-color)',
                    textAlign: 'center'
                }}>
                    <iframe 
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '8px' }} 
                        width="800" 
                        height="450" 
                        src="https://embed.figma.com/proto/VmpdHlufynJUIewKu4uLnD/Intense?page-id=0%3A1&node-id=202-9990&viewport=-1973%2C-2484%2C0.31&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=202%3A9572&show-proto-sidebar=1&embed-host=share" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div> */}

            {/* Unique Features */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Unique Features</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '3rem' }}>
                    While the core functionality remains, the redesign introduces unique features in terms of user experience that set the new BSNL app apart from competitors.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        {
                            title: "Simplified Dashboard",
                            desc: "A single-glance dashboard showing essential information like bill amount, data usage, and active plans with intuitive visual indicators."
                        },
                        {
                            title: "Guided Onboarding",
                            desc: "A clear, step-by-step progress bar for new connection sign-ups, reducing user drop-off with contextual help and validation."
                        },
                        {
                            title: "Intuitive Navigation",
                            desc: "A well-structured bottom navigation bar with logical grouping of features that makes all services easily accessible."
                        },
                        {
                            title: "Smart Notifications",
                            desc: "Contextual and timely notifications that keep users informed about their services without overwhelming them."
                        }
                    ].map((feature, index) => (
                        <div key={index} style={{
                            background: isDarkMode ? '#1e293b' : '#f1f5f9',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: isDarkMode ? '1px solid #334155' : '1px solid var(--border-color)'
                        }}>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Results */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Results & Impact</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {[
                        { value: "+45%", metric: "User Satisfaction", desc: "Increase in user satisfaction scores" },
                        { value: "+60%", metric: "Task Completion", desc: "Improvement in task completion rates" },
                        { value: "+35%", metric: "Navigation Efficiency", desc: "Reduction in time to complete key tasks" }
                    ].map((result, index) => (
                        <div key={index} style={styles.resultCard}>
                            <div style={styles.resultValue}>
                                {result.value}
                            </div>
                            <div style={styles.resultMetric}>
                                {result.metric}
                            </div>
                            <div style={styles.resultDesc}>
                                {result.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    Interested in working together?
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Let's discuss how we can create exceptional user experiences for your next project.
                </p>
                <button onClick={onBack} style={styles.ctaButton}>
                    View More Projects
                </button>
            </div>
        </div>
    );
};

export default BSNLCaseStudyThemed;
