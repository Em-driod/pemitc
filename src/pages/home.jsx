import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '6rem 1.5rem',
    background: 'linear-gradient(135deg, #1e1e1e, #2c2c2c)',
    color: '#fff',
    minHeight: '100vh',
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: '900',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
  };

  const spanPrimary = {
    display: 'block',
    color: '#ffffff',
  };

  const spanSecondary = {
    display: 'block',
    color: '#a3a3a3',
  };

  const paragraphStyle = {
    maxWidth: '640px',
    margin: '1.5rem auto 0',
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#b3b3b3',
  };

  const buttonGroupStyle = {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  };

  const primaryButton = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.9rem 1.8rem',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  const secondaryButton = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.9rem 1.8rem',
    backgroundColor: 'transparent',
    color: '#ddd',
    border: '1px solid #666',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  const hoverEffect = (e, type) => {
    e.target.style.backgroundColor =
      type === 'primary' ? '#666' : 'rgba(255,255,255,0.08)';
    e.target.style.transform = 'translateY(-2px)';
  };

  const removeHoverEffect = (e, type) => {
    e.target.style.backgroundColor =
      type === 'primary' ? '#444' : 'transparent';
    e.target.style.transform = 'translateY(0)';
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        <span style={spanPrimary}>Build Your Next</span>
        <span style={spanSecondary}>Big Thing</span>
      </h1>
      <p style={paragraphStyle}>
        Welcome to our platform. We provide the tools and services you need to
        bring your ideas to life. Explore what we have to offer and start your
        journey today.
      </p>
      <div style={buttonGroupStyle}>
        <Link
          to="/service"
          style={primaryButton}
          onMouseEnter={(e) => hoverEffect(e, 'primary')}
          onMouseLeave={(e) => removeHoverEffect(e, 'primary')}
        >
          Get Started
        </Link>
        <Link
          to="/about"
          style={secondaryButton}
          onMouseEnter={(e) => hoverEffect(e, 'secondary')}
          onMouseLeave={(e) => removeHoverEffect(e, 'secondary')}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
