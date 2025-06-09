import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Password Manager",
      description: "A secure password management tool built using React and Node.js.",
      tech: "React, Node.js, MySQL",
      github: "https://github.com/yourusername/password-manager",
      demo: "#",
      image: "https://picsum.photos/400/200?random=1"
    },
    {
      title: "IoT Weather Monitor",
      description: "Real-time weather monitoring using NodeMCU and DHT11 sensor.",
      tech: "Arduino, NodeMCU, Thingspeak",
      github: "https://github.com/yourusername/iot-weather-monitor",
      demo: "#",
      image: "https://picsum.photos/400/200?random=2"
    },
    {
      title: "Personal Blog Website",
      description: "My portfolio blog built using React.js and deployed online.",
      tech: "React, React Router, Formspree",
      github: "https://github.com/yourusername/blog-site",
      demo: "#",
      image: "https://picsum.photos/400/200?random=3"
    }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🚀 My Projects</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <img src={project.image} alt={project.title} style={styles.image} />
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.desc}>{project.description}</p>
            <p style={styles.tech}><strong>Tech:</strong> {project.tech}</p>
            <div style={styles.buttons}>
              <a href={project.github} target="_blank" rel="noreferrer" style={styles.button}>GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer" style={{ ...styles.button, backgroundColor: '#22c55e' }}>Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1100px',
    margin: 'auto',
    padding: '2rem 1rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#0f172a',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.25rem',
    color: '#111827',
    marginBottom: '0.5rem',
  },
  desc: {
    color: '#4b5563',
    fontSize: '0.95rem',
    marginBottom: '0.75rem',
  },
  tech: {
    fontSize: '0.85rem',
    color: '#6b7280',
    marginBottom: '1rem',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: '#3b82f6',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  }
};

export default Projects;
