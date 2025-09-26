import React from 'react';
import { useTheme } from '../context/ThemeContext';

const CanaraBankCaseStudy = ({ onBack }) => {
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
            quote: {
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                borderLeft: '4px solid var(--accent-primary)',
                paddingLeft: '1rem',
                margin: '1rem 0'
            }
        };
    };

    const styles = getThemedStyles();

    return (
        <div style={styles.container}>
            {/* Header */}
            <button onClick={onBack} style={styles.backButton}>
                ← Back to Case Studies
            </button>

            <div style={{ marginBottom: '4rem' }}>
                <h1 style={styles.title}>
                    Canara Bank Credit Card Management Platform
                </h1>
                <p style={styles.subtitle}>
                    UX Research & Analysis of Digital Banking Experience
                </p>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>🏦</span>
                        <span>Banking & Financial Services</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>👤</span>
                        <span>UX Researcher & Analyst</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>🔍</span>
                        <span>Design Analysis & UX Audit</span>
                    </div>
                </div>
            </div>

            {/* Executive Summary */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Executive Summary</h2>
                <div style={styles.card}>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '0' }}>
                        This case study analyzes the user experience of Canara Bank's credit card management platform, examining how customers interact with their credit card services through a comprehensive digital interface that includes account management, rewards, payments, and support features.
                    </p>
                </div>
            </div>

            {/* Problem Statement */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Problem Statement</h2>
                <div style={styles.card}>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                        Traditional banking interfaces often struggle with:
                    </p>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '2rem', marginBottom: '2rem' }}>
                        <li>Complex navigation structures that confuse users</li>
                        <li>Poor information hierarchy leading to cognitive overload</li>
                        <li>Lack of actionable insights for financial management</li>
                        <li>Disconnected service offerings across different banking functions</li>
                    </ul>
                    <div style={{
                        background: 'var(--accent-primary)',
                        color: 'white',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        fontWeight: '500'
                    }}>
                        "How might we create an intuitive, comprehensive credit card management experience that empowers users to easily manage their finances while discovering valuable services?"
                    </div>
                </div>
            </div>

            {/* User Persona */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>User Persona</h2>
                <div style={styles.card}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Raj Kumar - The Active Credit Card User</h3>
                    
                   
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: '0 0 auto' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '3px solid var(--accent-primary)',
                                flexShrink: 0
                            }}>
                                <img
                                    src={(process.env.PUBLIC_URL || '') + '/images/canara-bank-case-study/persona.png'}
                                    alt="Raj Kumar- Active Credit Card User Persona"
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
                                {/* <img src=(process.env.PUBLIC_URL || '') + '/images/canara-bank-case-study/persona.png" alt="Alex Chen" style="width: 100%; height: 100%; object-fit: cover;"></img> */}
                                <div style={{
                                    display: 'none',
                                    padding: '3rem',
                                    textAlign: 'center',
                                    color: 'var(--text-muted)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '200px',
                                    width: '300px'
                                }}>
                                    <span>👤</span>
                                    <span style={{ marginTop: '1rem' }}>Loading persona...</span>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <strong style={{ color: 'var(--text-primary)' }}>Age:</strong>
                                    <span style={{ color: 'var(--text-secondary)' }}> 28-45</span>
                                </div>
                                <div>
                                    <strong style={{ color: 'var(--text-primary)' }}>Profile:</strong>
                                    <span style={{ color: 'var(--text-secondary)' }}> Tech-comfortable professional</span>
                                </div>
                                <div>
                                    <strong style={{ color: 'var(--text-primary)' }}>Usage:</strong>
                                    <span style={{ color: 'var(--text-secondary)' }}> Regular credit card user</span>
                                </div>
                                <div>
                                    <strong style={{ color: 'var(--text-primary)' }}>Values:</strong>
                                    <span style={{ color: 'var(--text-secondary)' }}> Rewards & convenience</span>
                                </div>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                Needs quick access to balances and payment options, values rewards and cashback opportunities, and requires comprehensive financial management tools.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Platform Screens Analysis */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Platform Interface Analysis</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Comprehensive analysis of the Canara Bank credit card management platform, examining each core feature area and user journey.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            src: (process.env.PUBLIC_URL || '') + '/images/canara-bank-case-study/Dashboard.png',
                            title: "Dashboard Overview",
                            desc: "Central hub displaying account balance, credit limit, recent transactions, and quick access to key features like bill payment via QR code."
                        },
                        {
                            src: (process.env.PUBLIC_URL || '') + '/images/canara-bank-case-study/statement.png',
                            title: "Transaction Statement",
                            desc: "Comprehensive transaction history with detailed merchant information, amounts, and categorization for better financial tracking."
                        },
                        {
                            src: (process.env.PUBLIC_URL || '') + '/images/canara-bank-case-study/Rewards.png',
                            title: "Rewards Management",
                            desc: "Points tracking, redemption catalog, and benefits overview with clear CTAs for reward claiming and points utilization."
                        },
                        {
                            src: (process.env.PUBLIC_URL || '') + '/images/canara-bank-case-study/Manage cards.png',
                            title: "Card Usage Controls",
                            desc: "Security settings and usage management with toggle controls for domestic/international transactions and spending limits."
                        },
                        {
                            src: (process.env.PUBLIC_URL || '') + '/images/canara-bank-case-study/Tools.png',
                            title: "Financial Tools",
                            desc: "EMI calculator and financial planning tools for personal loans, home loans, and car loans with interactive calculations."
                        },
                        {
                            src: (process.env.PUBLIC_URL || '') + '/images/canara-bank-case-study/Feedback.png',
                            title: "Customer Feedback",
                            desc: "Service rating system and referral program interface for customer engagement and service improvement."
                        },
                        {
                            src: (process.env.PUBLIC_URL || '') + '/images/canara-bank-case-study/Support.png',
                            title: "Customer Support",
                            desc: "Comprehensive FAQ section and multiple contact options including call, email, chat, and branch visit information."
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
                                    <span>🏦</span>
                                    <span style={{ marginTop: '1rem' }}>Loading banking interface...</span>
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

            {/* Design Strengths */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Key Design Strengths</h2>
                
                <div style={{ display: 'grid', gap: '2rem' }}>
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>1. Dashboard-Centric Design</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                            <li><strong>Clear Visual Hierarchy:</strong> Important information (total bill, available credit) prominently displayed</li>
                            <li><strong>Action-Oriented Layout:</strong> Quick access to bill payment via QR code</li>
                            <li><strong>Spending Insights:</strong> 3-month spend analysis chart provides valuable financial awareness</li>
                            <li><strong>Service Integration:</strong> Bill payment shortcuts for utilities directly embedded</li>
                        </ul>
                    </div>
                    
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>2. Comprehensive Reward System</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                            <li><strong>Gamification Elements:</strong> Clear points display (35,450 total, 35,105 available)</li>
                            <li><strong>Visual Product Catalog:</strong> Appealing reward items with clear point values</li>
                            <li><strong>Benefit Communication:</strong> Right sidebar effectively communicates card benefits</li>
                            <li><strong>Call-to-Action Optimization:</strong> Prominent "Claim Now" buttons drive engagement</li>
                        </ul>
                    </div>
                    
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>3. Financial Management Tools</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                            <li><strong>Transaction Transparency:</strong> Detailed statement view with merchant categorization</li>
                            <li><strong>EMI Calculator:</strong> Built-in tool for loan planning across different product types</li>
                            <li><strong>Purchase Conversion:</strong> Easy EMI conversion feature for large purchases</li>
                            <li><strong>Security Management:</strong> Toggle controls for domestic/international transactions</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* UX Assessment */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Usability Assessment</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    <div style={styles.card}>
                        <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>✅ Positive Aspects</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                            <li><strong>Cognitive Load Management:</strong> Information grouped logically by user intent</li>
                            <li><strong>Recognition Over Recall:</strong> Familiar patterns and standard banking terminology</li>
                            <li><strong>Error Prevention:</strong> Usage controls allow proactive security management</li>
                            <li><strong>Help & Documentation:</strong> Comprehensive FAQ and multiple support channels</li>
                        </ul>
                    </div>
                    
                    <div style={styles.card}>
                        <h3 style={{ color: '#f59e0b', marginBottom: '1rem' }}>⚠️ Areas for Improvement</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                            <li><strong>Information Density:</strong> Rewards page may overwhelm users with choices</li>
                            <li><strong>Navigation Depth:</strong> Some features may require too many clicks to access</li>
                            <li><strong>Mobile Experience:</strong> Unclear how complex interactions translate to smaller screens</li>
                            <li><strong>Real-time Updates:</strong> Unclear if information updates dynamically</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Recommendations */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Enhancement Recommendations</h2>
                
                <div style={{ display: 'grid', gap: '2rem' }}>
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Immediate Improvements</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Mobile-First Design</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Optimize for smartphone usage patterns</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Progressive Web App</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Enable offline access to basic account information</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Notification System</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Proactive alerts for bills and suspicious activity</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Search Functionality</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Quick access to transactions and features</p>
                            </div>
                        </div>
                    </div>
                    
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Long-term Vision</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>AI-Powered Insights</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Predictive spending analysis and recommendations</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Ecosystem Integration</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Connection with other Canara Bank products</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Open Banking</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Integration with external financial services</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Voice Interface</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Support for voice commands and queries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conclusion */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Conclusion</h2>
                <div style={styles.card}>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                        The Canara Bank credit card management platform demonstrates a solid understanding of user needs with its comprehensive feature set and logical information architecture. The design successfully balances functionality with usability, providing users with both essential banking services and value-added features like rewards and financial tools.
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div>
                            <h4 style={{ color: '#10b981', marginBottom: '1rem' }}>Key Strengths</h4>
                            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                                <li>Clear information hierarchy</li>
                                <li>Comprehensive self-service capabilities</li>
                                <li>Effective reward system driving engagement</li>
                                <li>Multiple customer support touchpoints</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Primary Opportunities</h4>
                            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                                <li>Mobile experience optimization</li>
                                <li>Enhanced personalization</li>
                                <li>Real-time updates and notifications</li>
                                <li>Advanced financial planning tools</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div style={{
                        marginTop: '2rem',
                        fontStyle: 'italic',
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        textAlign: 'center'
                    }}>
                        This platform serves as a strong foundation for digital banking services, with clear opportunities for evolution toward a more personalized, AI-enhanced user experience.
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    Interested in financial UX design?
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Let's discuss how we can create exceptional banking experiences for your next project.
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
                    View More Case Studies
                </button>
            </div>
        </div>
    );
};

export default CanaraBankCaseStudy;