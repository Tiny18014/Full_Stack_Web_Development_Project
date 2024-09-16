import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <nav className="navbar" >
        <div className="container">
          <a href="/home" className="logo">
            <img src="https://i.ibb.co/BjGVfRS/9e3bac0c-64d7-4c85-9a5a-6fd4190ec848.webp" alt="We:Community Logo" className="rounded" />
          </a>
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/Explore">Explore</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/SignIn">Sign In</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </ul>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Empowering Communities, One Volunteer At A Time</h1>
          <p>Join us in making a tangible difference in communities across the globe through volunteerism.</p>
        </div>
      </section>

      <section className="core-values">
        <div className="values-container">
          <div className="value">
            <h2>Inclusivity</h2>
            <p>We strive to create an inclusive environment where everyone is welcome to contribute, regardless of background or skill level.</p>
          </div>
          <div className="value">
            <h2>Impact</h2>
            <p>Our initiatives are designed to deliver measurable impacts, transforming communities and lives through dedicated volunteer efforts.</p>
          </div>
          <div className="value">
            <h2>Collaboration</h2>
            <p>We believe in the power of teamwork and encourage collaboration among volunteers, organizations, and communities.</p>
          </div>
          <div className="value">
            <h2>Empowerment</h2>
            <p>Empowering volunteers by providing them with the tools, resources, and opportunities to lead and initiate change.</p>
          </div>
        </div>
      </section>

      <section className="our-mission">
        <div className="mission-content">
          <h2>A United Mission for Change</h2>
          <p className="small">Our mission is to bridge the gap between volunteers and communities in need, fostering a global movement of kindness, service, and social responsibility.</p>
        </div>
      </section>

      <section className="upcoming-events">
        <h2>Upcoming Volunteer Events</h2>
        <div className="events-container">
          <article className="event">
            <h3>Beach Cleanup Drive</h3>
            <p>Join us for a day dedicated to cleaning up our beautiful coastline. Together, we can make a difference!</p>
            <a href="/SignIn">Learn More</a>
          </article>
          <article className="event">
            <h3>Community Garden Initiative</h3>
            <p>Help us grow community gardens in urban areas, promoting green spaces and healthy living.</p>
            <a href="/SignIn">Learn More</a>
          </article>
          <article className="event">
            <h3>Teach &amp; Empower</h3>
            <p>Share your knowledge by tutoring underprivileged children and empowering them through education.</p>
            <a href="/SignIn">Learn More</a>
          </article>
        </div>
      </section>

      <section className="join-the-movement">
        <div className="join-content">
          <h2>Join the Movement</h2>
          <p>Ready to make a difference? Become a part of our community today and start contributing to meaningful projects around the world.</p>
          <Link to="/register" className="join-button">Sign Up Now</Link>
        </div>
      </section>

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
};

export default AboutPage;
