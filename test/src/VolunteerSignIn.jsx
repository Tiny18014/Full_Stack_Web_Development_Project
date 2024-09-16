import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signin.css'; // Ensure this CSS file contains styles that align with your color scheme

function VolunteerSignIn({ setUserName }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(''); // Added state for handling errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5137/volunteerLogin', { email, password });
      const data = response.data;
    
      if (data.message === 'Success') {
        setUserName(data.name);
        // Handle successful login
        navigate('/volunteerDashboard');
      } else {
        // Handle failed login
        setError(data.message);
      }
    } catch (error) {
      console.error('Login request failed:', error);
      // Optionally, handle the error (e.g., show an error message)
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <>
     <nav className="navbar" style={{ backgroundColor: '#ffc300' }}>
        <div className="container">
          <a href="/" className="logo">
            <img src="https://i.ibb.co/BjGVfRS/9e3bac0c-64d7-4c85-9a5a-6fd4190ec848.webp" alt="We:Community Logo" className="rounded" />
          </a>
          <ul className="nav-links" style={{ paddingTop: "30px" }}>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/SignIn">Sign In</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </ul>
        </div>
      </nav>
      

      <main className="signup-form">
        <h2>Volunteer Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
          <button type="submit">Sign In</button>
        </form>
      </main>

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

export default VolunteerSignIn;
