// src/Pages/About.js

import React from 'react';
import profileImg from '../Assests/profile.jpg';
 

const About = () => {
  return (
    <div style={styles.container}>
      <img
        src={profileImg}
        alt="Sohan Thakor"
        style={styles.image}
      />
      <h1 style={styles.name}>Sohan Thakor</h1>
      <h3 style={styles.title}>Diploma Engineering Student</h3>

      <p style={styles.bio}>
        👋 Hello! I'm a passionate developer with interests in Web Development,
        IoT projects, and Information Security. I enjoy turning ideas into
        reality through code, and I'm always learning something new.
      </p>

      <h4 style={styles.sectionTitle}>⚙️ Skills</h4>
      <div style={styles.skills}>
        {["React.js", "Node.js", "IoT (NodeMCU)", "MySQL", "HTML/CSS", "Git & GitHub", "Formspree"].map((skill, index) => (
          <span key={index} style={styles.skillBadge}>{skill}</span>
        ))}
      </div>

      <p style={styles.contact}>📬 Feel free to reach out through the contact page!</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: 'auto',
    textAlign: 'center',
    padding: '3rem 1rem',
  },
  image: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
  name: {
    fontSize: '2rem',
    color: '#1e293b',
    marginBottom: '0.2rem',
  },
  title: {
    fontSize: '1.1rem',
    color: '#475569',
    marginBottom: '1rem',
  },
  bio: {
    fontSize: '1rem',
    color: '#334155',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '1.2rem',
    color: '#0f172a',
    marginBottom: '1rem',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  skillBadge: {
    backgroundColor: '#e0f2fe',
    color: '#0369a1',
    padding: '0.5rem 0.75rem',
    borderRadius: '999px',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  contact: {
    fontSize: '0.95rem',
    color: '#64748b',
  }
};

export default About;
