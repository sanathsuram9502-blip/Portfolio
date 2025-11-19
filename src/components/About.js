import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiColorSwatch, HiLightBulb, HiUsers } from 'react-icons/hi';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  /* const journeySteps = [
    {
      icon: <HiCamera />,
      title: 'The Beginning - Photographer',
      period: '📸',
      description: 'My journey started behind the lens as a photographer. Capturing stories through images sparked my love for creativity. During countless freelance projects, I honed my photography skills and dived deep into photo editing using Photoshop and Lightroom.'
    },
    {
      icon: <HiColorSwatch />,
      title: 'Evolving - Graphic Designer',
      period: '🎨',
      description: 'As my editing skills grew, so did my curiosity — leading me into graphic design. I mastered Photoshop, Illustrator, and InDesign, designing logos, posters, and creative assets for various businesses. Each project was a new canvas, each brand a new story to tell.'
    },
    {
      icon: <HiCube />,
      title: 'Exploring Dimensions - 3D Artist',
      period: '🛠️',
      description: 'Craving to bring static visuals to life, I stepped into the 3D universe. Tools like Maya and Blender became my playground, where I experimented with forms, lighting, and textures — creating environments and objects that felt real and immersive.'
    },
    {
      icon: <HiDesktopComputer />,
      title: 'Building Experiences - UI/UX Designer',
      period: '🖥️',
      description: 'But I wanted to create dynamic, interactive experiences, not just visuals. That drive pulled me into UI/UX design. For over 3 years, I designed intuitive web and mobile applications using Figma, Adobe XD, Photoshop, HTML, CSS, and JavaScript.'
    },
    {
      icon: <HiChartBar />,
      title: 'Merging Creativity with Data',
      period: '📊',
      description: 'To deepen my impact, I pursued a Master\'s in Advanced Data Analytics, gaining expertise in making data-driven design decisions. Today, I blend user insights, behavioral data, and UX principles to craft experiences that are visually stunning and deeply intuitive.'
    }
  ]; */

  const skills = [
    {
      category: 'Design Tools',
      items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'InDesign', 'Lightroom']
    },
    {
      category: '3D & Motion',
      items: ['Maya', 'Blender', 'After Effects', '3D Modeling', 'Animation', 'Rendering']
    },
    {
      category: 'Frontend Development',
      items: ['HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS', 'SCSS']
    },
    {
      category: 'UX Research & Methods',
      items: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems', 'Information Architecture']
    },
    {
      category: 'Data & Analytics',
      items: ['Python', 'Machine Learning', 'Data Visualization', 'Google Analytics', 'A/B Testing', 'Advanced Data Analytics']
    }
  ];

  const values = [
    {
      icon: <HiLightBulb />,
      title: 'Innovation',
      description: 'Always exploring new design trends and technologies to create cutting-edge solutions.'
    },
    {
      icon: <HiUsers />,
      title: 'User-Centric',
      description: 'Putting users at the heart of every design decision to create meaningful experiences.'
    },
    {
      icon: <HiColorSwatch />,
      title: 'Attention to Detail',
      description: 'Obsessing over the smallest details to ensure pixel-perfect implementations.'
    },
    {
      icon: <HiCode />,
      title: 'Technical Understanding',
      description: 'Bridging the gap between design and development with technical expertise.'
    }
  ];

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* <h3>Hello! I'm Sanath, a creative explorer with a passion for blending art, design, and data to craft meaningful experiences.</h3> */}
            <div className="journey-path">
              <h4>My Journey:</h4>
              <div className="journey-flow">
                📸 Photographer ➔ 🎨 Graphic Designer ➔ 🛠️ 3D Artist ➔ 🖥️ UI/UX Designer ➔ 📊 Data-Driven UX Designer
              </div>
            </div>
            <p>
              I'm a passionate creative professional who believes in the power of evolution and continuous learning. 
              My multidisciplinary background spans photography, graphic design, 3D artistry, UI/UX design, and data analytics — 
              each skill building upon the last to create a unique perspective on digital experiences.
            </p>
            <p>
              Today, I combine artistic intuition with data-driven insights to create designs that don't just look beautiful, 
              but solve real problems and deliver measurable results. I'm passionate about crafting experiences that are 
              not only visually stunning but also deeply intuitive and effective.
            </p>
          </motion.div>

          <motion.div
            className="values-grid"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* <motion.div
          className="journey-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>The Creative Evolution</h3>
          <div className="journey-grid">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="journey-step"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div className="step-header">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-period">{step.period}</div>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3>Skills & Expertise</h3>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="skill-group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                <h4>{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
