// src/Pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hi, I'm <span style={styles.name}>Sohan Thakor</span></h1>
      <p style={styles.subtitle}>
        I'm a Diploma Engineering student passionate about Web Development, IoT, and Information Security.
      </p>

      <p style={styles.description}>
        This is my personal blog where I share projects, tutorials, and tech tips. Whether you're into building apps or exploring sensors, you'll find something here to learn and enjoy!
      </p>

      <div style={styles.buttons}>
        <Link to="/projects" style={styles.button}>My Projects</Link>
        <Link to="/blog/1" style={{ ...styles.button, backgroundColor: '#6c63ff' }}>Read Blog</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'center',
    padding: '3rem 1rem'
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#222',
  },
  name: {
    color: '#007bff',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '1rem'
  },
  description: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '2rem'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    fontWeight: 'bold'
  }
};

export default Home;