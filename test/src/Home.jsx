import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <nav className="navbar" style={{ backgroundColor: '#ffc300' }}>
                <div className="container">
                    {/* Logo with proper alt text */}
                    <a href="/home" className="logo">
                        <img src="https://i.ibb.co/BjGVfRS/9e3bac0c-64d7-4c85-9a5a-6fd4190ec848.webp" alt="We:Community Logo" className="rounded" />
                    </a>
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
            

            <main className="hero">
        <div className="container1">
          <h1>Supporting our frontline online.</h1>
          <p className="subtext">A digital agency committed to the public sector.</p>
          <div className="category-buttons">
            <button onClick={() => window.location.href = '/SignIn'}>Get Started</button>
            <button onClick={() => window.location.href = '/Explore'}>Browse Opportunities</button>
            <button onClick={() => window.location.href = '/registerVolunteer'}>Become a Volunteer</button>
          </div>
        </div>
      </main>

      <section className="partnership-section py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2>Building enduring partnerships with the NHS, Police and the wider public sector.</h2>
                    <p>Founded in 2024, We:Community is a user-centered digital agency specializing in volunteering opportunities. We work extensively with the NHS and wider public sectors, helping teams to create enduring great public services.</p>
                </div>
                <div className="col-md-6">
                    <img src="https://i.ibb.co/4KFW7YL/094145a1-9f75-462d-b06a-bd83c9d99d59.webp" alt="Graphic" className="img-fluid" />
                </div>
            </div>
        </div>
      </section>

      <div className="accessibility-section">
          <h2>Accessibility comes as standard.</h2>
          <p>At We:Community, we specialize in connecting volunteers to the opportunity of their choice for increased productivity and a safer and a healthier society. Designing and building accessible digital services is key to all features of our delivery process, aligning fully to the Government Service Standard. As we tailor our processes extensively for tailoring and scaling up in projects, we also offer community audits and consultancy to support compliance with the Public Sector Bodies Accessibility Regulations.</p>
          <div className="row mt-4">
              <div className="col-md-4">
                  <p className="text-center fs-4 fw-bold">Simple.</p>
              </div>
              <div className="col-md-4">
                  <p className="text-center fs-4 fw-bold">Fast.</p>
              </div>
              <div className="col-md-4">
                  <p className="text-center fs-4 fw-bold">Inclusive.</p>
              </div>
          </div>
      </div>

      <section className="help-section">
        <div className="container">
          <h2 className="help-title">We can help you with:</h2>
          <div className="services-grid">
              <div className="service-item">
                <img src="https://i.ibb.co/zZ2qzyj/DALL-E-2024-03-04-09-33-46-The-image-captures-a-heartwarming-scene-of-diverse-volunteers-engaging-in.webp" alt="Moulding Volunteers" className="service-image" />
                <div className="service-text">
                  <h3>Moulding Volunteers</h3>
                  <p>Helping individuals identify the volunteer within and create a movement of volunteer leaders.</p>
                </div>
              </div>
              <div className="service-item">
                <img src="https://i.ibb.co/nPBzDZN/DALL-E-2024-03-04-09-41-38-The-image-visualizes-the-concept-of-Enabling-Collaborations-by-depicting.webp" alt="Enabling Collaborations" className="service-image" />
                <div className="service-text">
                  <h3>Enabling Collaborations</h3>
                  <p>Enabling collaboration between communities, NGOs, government, corporates, and volunteers to amplify volunteer impact.</p>
                </div>
              </div>
              <div className="service-item">
                <img src="https://i.ibb.co/dcWMRgp/DALL-E-2024-03-06-17-26-23-The-image-portrays-the-concept-of-Developing-Communities-through-a-vivid.webp" alt="Innovative Solutions" className="service-image" />
                <div className="service-text">
                  <h3>Innovative Solutions</h3>
                  <p>Bringing cutting-edge technology and creative ideas to tackle complex challenges in the public sector.</p>
                </div>
              </div>
              <div className="service-item">
                <img src="https://i.ibb.co/g76F7ss/DALL-E-2024-03-06-17-26-27-The-image-illustrates-the-concept-of-Across-India-capturing-the-essence-o.webp" alt="Community Empowerment" className="service-image" />
                <div className="service-text">
                  <h3>Community Empowerment</h3>
                  <p>Empowering individuals and communities to take initiative and drive positive change from within.</p>
                </div>
              </div>
          </div>
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


export default Home;
