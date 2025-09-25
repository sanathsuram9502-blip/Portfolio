import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SmartCitiesEnergyPrediction = ({ onBack }) => {
    const { isDarkMode } = useTheme();

    const getThemedStyles = () => {
        return {
            container: {
                minHeight: '100vh',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                padding: window.innerWidth <= 768 ? '1rem' : '2rem',
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
                fontSize: window.innerWidth <= 768 ? '2rem' : window.innerWidth <= 480 ? '1.75rem' : '3rem',
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
            statCard: {
                background: isDarkMode ? '#1e293b' : '#f8fafc',
                padding: '1.5rem',
                borderRadius: '12px',
                textAlign: 'center',
                border: isDarkMode ? '1px solid #334155' : '1px solid #e2e8f0'
            },
            statValue: {
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem'
            },
            statLabel: {
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                fontWeight: '500'
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
                    Smart Cities Energy Prediction
                </h1>
                <p style={styles.subtitle}>
                    Machine Learning-Driven Analysis of Residential Energy Consumption in U.S. Cities
                </p>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>🏙️</span>
                        <span>Smart Cities & Energy</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>🤖</span>
                        <span>Machine Learning Researcher</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>📊</span>
                        <span>Data Analysis & Prediction</span>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem', fontSize: '0.9rem' }}>
                    <div>
                        <strong style={{ color: 'var(--text-primary)' }}>Research Team:</strong>
                        <span style={{ color: 'var(--text-secondary)' }}> Chariteash Narra, Santosh Kharal, Venkata Sanath Kumar Suram</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--text-primary)' }}>Data Source:</strong>
                        <span style={{ color: 'var(--text-secondary)' }}> U.S. Department of Energy</span>
                    </div>
                </div>
            </div>

            {/* Executive Summary */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Executive Summary</h2>
                <div style={styles.card}>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                        This comprehensive study analyzes residential energy consumption patterns across U.S. cities using machine learning techniques, 
                        focusing on electricity and natural gas usage across different climate zones and population demographics. The research addresses 
                        critical questions about energy demand patterns to support sustainable energy planning and policy decisions.
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        <div style={styles.statCard}>
                            <div style={styles.statValue}>94%</div>
                            <div style={styles.statLabel}>Electricity Prediction Accuracy</div>
                        </div>
                        <div style={styles.statCard}>
                            <div style={styles.statValue}>86%</div>
                            <div style={styles.statLabel}>Natural Gas Prediction Accuracy</div>
                        </div>
                        <div style={styles.statCard}>
                            <div style={styles.statValue}>2.5x</div>
                            <div style={styles.statLabel}>Higher Electricity in Hot Zones</div>
                        </div>
                        <div style={styles.statCard}>
                            <div style={styles.statValue}>8</div>
                            <div style={styles.statLabel}>Climate Zones Analyzed</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Problem Statement */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Problem Statement & Research Objectives</h2>
                <div style={styles.card}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>The Challenge</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                        Growing urbanization, industrialization, and climate variations have created unprecedented demands on energy infrastructure. 
                        With the residential sector consuming <strong>38.4% of total U.S. electricity</strong> and <strong>15% of natural gas</strong>, 
                        understanding consumption patterns is crucial for resource allocation optimization and environmental sustainability initiatives.
                    </p>

                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Research Questions</h3>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '2rem', marginBottom: '2rem' }}>
                        <li>How does energy consumption vary across climatic zones for electricity vs. natural gas?</li>
                        <li>What are the key consumption patterns in cities with different population densities?</li>
                        <li>Can predictive models forecast energy consumption based on demographic and climatic factors?</li>
                        <li>How accurately can cities be classified into consumption categories?</li>
                    </ul>

                    <div style={{
                        background: 'var(--accent-primary)',
                        color: 'white',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        fontWeight: '500'
                    }}>
                        <strong>Objective:</strong> Develop machine learning models to predict energy consumption patterns and provide actionable insights for policymakers and utility providers.
                    </div>
                </div>
            </div>

            {/* Methodology */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Methodology & Data Sources</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Dataset Overview</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                            <li><strong>Source:</strong> U.S. Department of Energy via DATA.GOV</li>
                            <li><strong>Publisher:</strong> National Renewable Energy Laboratory</li>
                            <li><strong>Last Updated:</strong> June 15, 2024</li>
                            <li><strong>License:</strong> Creative Commons Attribution 4.0</li>
                        </ul>
                    </div>
                    
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Key Variables</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                            <li><strong>Climate Zones:</strong> 8 DOE zones (hot-humid to marine)</li>
                            <li><strong>Population:</strong> 20 cohorts from 12K to 39M residents</li>
                            <li><strong>Electricity:</strong> Residential consumption in MWh</li>
                            <li><strong>Natural Gas:</strong> Consumption in Tcf</li>
                        </ul>
                    </div>
                </div>

                <div style={styles.card}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Machine Learning Implementation</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Programming Environment</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Python with Google Colaboratory</p>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Key Libraries</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn</p>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Models Used</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Random Forest, K-Nearest Neighbors, K-Means Clustering</p>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Validation</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>K-fold cross-validation (k=5)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Research Findings & Visualizations */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Research Findings & Analysis</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Comprehensive analysis of energy consumption patterns across climate zones and population demographics, 
                    supported by statistical validation and machine learning model predictions.
                </p>

                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={styles.subsectionTitle}>Climate Zone Impact on Energy Consumption</h3>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '2rem',
                        marginBottom: '2rem'
                    }}>
                        {[
                            {
                                src: "/images/energy-consumption-case-study/rq1-graph1.png",
                                title: "Electricity Consumption by Climate Zone",
                                desc: "Zone 1 (Hot-Humid) shows highest electricity consumption (~260,000 MWh) for cooling needs, with progressively decreasing consumption in colder zones."
                            },
                            {
                                src: "/images/energy-consumption-case-study/rq1-graph2.png",
                                title: "Natural Gas Consumption by Climate Zone",
                                desc: "Zones 4-5 (Cold/Very Cold) demonstrate peak natural gas consumption (~190,000 Tcf) for heating, with lowest consumption in hot zones."
                            }
                        ].map((item, index) => (
                            <div key={index}>
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
                                        <span style={{ marginTop: '1rem' }}>Loading analysis chart...</span>
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

                    <div style={styles.card}>
                        <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Statistical Validation (ANOVA)</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            <div>
                                <strong style={{ color: 'var(--text-primary)' }}>Electricity:</strong>
                                <span style={{ color: 'var(--text-secondary)' }}> F-statistic = 44.98, p-value = 1.12×10⁻⁶³</span>
                            </div>
                            <div>
                                <strong style={{ color: 'var(--text-primary)' }}>Natural Gas:</strong>
                                <span style={{ color: 'var(--text-secondary)' }}> F-statistic = 4.17, p-value = 0.000135</span>
                            </div>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
                            <strong>Conclusion:</strong> Highly significant differences across climate zones (p &lt; 0.05)
                        </p>
                    </div>
                </div>

                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={styles.subsectionTitle}>Population Impact on Energy Demand</h3>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '2rem',
                        marginBottom: '2rem'
                    }}>
                        {[
                            {
                                src: "/images/energy-consumption-case-study/rq2-graph1.png",
                                title: "Electricity Consumption by Population Cohort",
                                desc: "Exponential growth pattern showing massive energy demands in population cohort 20 (>39M residents) with minimal baseline consumption in small cities."
                            },
                            {
                                src: "/images/energy-consumption-case-study/rq2-graph2.png",
                                title: "Natural Gas Consumption by Population Cohort",
                                desc: "Similar exponential pattern for natural gas consumption, with urban centers showing disproportionately high per-capita consumption due to density effects."
                            }
                        ].map((item, index) => (
                            <div key={index}>
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
                                        <span>📈</span>
                                        <span style={{ marginTop: '1rem' }}>Loading population analysis...</span>
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
            </div>

            {/* Machine Learning Results */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Machine Learning Model Performance</h2>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {[
                        {
                            src: "/images/energy-consumption-case-study/randomForestRegression.png",
                            title: "Random Forest Regression Analysis",
                            desc: "Random Forest achieved 94% accuracy (R² = 0.941) for electricity prediction and 77% for natural gas, excelling at capturing complex nonlinear relationships."
                        },
                        {
                            src: "/images/energy-consumption-case-study/knn.png",
                            title: "K-Nearest Neighbors Performance",
                            desc: "KNN regression achieved 91% accuracy for electricity and 86% for natural gas prediction, performing better for natural gas through local interpolation of similar cities."
                        }
                    ].map((item, index) => (
                        <div key={index}>
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
                                    <span>🤖</span>
                                    <span style={{ marginTop: '1rem' }}>Loading ML results...</span>
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

                <div style={styles.card}>
                    <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Model Comparison Results</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div>
                            <h4 style={{ color: '#10b981', marginBottom: '1rem' }}>🏆 Electricity Prediction Winner</h4>
                            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                                <li><strong>Random Forest:</strong> R² = 0.941 (94% accuracy)</li>
                                <li><strong>KNN Regression:</strong> R² = 0.915 (91% accuracy)</li>
                                <li><strong>Best for:</strong> Complex nonlinear relationships</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 style={{ color: '#10b981', marginBottom: '1rem' }}>🏆 Natural Gas Prediction Winner</h4>
                            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                                <li><strong>KNN Regression:</strong> R² = 0.864 (86% accuracy)</li>
                                <li><strong>Random Forest:</strong> R² = 0.777 (77% accuracy)</li>
                                <li><strong>Best for:</strong> Local interpolation of similar cities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Business & Policy Implications */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Business & Policy Implications</h2>
                
                <div style={{ display: 'grid', gap: '2rem' }}>
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>For Utility Companies</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Resource Allocation</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Focus infrastructure investments on high-consumption zones and implement dynamic pricing models</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Customer Segmentation</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Target energy efficiency programs and develop climate-appropriate service offerings</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Predictive Maintenance</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Optimize maintenance schedules based on usage patterns and demand forecasting</p>
                            </div>
                        </div>
                    </div>
                    
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>For Policymakers</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Building Codes</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Mandate enhanced insulation in cold zones and cooling-efficient designs in hot zones</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Incentive Programs</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Implement targeted subsidies for solar panels in hot zones and heat pumps in cold regions</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Urban Planning</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Factor energy consumption into city development and plan grid infrastructure for growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommendations */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Recommendations & Future Research</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    <div style={styles.card}>
                        <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>Immediate Actions (0-2 years)</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                            <li>Implement dynamic pricing in high-consumption cities</li>
                            <li>Target energy-efficient appliance incentives in Zones 1 and 4-5</li>
                            <li>Strengthen building codes for climate-specific efficiency</li>
                        </ul>
                    </div>
                    
                    <div style={styles.card}>
                        <h3 style={{ color: '#f59e0b', marginBottom: '1rem' }}>Medium-term Strategies (2-5 years)</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                            <li>Deploy smart grid technology in high-consumption areas</li>
                            <li>Develop renewable integration programs by climate zone</li>
                            <li>Implement predictive analytics for demand forecasting</li>
                        </ul>
                    </div>
                    
                    <div style={styles.card}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Future Research Directions</h3>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                            <li>Building-level consumption analysis for granular insights</li>
                            <li>Deep learning and neural networks for pattern recognition</li>
                            <li>Integration of socioeconomic and behavioral factors</li>
                            <li>Climate change impact assessment on energy demand</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Key Findings Summary */}
            <div style={{ marginBottom: '4rem' }}>
                <h2 style={styles.sectionTitle}>Key Findings & Impact</h2>
                <div style={styles.card}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                        <div>
                            <h4 style={{ color: '#10b981', marginBottom: '1rem' }}>Research Contributions</h4>
                            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                                <li>Climate zone classification crucial for energy planning</li>
                                <li>Population growth requires proactive capacity management</li>
                                <li>ML models effectively predict consumption patterns</li>
                                <li>Targeted interventions should be climate-specific</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>Industry Impact</h4>
                            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                                <li>Evidence-based energy policy development foundation</li>
                                <li>Methodologies for ongoing consumption monitoring</li>
                                <li>Data-driven approaches for infrastructure planning</li>
                                <li>Sustainable energy solutions for urban populations</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div style={{
                        marginTop: '2rem',
                        fontStyle: 'italic',
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        textAlign: 'center',
                        padding: '1rem',
                        background: isDarkMode ? '#0f172a' : '#f8fafc',
                        borderRadius: '8px'
                    }}>
                        This study provides a foundation for evidence-based energy policy development and establishes methodologies 
                        for ongoing monitoring and prediction of residential energy consumption patterns across diverse U.S. metropolitan areas.
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    Interested in data-driven energy solutions?
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Let's discuss how machine learning can optimize energy systems and support sustainable urban development.
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

export default SmartCitiesEnergyPrediction;
