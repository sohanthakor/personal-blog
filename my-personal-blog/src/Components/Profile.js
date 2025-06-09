import React from 'react';
import '../App.css';

const Profile = () => {
  return (
    <div className="profile-card">
      <img
        src="https://via.placeholder.com/120" // Replace with your image URL or local file
        alt="Sohan Thakor"
        className="profile-img"
      />
      <h2>Sohan Thakor</h2>
      <p>Hi! I'm a tech enthusiast and blogger sharing knowledge about React, web development, and more.</p>
    </div>
  );
};

export default Profile;
