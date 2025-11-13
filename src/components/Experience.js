import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCalendar, HiLocationMarker, HiBriefcase } from 'react-icons/hi';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      id: 1,
      title: 'UI/UX Designer',
      company: 'Medlaunch Concepts',
      location: 'Remote, USA',
      period: '06/2025 - Present',
      type: 'Full-time',
      description: [
        'Lead the interactive design vision for a hospital accreditation portal, owning user flows, page layouts, and interface components to improve engagement and compliance workflows',
        'Rapidly created wireframes and high-fidelity prototypes in Figma, iterating designs based on user research and sprint feedback',
        'Designed responsive interfaces with a mobile-first approach, ensuring seamless cross-device experiences',
        'Enhanced and maintained the design system, ensuring scalability for future features',
        'Developed and designed front-end components using React JS and Figma screens, ensuring smooth handoff to development team',
        'Facilitated collaborative design workshops with stakeholders, enabling cross-functional teams to ideate and align on key design challenges'
      ],
      technologies: ['Figma', 'React JS', 'Design Systems', 'User Research', 'Prototyping']
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'Threekit',
      location: 'Remote, USA',
      period: '08/2024 - 06/2025',
      type: 'Full-time',
      description: [
        'Owned end-to-end UX for an AR-based virtual try-on platform, developing interactive wireflows and prototypes for multi-sided user experiences',
        'Conducted A/B tests with 500+ participants, analyzing data to optimize navigation and UI elements, improving task completion rates by 35%',
        'Integrated AI-powered personalization, boosting conversion rates by 50% while collaborating closely with engineering for timely implementation',
        'Managed and evolved the design system to maintain visual and interactive consistency',
        'Partnered with marketing to align platform UI with brand guidelines, ensuring cohesive messaging across touchpoints',
        'Created interactive onboarding flows to help new users understand complex AR features, reducing support tickets by 25%'
      ],
      technologies: ['AR/VR Design', 'A/B Testing', 'AI Integration', 'Design Systems', 'User Analytics']
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Intense Technologies',
      location: 'Hyderabad, India',
      period: '09/2021 - 07/2023',
      type: 'Full-time',
      description: [
        'Translated business goals and user stories into refined UX and UI designs for 20+ hardware-integrated web and desktop applications',
        'Led workshops with stakeholders to sketch and validate UX workflows, aligning complex requirements with user needs',
        'Conducted usability testing to uncover insights, iterating designs that increased efficiency and reduced errors',
        'Collaborated cross-functionally with designers, developers, and product managers, ensuring alignment and high-quality implementation',
        'Developed design documentation and guidelines to help developers maintain consistency in future updates'
      ],
      technologies: ['Desktop Applications', 'Hardware Integration', 'Usability Testing', 'Design Documentation']
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      company: 'Inus Tech',
      location: 'Hyderabad, India',
      period: '01/2020 - 08/2021',
      type: 'Full-time',
      description: [
        'Conducted user interviews and analytics reviews to identify pain points, then rapidly prototyped and tested solutions, improving product discovery by 40%',
        'Designed interactive mockups and wireframes, integrating Zeplin for seamless design handoff to developers',
        'Held regular user feedback sessions, ensuring users\' voices directly shaped future design iterations',
        'Introduced accessibility best practices, including color contrast improvements and keyboard navigation support, to meet WCAG 2.1 compliance'
      ],
      technologies: ['User Interviews', 'Zeplin', 'Accessibility (WCAG 2.1)', 'Analytics', 'Rapid Prototyping']
    }
  ];

  const education = [
    {
      degree: 'Masters in Advanced Data Analytics',
      institution: 'University of North Texas',
      period: '08/2023 - 12/2024',
      description: 'Advanced coursework in data science, machine learning, and analytics methodologies with focus on user behavior analysis'
    }
  ];

  const certifications = [
    {
      title: 'Certified UX Design Professional',
      institution: 'Google',
      period: '2023',
      description: 'Comprehensive certification covering user research, design thinking, prototyping, and usability testing'
    },
    {
      title: 'Figma UI UX Design Essentials',
      institution: 'Udemy',
      period: '2022',
      description: 'Advanced Figma techniques for UI/UX design including component systems, auto-layout, and prototyping'
    }
  ];

//   return (
//     <section id="experience" className="section experience" ref={ref}>
//       <div className="container">
//         <motion.h2
//           className="section-title"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           Experience & Education
//         </motion.h2>

//         <div className="experience-content">
//           <motion.div
//             className="experience-section"
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h3>
//               <HiBriefcase />
//               Work Experience
//             </h3>
            
//             <div className="timeline">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={exp.id}
//                   className="timeline-item"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//                 >
//                   <div className="timeline-marker"></div>
//                   <div className="timeline-content">
//                     <div className="timeline-header">
//                       <h4>{exp.title}</h4>
//                       <span className="employment-type">{exp.type}</span>
//                     </div>
                    
//                     <div className="timeline-meta">
//                       <span className="company">{exp.company}</span>
//                       <span className="location">
//                         <HiLocationMarker />
//                         {exp.location}
//                       </span>
//                       <span className="period">
//                         <HiCalendar />
//                         {exp.period}
//                       </span>
//                     </div>

//                     <ul className="timeline-description">
//                       {exp.description.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>

//                     <div className="timeline-technologies">
//                       {exp.technologies.map((tech) => (
//                         <span key={tech} className="tech-tag">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             className="education-section"
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h3>
//               <HiBriefcase />
//               Education & Certifications
//             </h3>

//             <div className="education-list">
//               {education.map((edu, index) => (
//                 <motion.div
//                   key={edu.degree}
//                   className="education-item"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//                 >
//                   <h4>{edu.degree}</h4>
//                   <div className="education-meta">
//                     <span className="institution">{edu.institution}</span>
//                     <span className="period">
//                       <HiCalendar />
//                       {edu.period}
//                     </span>
//                   </div>
//                   <p>{edu.description}</p>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               className="certifications-section"
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.8 }}
//             >
//               <h4>Professional Certifications</h4>
//               <div className="certifications-list">
//                 {certifications.map((cert, index) => (
//                   <motion.div
//                     key={cert.title}
//                     className="certification-item"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
//                   >
//                     <h5>{cert.title}</h5>
//                     <div className="certification-meta">
//                       <span className="institution">{cert.institution}</span>
//                       <span className="period">
//                         <HiCalendar />
//                         {cert.period}
//                       </span>
//                     </div>
//                     <p>{cert.description}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               className="achievements"
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 1.0 }}
//             >
//               <h4>Key Achievements</h4>
//               <ul>
//                 <li>Improved task completion rates by 35% through A/B testing and data-driven design optimization</li>
//                 <li>Boosted conversion rates by 50% using AI-powered personalization in AR platform</li>
//                 <li>Reduced support tickets by 25% through intuitive onboarding flow design</li>
//                 <li>Enhanced product discovery by 40% through user research and rapid prototyping</li>
//                 <li>Led UX design for 20+ hardware-integrated applications across multiple domains</li>
//                 <li>Achieved WCAG 2.1 compliance through accessibility best practices implementation</li>
//               </ul>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
};

export default Experience;
