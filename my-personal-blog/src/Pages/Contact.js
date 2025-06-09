import React from 'react';

const Contact = () => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/xeokopde" method="POST">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          style={{ ...inputStyle, height: "100px" }}
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default Contact;
