import React from 'react';
import { Link } from 'react-router-dom';
import './signin.css'; // Ensure the CSS file is correctly linked

function SignInPage() {
  return (
    <>
      {/* Header Section */}
      <nav className="navbar" style={{ backgroundColor: '#ffc300' }}>
        <div className="container">
        <a href="/home" className="logo">
            <img src="https://i.ibb.co/BjGVfRS/9e3bac0c-64d7-4c85-9a5a-6fd4190ec848.webp" alt="We:Community Logo" className="rounded" />
          </a>
          <ul className="nav-links" style={{ paddingTop: "30px" }}>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </ul>
        </div>
      </nav>
      

      {/* Split Screen Sign In Section */}
      <div className="split-screen">
        <div className="left-side">
          <h2>Sign In as Volunteer</h2>
          <Link to="/volunteerLogin" className="btn">Sign In</Link> {/* Adjust the route as necessary */}
        </div>

        <div className="right-side">
          <h2>Sign In as Organizer</h2>
          <Link to="/organizerLogin" className="btn">Sign In</Link> {/* Adjust the route as necessary */}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="container footer-grid">
          <div className="footer-about">
            <h3 style={{ color: '#ffc300' }}>We:Community</h3>
            <p>We:Community provides user-centered design services to the INDIA public sector.</p>
          </div>
          <div className="footer-contact">
            <h3 style={{ color: '#ffc300' }}>Contact:</h3>
            <a href="mailto:info@we-community.co.in">info@we-community.co.in</a>
            <a href="tel:+441300000000">013 0000 0000</a>
          </div>
          <div className="footer-find-us">
            <h3 style={{ color: '#ffc300' }}>Find us:</h3>
            <address>
              We:Community, <br />
              BMSCE<br />
            </address>
          </div>
          <div className="footer-social">
            <h3 style={{ color: '#ffc300' }}>Social:</h3>
            <a href="#">@we-community</a>
          </div>
          <div className="footer-responsibility">
            <h3 style={{ color: '#ffc300' }}>Responsibility:</h3>
            <a href="/accessibility-statement">Accessibility statement</a><br />
            <a href="/privacy-policy">Privacy policy</a><br />
            <a href="/cookies">Cookies</a><br />
            <a href="/terms-and-conditions">Terms and conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default SignInPage;
