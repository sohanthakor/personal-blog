import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.title}>Let's Connect</h2>
        <p style={styles.text}>Follow me online or send a message anytime!</p>

        <div style={styles.icons}>
          <a href="https://github.com/sohanthakor/sohan" target="_blank" rel="noreferrer" style={styles.iconLink} title="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="mailto:sohant1906@gmail.com" style={styles.iconLink} title="Email">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sohan-thakor-436581270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" style={styles.iconLink} title="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/Sohan_Thakor19?t=orEgSvG4bolKjCd1UgmN4A&s=09" target="_blank" rel="noreferrer" style={styles.iconLink} title="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/__sohan__19?igsh=MWdzMnYxcjJzc3U0bA==" target="_blank" rel="noreferrer" style={styles.iconLink} title="Instagram">
            <FaInstagram size={24} />
          </a>
        </div>

        <p style={styles.credit}>© {new Date().getFullYear()} Sohan Thakor. Crafted with ❤️ using React.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
    padding: '2.5rem 1rem',
    marginTop: '4rem',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1000px',
    margin: 'auto',
  },
  title: {
    fontSize: '1.6rem',
    marginBottom: '0.3rem',
    color: '#facc15',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#cbd5e1',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.2rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  iconLink: {
    color: '#38bdf8',
    transition: 'transform 0.2s ease, color 0.3s ease',
    textDecoration: 'none',
  },
  credit: {
    fontSize: '0.85rem',
    color: '#94a3b8',
  },
};

export default Footer;
