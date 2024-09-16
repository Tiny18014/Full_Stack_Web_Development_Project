import React from 'react';
import './signin.css'; // Assuming your CSS file is named signin.css
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div>
      {/* Header Section */}
      <nav className="navbar" style={{ backgroundColor: '#ffc300' }}>
        <div className="container">
          {/* Add your logo here */}
          <a href="/home" className="logo">
            <img src="https://i.ibb.co/BjGVfRS/9e3bac0c-64d7-4c85-9a5a-6fd4190ec848.webp" alt="We:Community Logo" className="rounded" />
          </a>
          {/* Navigation links */}
          <ul className="nav-links" style={{ paddingTop: "30px" }}>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/Explore">Explore</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/SignIn">Sign In</Link></li>
                            <li><Link to="/register">Sign Up</Link></li>
                        </ul>
        </div>
      </nav>
      

      {/* Split Screen Sign Up Section */}
      <div className="split-screen">
        <div className="left-side">
          <h2>Sign Up as Volunteer</h2>
          <Link to="/registerVolunteer">Sign Up</Link> {/* Link to Volunteer Sign Up Page */}
        </div>

        <div className="right-side">
          <h2>Sign Up as Organizer</h2>
          <Link to="/registerOrganizer">Sign Up</Link> {/* Link to Organizer Sign Up Page */}
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
    </div>
  );
};

export default Register;
