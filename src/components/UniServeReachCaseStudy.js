import React from 'react';
import { useTheme } from '../context/ThemeContext';

const UniServeReachCaseStudy = ({ onBack }) => {
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
                marginBottom: '1.5rem',
                color: 'var(--accent-primary)'
            },
            card: {
                background: isDarkMode ? '#1e293b' : '#f1f5f9',
                padding: '2rem',
                borderRadius: '12px',
                border: isDarkMode ? '1px solid #334155' : '1px solid var(--border-color)',
                marginBottom: '2rem'
            },
            overviewCard: {
                background: isDarkMode ? '#1e293b' : '#f1f5f9',
                padding: '2rem',
                borderRadius: '12px',
                border: isDarkMode ? '1px solid #334155' : '1px solid var(--border-color)',
                marginBottom: '2rem'
            },
            metricCard: {
                background: isDarkMode ? '#1e293b' : '#f1f5f9',
                padding: '1.5rem',
                borderRadius: '12px',
                border: isDarkMode ? '1px solid #334155' : '1px solid var(--border-color)',
                textAlign: 'center'
            },
            highlight: {
                background: 'var(--accent-primary)',
                color: 'white',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.9rem'
            },
            quote: {
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                borderLeft: '4px solid var(--accent-primary)',
                paddingLeft: '1rem',
                margin: '1rem 0'
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
                    UniServe™ Reach
                </h1>
                <p style={styles.subtitle}>
                    Unifying Multi-Channel Communication Analytics for Enterprise Teams
                </p>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>⏱️</span>
                        <span>12 weeks</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>👤</span>
                        <span>Senior UX/UI Designer</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>👥</span>
                        <span>Product Manager, 2 Engineers, Data Analyst, QA Engineer</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>🛠️</span>
                        <span>Figma, Miro, Hotjar, Google Analytics, UserTesting</span>
                    </div>
                </div>
            </div>

            {/* Project Overview */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Project Overview</h2>
                <div style={styles.overviewCard}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>The Challenge</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                        Marketing and communication teams needed a unified view of their multi-channel messaging performance across Email, SMS, and WhatsApp, but existing solutions provided fragmented data in separate interfaces, making it impossible to optimize cross-channel strategies effectively.
                    </p>
                    
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>The Solution</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                        A comprehensive analytics dashboard that consolidates performance data from all communication channels into a single, intuitive interface with actionable insights and real-time monitoring capabilities.
                    </p>
                </div>
            </div>

            {/* Problem Statement */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Problem Statement</h2>
                
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={styles.subsectionTitle}>Business Context</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                        UniServe™ Reach customers manage billions of messages across multiple channels monthly, but lacked visibility into:
                    </p>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '2rem' }}>
                        <li><strong>Cross-channel performance comparison</strong></li>
                        <li><strong>Real-time delivery status tracking</strong></li>
                        <li><strong>Source system effectiveness</strong></li>
                        <li><strong>Load distribution patterns</strong></li>
                    </ul>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>User Pain Points</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                            <li><strong>Data Fragmentation:</strong> Teams had to switch between 3-4 different tools</li>
                            <li><strong>Delayed Insights:</strong> Performance data available with 24-48 hour delays</li>
                            <li><strong>No Comparative Analysis:</strong> Couldn't compare Email vs SMS vs WhatsApp</li>
                            <li><strong>Complex Reporting:</strong> Manual data compilation from multiple sources</li>
                        </ul>
                    </div>
                    
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Success Metrics to Improve</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                            <li>Reduce insight access time from 45 minutes to under 5 minutes</li>
                            <li>Increase user engagement with analytics by 200%</li>
                            <li>Decrease support tickets by 60%</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Research & Discovery */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Research & Discovery</h2>
                
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={styles.subsectionTitle}>Stakeholder Interviews</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                        Conducted interviews with 15 users across different roles:
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <div style={{
                            background: isDarkMode ? '#1e293b' : '#f1f5f9',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Marketing Directors</h4>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)', margin: '0.5rem 0' }}>5</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Executive-level insights for strategy decisions</p>
                        </div>
                        <div style={{
                            background: isDarkMode ? '#1e293b' : '#f1f5f9',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Campaign Managers</h4>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)', margin: '0.5rem 0' }}>6</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Operational metrics for day-to-day optimization</p>
                        </div>
                        <div style={{
                            background: isDarkMode ? '#1e293b' : '#f1f5f9',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Technical Operations</h4>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)', margin: '0.5rem 0' }}>4</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>System performance and troubleshooting</p>
                        </div>
                    </div>
                </div>

                <div style={styles.card}>
                    <h3 style={styles.subsectionTitle}>Key Research Insights</h3>
                    <div style={{ 
                        background: 'var(--accent-primary)', 
                        color: 'white', 
                        padding: '1.5rem', 
                        borderRadius: '8px', 
                        marginBottom: '2rem',
                        textAlign: 'center'
                    }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Primary Finding</h4>
                        <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>
                            Users spent 40% of their time gathering data instead of acting on insights
                        </p>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>85%</span>
                            <span style={{ color: 'var(--text-secondary)' }}>wanted real-time data updates</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>92%</span>
                            <span style={{ color: 'var(--text-secondary)' }}>needed drill-down capabilities</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>78%</span>
                            <span style={{ color: 'var(--text-secondary)' }}>required customizable date ranges</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>89%</span>
                            <span style={{ color: 'var(--text-secondary)' }}>wanted automated alerting</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* User Personas */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>User Personas</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    <div style={styles.card}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '3px solid var(--accent-primary)',
                                flexShrink: 0
                            }}>
                                <img
                                    src={(process.env.PUBLIC_URL || '') + '/images/uniserve-case-study/persona1.png'}
                                    alt="Alex Chen"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div style={{
                                    display: 'none',
                                    width: '100%',
                                    height: '100%',
                                    background: 'var(--accent-primary)',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold'
                                }}>
                                    AC
                                </div>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--accent-primary)', margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>Srinivas</h3>
                                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1rem', fontWeight: '500' }}>Marketing Operations Manager</p>
                            </div>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            <strong>Demographics:</strong> 28-35, manages multi-channel campaigns for enterprise clients
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            <strong>Goals:</strong> Monitor campaign performance, identify optimization opportunities, report to leadership
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            <strong>Pain Points:</strong> Data scattered across platforms, manual report creation, delayed insights
                        </p>
                        <div style={styles.quote}>
                            "I need to see how all our channels are performing at a glance, not hunt through different dashboards."
                        </div>
                    </div>
                    
                    <div style={styles.card}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '3px solid var(--accent-primary)',
                                flexShrink: 0
                            }}>
                                <img
                                    src={(process.env.PUBLIC_URL || '') + '/images/uniserve-case-study/persona2.png'}
                                    alt="Sarah Rodriguez"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div style={{
                                    display: 'none',
                                    width: '100%',
                                    height: '100%',
                                    background: 'var(--accent-primary)',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold'
                                }}>
                                    SR
                                </div>
                            </div>
                            <div>
                                <h3 style={{ color: 'var(--accent-primary)', margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>Sarah Rodriguez</h3>
                                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1rem', fontWeight: '500' }}>Technical Operations Lead</p>
                            </div>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            <strong>Demographics:</strong> 30-38, ensures system reliability and performance
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            <strong>Goals:</strong> Monitor system health, troubleshoot issues, optimize infrastructure
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            <strong>Pain Points:</strong> No unified view of system load, difficult to correlate issues across channels
                        </p>
                        <div style={styles.quote}>
                            "When something goes wrong, I need to quickly understand which systems are affected and how."
                        </div>
                    </div>
                </div>
            </div>

            {/* Design Decisions */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Design Decisions & Rationale</h2>
                
                <div style={{ display: 'grid', gap: '3rem' }}>
                    <div style={styles.card}>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: '1fr 280px', 
                            gap: '2rem', 
                            alignItems: 'center' 
                        }}>
                            <div>
                                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>1. Card-Based Metric Display</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
                                    <strong>Decision:</strong> Used large, prominent cards for key metrics (Total Received, Success Rate, etc.)
                                </p>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    <strong>Rationale:</strong> Enables quick scanning of critical KPIs, each channel gets equal visual weight for fair comparison, color coding provides instant status recognition.
                                </p>
                            </div>
                            <div style={{
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                            }}>
                                <img
                                    src={(process.env.PUBLIC_URL || '') + '/images/uniserve-case-study/card.png'}
                                    alt="Card-based metric display"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div style={styles.card}>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: '1fr 280px', 
                            gap: '2rem', 
                            alignItems: 'center' 
                        }}>
                            <div>
                                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>2. Tabbed Navigation Structure</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
                                    <strong>Decision:</strong> Implemented Channel | Source System | Aggregator tabs
                                </p>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    <strong>Rationale:</strong> Reduces cognitive load by separating different analysis perspectives, maintains context while allowing deep-dive into specific dimensions.
                                </p>
                            </div>
                            <div style={{
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                            }}>
                                <img
                                    src={(process.env.PUBLIC_URL || '') + '/images/uniserve-case-study/nav-tab.png'}
                                    alt="Tabbed navigation structure"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div style={styles.card}>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: '1fr 280px', 
                            gap: '2rem', 
                            alignItems: 'center' 
                        }}>
                            <div>
                                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>3. Dual Pie Chart Analysis</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
                                    <strong>Decision:</strong> Placed "Top 10 Source Systems" and "Load Distribution" side by side
                                </p>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    <strong>Rationale:</strong> Enables correlation analysis between source performance and load patterns, consistent color coding helps users track systems across both views.
                                </p>
                            </div>
                            <div style={{
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                            }}>
                                <img
                                    src={(process.env.PUBLIC_URL || '') + '/images/uniserve-case-study/pie-chart.png'}
                                    alt="Dual pie chart analysis"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Screens */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Dashboard Screens</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    The UniServe™ Reach provides a comprehensive view of multi-channel communication performance with intuitive navigation and real-time insights.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            src: (process.env.PUBLIC_URL || '') + '/images/uniserve-case-study/Channel.png',
                            title: "Channel Overview Dashboard",
                            desc: "Main dashboard showing Email, SMS, and WhatsApp performance metrics with real-time data updates and comparative analysis capabilities."
                        },
                        {
                            src: (process.env.PUBLIC_URL || '') + '/images/uniserve-case-study/Channel-1.png',
                            title: "Detailed Channel Analysis",
                            desc: "Drill-down view with granular performance tables, source system breakdown, and detailed metrics for technical operations teams."
                        },
                        {
                            src: (process.env.PUBLIC_URL || '') + '/images/uniserve-case-study/Channel_success.png',
                            title: "Success Metrics Focus",
                            desc: "Comprehensive success rate analysis with CHUB performance indicators, load distribution charts, and system health monitoring."
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
                                    <span>📊</span>
                                    <span style={{ marginTop: '1rem' }}>Loading dashboard screen...</span>
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

            {/* Usability Testing Results */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Usability Testing Results</h2>
                
                <div style={styles.card}>
                    <h3 style={styles.subsectionTitle}>Testing Methodology</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-primary)', margin: '0' }}>8</p>
                            <p style={{ color: 'var(--text-secondary)', margin: '0', fontSize: '0.9rem' }}>Current Users</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-primary)', margin: '0' }}>45min</p>
                            <p style={{ color: 'var(--text-secondary)', margin: '0', fontSize: '0.9rem' }}>Remote Sessions</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-primary)', margin: '0' }}>4</p>
                            <p style={{ color: 'var(--text-secondary)', margin: '0', fontSize: '0.9rem' }}>Key Tasks</p>
                        </div>
                    </div>
                    
                    <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Key Results</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <div style={{
                            background: isDarkMode ? '#0f172a' : '#ffffff',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            border: '1px solid var(--accent-primary)'
                        }}>
                            <h5 style={{ color: 'var(--accent-primary)', margin: '0 0 0.5rem 0' }}>Find Email Success Rate</h5>
                            <p style={{ color: 'var(--text-primary)', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>100% Success Rate</p>
                            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Average time: 12 seconds</p>
                        </div>
                        <div style={{
                            background: isDarkMode ? '#0f172a' : '#ffffff',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            border: '1px solid var(--accent-primary)'
                        }}>
                            <h5 style={{ color: 'var(--accent-primary)', margin: '0 0 0.5rem 0' }}>Compare Channels</h5>
                            <p style={{ color: 'var(--text-primary)', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>87.5% Success Rate</p>
                            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Average time: 28 seconds</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact & Results */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Impact & Results</h2>
                
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={styles.subsectionTitle}>Quantitative Results (3 months post-launch)</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        <div style={styles.metricCard}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                                93%
                            </div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                Time Reduction
                            </div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                From 45 minutes to 3 minutes
                            </div>
                        </div>
                        
                        <div style={styles.metricCard}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                                250%
                            </div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                Engagement Increase
                            </div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                Analytics page views
                            </div>
                        </div>
                        
                        <div style={styles.metricCard}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                                65%
                            </div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                Support Reduction
                            </div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                Data-related inquiries
                            </div>
                        </div>
                        
                        <div style={styles.metricCard}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                                $1.2M
                            </div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                Additional ARR
                            </div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                From improved retention
                            </div>
                        </div>
                    </div>
                </div>

                <div style={styles.card}>
                    <h3 style={styles.subsectionTitle}>Qualitative Feedback</h3>
                    <div style={styles.quote}>
                        "This dashboard has transformed how we monitor our campaigns. I can now spot issues and opportunities in real-time instead of waiting for weekly reports." 
                        <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--accent-primary)' }}>- Marketing Director</span>
                    </div>
                    <div style={styles.quote}>
                        "The unified view helps me quickly identify which channels are performing best and allocate budget accordingly." 
                        <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--accent-primary)' }}>- Campaign Manager</span>
                    </div>
                </div>
            </div>

            {/* Key Takeaways */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Key Takeaways</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>What Worked Well</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                            <li><strong>Data-Driven Design:</strong> Using actual customer data volumes made designs more realistic</li>
                            <li><strong>Iterative Testing:</strong> Three rounds of user testing prevented major usability issues</li>
                            <li><strong>Cross-Team Collaboration:</strong> Regular sync with engineering avoided technical debt</li>
                            <li><strong>Progressive Enhancement:</strong> Starting with core functionality and adding features based on feedback</li>
                        </ul>
                    </div>
                    
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Challenges Overcome</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                            <li><strong>Performance with Large Datasets:</strong> Implemented virtualization for tables with millions of rows</li>
                            <li><strong>Real-Time Data Accuracy:</strong> Worked with backend team to ensure data consistency</li>
                            <li><strong>Stakeholder Alignment:</strong> Created interactive prototypes to align different viewpoints early</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    Interested in working together?
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Let's discuss how we can create exceptional data visualization experiences for your next project.
                </p>
                <button onClick={onBack} style={{
                    padding: '1rem 2rem',
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: '500'
                }}>
                    View More Projects
                </button>
            </div>
        </div>
    );
};

export default UniServeReachCaseStudy;
