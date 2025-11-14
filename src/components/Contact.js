import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    HiMail,
    HiPhone,
    HiLocationMarker,
    HiExternalLink,
    HiOutlinePaperAirplane
} from 'react-icons/hi';
import {
    FaLinkedin,
    FaDribbble,
    FaBehance,
    FaTwitter,
    FaGithub
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EmailJS configuration - using environment variables for security
            const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_your_service_id';
            const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_your_template_id';
            const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key';
            
            // Check if EmailJS is properly configured
            if (serviceId.includes('your_') || templateId.includes('your_') || publicKey.includes('your_')) {
                throw new Error('EmailJS not configured. Please set up your EmailJS credentials.');
            }

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_name: 'Sanath Suram', // Your name
                reply_to: formData.email
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <HiMail />,
            label: 'Email',
            value: 'sanathsuram1214@gmail.com',
            link: 'mailto:sanathsuram1214@gmail.com'
        },
        {
            icon: <HiPhone />,
            label: 'Phone',
            value: '+1940-600-0999',
            link: 'tel:+1940-600-0999'
        },
        {
            icon: <HiLocationMarker />,
            label: 'Location',
            value: 'Texas,USA',
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/sanath-suram-84bb8a20b',
            color: '#0077B5'
        },
        // {
        //     icon: <FaGithub />,
        //     label: 'GitHub',
        //     url: 'https://github.com/sanathsuram',
        //     color: '#333'
        // }
    ];

    return (
        <section id="contact" className="section contact" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Let's Work Together
                </motion.h2>

                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Have an idea? I'll hit you up within 12 hours to get things moving!
                </motion.p>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3>Get in Touch</h3>
                        <p>
                            Ready to bring your next project to life? Whether you have a clear vision
                            or just an idea, I'd love to hear from you and discuss how we can create
                            something amazing together.
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((info) => (
                                <div key={info.label} className="contact-item" style={{ display: info.label === 'Phone' ? 'none' : 'flex' }}>
                                    <div className="contact-icon">{info.icon}</div>
                                    <div className="contact-text">
                                        <span className="contact-label">{info.label}</span>
                                        {info.link ? (
                                            <a href={info.link} className="contact-value">
                                                {info.value}
                                                <HiExternalLink />
                                            </a>
                                        ) : (
                                            <span className="contact-value">{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="social-links">
                            <h4>Follow Me</h4>
                            <div className="social-grid">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.url}
                                        className="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{ '--social-color': social.color }}
                                    >
                                        {social.icon}
                                        <span>{social.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="6"
                                    placeholder="Enter your message here..."
                                ></textarea>
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="status-message success"
                                >
                                    ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                                </motion.div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="status-message error"
                                >
                                    ❌ Oops! There was an error sending your message. Please try again or email me directly.
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                className="btn-primary submit-btn"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <HiOutlinePaperAirplane />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
