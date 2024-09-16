import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signin.css'; // Ensure this path matches the location of your CSS file
import { Link } from 'react-router-dom';
function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    orgname: '',
    password: '',
    role: '',
    url: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5137/register', formData)
      .then(result => {
        console.log(result);
        navigate('/organizerLogin');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <nav className="navbar" style={{ backgroundColor: '#ffc300' }}>
        <div className="container">
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
      

      <main className="signup-form">
        <h2>Organizer Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace('name', ' Name').replace('url', ' URL')}:</label>
              <input
                type={key.includes('password') ? 'password' : key.includes('email') ? 'email' : 'text'}
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required={key !== 'phonenumber' && key !== 'role' && key !== 'url'}
              />
            </div>
          ))}
          <button type="submit">Sign Up</button>
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

export default SignUpForm;
