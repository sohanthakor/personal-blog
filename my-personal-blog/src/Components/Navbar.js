import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>My Blog</h2>
      <div style={styles.links}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            style={{
              ...styles.link,
              color:
                location.pathname === link.path
                  ? '#facc15' // highlight active link
                  : hovered === index
                  ? '#facc15'
                  : '#fff',
              textDecoration: hovered === index ? 'underline' : 'none',
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    position: 'sticky',     // 👈 makes it sticky
    top: 0,                 // 👈 stick to top
    zIndex: 1000,           // 👈 stays above other content
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // optional: soft shadow
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  link: {
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
};

export default Navbar;