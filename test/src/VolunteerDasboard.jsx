import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'
import { Dropdown } from 'react-bootstrap';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';


const VolunteerDashboard = ({ userName }) => {
  
  const [showModal, setShowModal] = useState(false);
  const [volunteerName, setVolunteerName] = useState('');
  const [eventName, setEventName] = useState('');
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleVolunteerNameChange = (e) => setVolunteerName(e.target.value);
  const handleEventNameChange = (e) => setEventName(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Prepare data to send to the backend
      const data = {
        volunteerName: volunteerName,
        eventName: eventName
      };

      // Make a POST request to the backend route
      await axios.post('http://localhost:5137/volunteerDashboard', data);
      // After handling form submission, you may want to close the modal
      handleModalClose();
      setRegistrationSuccessful(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  if (registrationSuccessful) {
    return (
      // Confirmation page HTML
      <div className="container pt-5">
        <div className="text-center">
          <span className="confirmation-icon">&#10004;</span>
          <h2>Registration Successful!</h2>
          <p>You have successfully registered for the event</p>
          
          <a href="/volunteerDashboard" className="btn btn-primary mt-3">Back to Dashboard</a>
        </div>
      </div>
    );
  }
  
  
  
return (
  <>
  <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="volunteerName">
              <Form.Label>Volunteer's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={volunteerName}
                onChange={handleVolunteerNameChange}
              />
            </Form.Group>
            <Form.Group controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event name"
                value={eventName}
                onChange={handleEventNameChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <title>We:Community - Volunteer Dashboard</title>
    <div>
    <nav className="navbar navbar-light bg-light p-3">
              <div className="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
              <a className="navbar-brand" href="#">
<img
  src="https://i.ibb.co/BjGVfRS/9e3bac0c-64d7-4c85-9a5a-6fd4190ec848.webp"
  alt="We:Community Logo"
  width={50}
  className="d-inline-block align-text-top"
  style={{ paddingRight: '10px' }} // Adjust the padding as needed
/>
We:Community
</a>
                  <button
                      className="navbar-toggler d-md-none collapsed mb-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#sidebar"
                      aria-controls="sidebar"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                  >
                      <span className="navbar-toggler-icon" />
                  </button>
              </div>
              
              <div className="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
                  <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Hello, {userName}
      </Dropdown.Toggle>

                      <Dropdown.Menu>
                          <Dropdown.Item href="#">Settings</Dropdown.Item>
                          <Dropdown.Item href="#">Messages</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item href="/home">Sign out</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </div>
          </nav>
          <div className="container-fluid" style={{ backgroundColor: 'white' }}>
        <div className="row">
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
              <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/volunteerDashboard">
                      <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="ml-2">Dashboard</span>
        </a>
      </li>
      
      </ul>
      </div>
      </nav>
  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <div className="col py-3">
              <h2 className="pb-2 border-bottom">Upcoming Volunteer Opportunities</h2>
                <div className="container p-3">
          <p>
            Discover new ways to make a difference in your community through our
            diverse volunteer opportunities.
          </p>
          <div className="opportunities-row">
            {/* Example Opportunity 1 */}
            <div className="opportunity-card card">
              <img
                src="https://i.ibb.co/xqzvpLb/2c358cfb-0191-4e6b-9b9c-447b4443bf36.webp"
                className="card-img-top"
                alt="Event Image"
              />
              <div className="card-body">
                <h5 className="card-title">Community Clean-Up Drive</h5>
                <p className="card-text">
                  Join us in making our community cleaner and greener. Your
                  efforts can contribute significantly to environmental
                  conservation.
                </p>
                <a href="#" className="btn btn-primary" onClick={handleModalShow}>Learn More</a>
              </div>
            </div>
            {/* Additional opportunities */}
            {/* Example Opportunity 2 */}
            <div className="opportunity-card card">
              <img
                src="https://i.ibb.co/SsxSnq8/b474864a-458c-489d-ac83-e273080edaff.webp"
                className="card-img-top"
                alt="Event Image"
              />
              <div className="card-body">
                <h5 className="card-title">Local Library Assistance</h5>
                <p className="card-text">
                  Help organize books and host educational workshops at the
                  local library.
                </p>
                <a href="#" className="btn btn-primary" onClick={handleModalShow}>Learn More</a>
              </div>
            </div>
            {/* Example Opportunity 3 */}
            <div className="opportunity-card card">
              <img
                src="https://i.ibb.co/d4mtGJN/d1f2cbfd-cfcb-48ef-b1f0-064f2228a283.webp"
                className="card-img-top"
                alt="Event Image"
              />
              <div className="card-body">
                <h5 className="card-title">Senior Tech Education</h5>
                <p className="card-text">
                  Volunteer to teach basic tech skills to seniors, improving
                  their connectivity with the modern world.
                </p>
                <a href="#" className="btn btn-primary" onClick={handleModalShow}>Learn More</a>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Community Forum */}
        {/* Volunteer Achievements */}
        <h2 className="pb-2 border-bottom">Volunteer Achievements</h2>
        <div className="container p-3">
          <p>Celebrate your milestones and achievements as a volunteer.</p>
          {/* Example Achievement */}
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              100 Hours Volunteered
              <span className="badge bg-primary rounded-pill">Achieved</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              First Volunteer Event
              <span className="badge bg-primary rounded-pill">Achieved</span>
            </li>
          </ul>
          {/* Further sections remain unchanged */}
        </div>
        </main>
          </div>
        </div>
      </div>
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

export default VolunteerDashboard;
