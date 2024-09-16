import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'
import { Dropdown } from 'react-bootstrap';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';


const OrganizerDashboard = ({ userName }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const [formData, setFormData] = useState({
    eventName: '',
    eventLocation: '',
    locationLink: '',
    eventImages: '',
    eventType: '',
    maxVolunteers: '',
    eventDescription: '',
    contactInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to the backend route
      await axios.post('http://localhost:5137/organizerDashboard', formData);
      // After handling form submission, you may want to close the modal
      handleModalClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  
  useEffect(() => {
      const registrationCtx = document.getElementById('registrationChart').getContext('2d');
      const registrationChart = new Chart(registrationCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Event Registrations',
            data: [50, 75, 150, 130, 200, 230],
            backgroundColor: 'rgba(0, 123, 255, 0.5)'
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
  
      const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
      const attendanceChart = new Chart(attendanceCtx, {
        type: 'doughnut',
        data: {
          labels: ['Attended', 'Missed'],
          datasets: [{
            label: 'Event Attendance',
            data: [300, 50],
            backgroundColor: ['rgba(40, 167, 69, 0.5)', 'rgba(220, 53, 69, 0.5)']
          }]
        }
      });

  return () => {
    registrationChart.destroy();
    attendanceChart.destroy();
  };
}, []);
return (
  <>
  <Modal show={showModal} onHide={handleModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create Your Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="eventName">Event Name</Form.Label>
              <Form.Control type="text" id="eventName" name="eventName" onChange={handleChange} required />
            </Form.Group>
            {/* Repeat for other form fields */}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="eventLocation">Location</Form.Label>
              <Form.Control type="text" id="eventLocation" name="eventLocation" onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="locationLink">Location Link (Optional)</Form.Label>
              <Form.Control type="url" id="locationLink" name="locationLink" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="eventImages">Event Images</Form.Label>
              <Form.Control type="file" id="eventImages" name="eventImages" multiple onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="eventType">Type of Event</Form.Label>
              <Form.Select id="eventType" name="eventType" onChange={handleChange}>
                <option value="select">select</option>
                <option value="fundraiser">Fundraiser</option>
                <option value="teaching">Teaching</option>
                <option value="communityService">Community Service</option>
                <option value="foodDrive">Food Drive</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="maxVolunteers">Maximum Number of Volunteers</Form.Label>
              <Form.Control type="number" id="maxVolunteers" name="maxVolunteers" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="eventDescription">Event Description</Form.Label>
              <Form.Control as="textarea" id="eventDescription" name="eventDescription" rows="3" onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="contactInfo">Contact Information</Form.Label>
              <Form.Control type="text" id="contactInfo" name="contactInfo" onChange={handleChange} required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <title>We:Community - Organizer Dashboard</title>
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
  href="/organizerDashboard"
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
                  <a className="nav-link active" aria-current="page" href="#">
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
      <li className="nav-item" onClick={handleModalShow} style={{cursor: 'pointer'}}>
        <a className="nav-link" href="#">
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
            className="feather feather-file"
          >
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <polyline points="13 2 13 9 20 9" />
          </svg>
          <span className="ml-2">Create an Event</span>
        </a>
      </li>
      
      
      
      </ul>
      </div>
      </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <canvas id="registrationChart" className="mb-4 w-100" height={400} />
              </div>
              <div className="col-lg-6">
                <canvas id="attendanceChart" className="mb-4 w-100" height={400} />
              </div>
            </div>
            <h2>Reviews on Past Events</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
                  <div className="card-header">Event 1</div>
                  <div className="card-body">
                    <h5 className="card-title">Positive Feedback</h5>
                    <p className="card-text">This event was amazing with great insights and networking opportunities.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-white bg-secondary mb-3" style={{maxWidth: '20rem'}}>
                  <div className="card-header">Event 2</div>
                  <div className="card-body">
                    <h5 className="card-title">Constructive Feedback</h5>
                    <p className="card-text">Good event but could improve with more interactive sessions.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-white bg-success mb-3" style={{maxWidth: '20rem'}}>
                  <div className="card-header">Event 3</div>
                  <div className="card-body">
                    <h5 className="card-title">Great Experience</h5>
                    <p className="card-text">Loved every bit of it, especially the workshops!</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
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
    </div>
    
    </>
  );
}

export default OrganizerDashboard;
