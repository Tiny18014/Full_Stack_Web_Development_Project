import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './contact.css';
import { Link } from 'react-router-dom';

const Test = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:5137/contact', formData)
      .then(result => {
        console.log(result);
        // Show success alert
        alert('Form submitted successfully!');
        // Reset the form after successful submission
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(err => {
        console.error(err);
        // Show error alert
        alert('Failed to submit form. Please try again later.');
      });
};

  // Function to handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

      <section className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4">Get in Touch</h1>
          <p className="lead">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
        </div>
      </section>

      <section className="contact-form-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-5">
              <form onSubmit={handleSubmit} className="p-5 bg-white rounded">
                <h2 className="mb-4">Send Us a Message</h2>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="6" value={formData.message} onChange={handleInputChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
            <div className="col-lg-5">
              <h2 className="mb-4">Contact Information</h2>
              <ul className="list-unstyled">
                <li><i className="bi bi-geo-alt-fill"></i> BMSCE</li>
                <li><i className="bi bi-envelope-fill"></i> <a href="mailto:info@we-community.co.uk">info@we-community.co.in</a></li>
                <li><i className="bi bi-telephone-fill"></i> <a href="tel:+441300000000">013 0000 0000</a></li>
              </ul>
              <div className="mt-4" id="live-location">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4986658171506!2d77.56212087508754!3d12.939910987372546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158a549e0235%3A0xeec59b1cef91cd6f!2sBms%20College%20Of%20Engineering%20Boy&#39;s%20Hostel%20Block-2%2C%201st%20Cross%20Rd%2C%20Mount%20Joy%20Extension%2C%20Hanumanthnagar%2C%20Basavanagudi%2C%20Bengaluru%2C%20Karnataka%20560019%2C%20India!5e0!3m2!1sen!2sus!4v1709736896631!5m2!1sen!2sus" width="100%" height="300" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>

              </div>
            </div>
          </div>
        </div>
      </section>



<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"></link>
<footer className="footer-section" style={{ backgroundColor: '#ffc300' }}>
  <div className="container footer-grid">
    <div className="footer-about">
      <h3>We:Community</h3>
      <p>We:Community provides user-centered design services to the INDIA public sector.</p>
    </div>
    <div className="footer-contact">
      <h3>Contact:</h3>
      <a href="mailto:info@we-community.co.uk">info@we-community.co.in</a><br />
      <a href="tel:+441300000000">013 0000 0000</a>
    </div>
    <div className="footer-find-us">
      <h3>Find us:</h3>
      <p>We:Community, <br /> BMSCE <br /></p>
    </div>
    <div className="footer-social">
      <h3>Social:</h3>
      <a href="#">@we-community</a>
    </div>
    <div className="footer-responsibility">
      <h3>Responsibility:</h3>
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

export default Test;
