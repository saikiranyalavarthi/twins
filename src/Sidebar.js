// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/industries">Industries</Link>
      <Link to="/ai-software">AISoftware</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact-us">ContactUs</Link>
    </div>
  );
};

export default Sidebar;
