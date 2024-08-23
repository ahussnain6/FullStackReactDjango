import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to the Django backend
      const response = await axios.post('http://127.0.0.1:8000/message/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Form data submitted:', response.data);
      // Optionally, clear the form or show a success message
      setFormData({
        name: '',
        email: '',
        number: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="section_title">Contact Us</h2>
        <div className="section_container">
          <div className="contact_container">
            <div className="contact_form">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="number">Your Number</label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    placeholder="Your Contact Number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button className="button" type="submit">Submit</button>
              </form>
            </div>

            <div className="contact_text">
              <div className="contact_items">
                <i className="bx bx-current-location"></i>
                <div className="contact_details">
                  <h3>Our Location</h3>
                  <p>Berndorf, Germany</p>
                </div>
              </div>
              <div className="contact_items">
                <i className="bx bxs-envelope"></i>
                <div className="contact_details">
                  <h3>General Enquiries</h3>
                  <p>coffeeshop@xyz.com</p>
                </div>
              </div>
              <div className="contact_items">
                <i className="bx bxs-phone-call"></i>
                <div className="contact_details">
                  <h3>Call Us</h3>
                  <p>+01 92728239</p>
                </div>
              </div>
              <div className="contact_items">
                <i className="bx bxs-time-five"></i>
                <div className="contact_details">
                  <h3>Our Timing</h3>
                  <p>Mon-Sun : 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
