import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { ThemeContext } from '../ThemeContext';

const Nav = () => {
  const { cart } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const isDark = theme === 'dark';

  const navStyle = {
    backgroundColor: isDark ? '#1e1e1e' : '#fff',
    color: isDark ? '#f5f5f5' : '#222',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    transition: 'all 0.3s ease',
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const brandStyle = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: isDark ? '#fff' : '#222',
    textDecoration: 'none',
  };

  const linkContainer = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  const linkStyle = {
    padding: '0.5rem 0.8rem',
    borderRadius: '6px',
    fontSize: '0.95rem',
    fontWeight: 500,
    color: isDark ? '#f5f5f5' : '#222',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  };

  const hoverEffect = (e) => {
    e.target.style.backgroundColor = isDark ? '#333' : '#f0f0f0';
  };

  const removeHover = (e) => {
    e.target.style.backgroundColor = 'transparent';
  };

  const themeButton = {
    padding: '0.5rem',
    borderRadius: '50%',
    backgroundColor: isDark ? '#333' : '#f7f7f7',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const menuButton = {
    backgroundColor: isDark ? '#333' : '#f0f0f0',
    border: 'none',
    borderRadius: '6px',
    padding: '0.5rem',
    cursor: 'pointer',
  };

  const mobileMenu = {
    display: isOpen ? 'block' : 'none',
    backgroundColor: isDark ? '#1e1e1e' : '#fff',
    borderTop: `1px solid ${isDark ? '#333' : '#ddd'}`,
    padding: '1rem',
    transition: 'all 0.3s ease',
  };

  const mobileLink = {
    display: 'block',
    padding: '0.75rem 0.9rem',
    borderRadius: '6px',
    textDecoration: 'none',
    color: isDark ? '#f5f5f5' : '#222',
    fontWeight: 500,
    transition: 'background-color 0.3s ease',
  };

  const mobileFooter = {
    borderTop: `1px solid ${isDark ? '#333' : '#ddd'}`,
    marginTop: '1rem',
    paddingTop: '1rem',
  };

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/products', text: 'Products' },
    { to: '/service', text: 'Services' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
    { to: '/cart', text: 'Cart' },
  ];

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link to="/" style={brandStyle}>
          WebApp
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'none' }} className="md:flex" id="desktop-links">
          {/* This part will only be shown in larger screens (handled with CSS media query in global style) */}
        </div>

        <div style={linkContainer} className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={linkStyle}
              onMouseEnter={hoverEffect}
              onMouseLeave={removeHover}
            >
              {link.text}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            style={themeButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = isDark ? '#444' : '#eaeaea')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = isDark ? '#333' : '#f7f7f7')}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" style={{ display: 'none' }}>
          <button onClick={() => setIsOpen(!isOpen)} style={menuButton}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={mobileMenu}>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={mobileLink}
            onClick={() => setIsOpen(false)}
            onMouseEnter={(e) => (e.target.style.backgroundColor = isDark ? '#333' : '#f0f0f0')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            {link.text}
          </Link>
        ))}
        <div style={mobileFooter}>
          <button
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            style={{
              width: '100%',
              padding: '0.8rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: isDark ? '#f5f5f5' : '#222',
              fontWeight: 500,
              cursor: 'pointer',
              borderRadius: '6px',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = isDark ? '#333' : '#f0f0f0')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            Switch Theme {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
