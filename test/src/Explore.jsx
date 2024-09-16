import React from 'react';
import './Explore.css'; // Make sure the CSS file exists and is correctly linked
import { Link } from 'react-router-dom';
const Explore = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar" style={{ backgroundColor: '#ffc300' }}>
        <div className="container">
          {/* Logo with proper alt text */}
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
      

      {/* Main Content */}
      <main>
        <section className="intro">
          <h2>Explore Volunteer Opportunities</h2>
          <p>Discover how you can contribute to your community. Browse through a variety of volunteer opportunities to find one that matches your skills and interests.</p>
        </section>

        {/* Opportunities Section */}
        <section className="opportunities">
          <div className="opportunity">
            <img src="https://i.ibb.co/93qz6bv/23e08f39-34f6-411a-b9e3-642677de732d.webp" alt="Environmental Conservation" />
            <h3>Environmental Conservation</h3>
            <p>Join us in various environmental conservation efforts including tree planting, beach clean-ups, and wildlife protection initiatives.</p>
            <a href="/SignIn" className="button">Learn More</a>
          </div>

          <div className="opportunity">
            <img src="https://i.ibb.co/jZ94Rp1/a75e712f-8eac-4800-9629-f149323eb320.webp" alt="Education" />
            <h3>Education & Tutoring</h3>
            <p>Help students achieve their academic goals through tutoring, mentoring, and educational workshops.</p>
            <a href="/SignIn" className="button">Learn More</a>
          </div>

          <div className="opportunity">
            <img src="https://i.ibb.co/k6ccZjk/e8705906-2bf9-4a6a-ab9c-7244ae73e973.webp" alt="Health" />
            <h3>Health & Wellness</h3>
            <p>Support health initiatives by volunteering at local clinics, health fairs, and awareness campaigns.</p>
            <a href="/SignIn" className="button">Learn More</a>
          </div>
        </section>
      </main>

      {/* Footer */}
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

export default Explore;
