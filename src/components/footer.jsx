import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1e1e1e',
    color: '#d1d5db',
    borderTop: '1px solid #333',
    transition: 'all 0.3s ease',
    padding: '4rem 1.5rem',
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
  };

  const topGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
  };

  const linkGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
  };

  const sectionTitle = {
    fontSize: '0.85rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '1rem',
    color: '#9ca3af',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const linkStyle = {
    display: 'block',
    color: '#d1d5db',
    fontSize: '1rem',
    textDecoration: 'none',
    marginBottom: '0.75rem',
    transition: 'color 0.3s ease',
  };

  const hoverEffect = (e) => {
    e.target.style.color = '#fff';
  };

  const removeHover = (e) => {
    e.target.style.color = '#d1d5db';
  };

  const brandStyle = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#fff',
    textDecoration: 'none',
  };

  const bottomText = {
    textAlign: 'center',
    marginTop: '3rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #333',
    color: '#a1a1aa',
    fontSize: '0.95rem',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={topGridStyle}>
          {/* Logo and About */}
          <div>
            <Link to="/" style={brandStyle}>WebApp</Link>
            <p style={{ marginTop: '1rem', fontSize: '1rem', maxWidth: '400px', color: '#b3b3b3' }}>
              A full-scale website built with React and Tailwind CSS.
            </p>
          </div>

          {/* Footer Links */}
          <div style={linkGridStyle}>
            <div>
              <h3 style={sectionTitle}>Solutions</h3>
              <ul style={listStyle}>
                <li>
                  <Link
                    to="/"
                    style={linkStyle}
                    onMouseEnter={hoverEffect}
                    onMouseLeave={removeHover}
                  >
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 style={sectionTitle}>Support</h3>
              <ul style={listStyle}>
                <li>
                  <Link
                    to="/"
                    style={linkStyle}
                    onMouseEnter={hoverEffect}
                    onMouseLeave={removeHover}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    style={linkStyle}
                    onMouseEnter={hoverEffect}
                    onMouseLeave={removeHover}
                  >
                    Docs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 style={sectionTitle}>Company</h3>
              <ul style={listStyle}>
                <li>
                  <Link
                    to="/about"
                    style={linkStyle}
                    onMouseEnter={hoverEffect}
                    onMouseLeave={removeHover}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    style={linkStyle}
                    onMouseEnter={hoverEffect}
                    onMouseLeave={removeHover}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 style={sectionTitle}>Legal</h3>
              <ul style={listStyle}>
                <li>
                  <Link
                    to="/"
                    style={linkStyle}
                    onMouseEnter={hoverEffect}
                    onMouseLeave={removeHover}
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    style={linkStyle}
                    onMouseEnter={hoverEffect}
                    onMouseLeave={removeHover}
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={bottomText}>
          &copy; {new Date().getFullYear()} WebApp, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
