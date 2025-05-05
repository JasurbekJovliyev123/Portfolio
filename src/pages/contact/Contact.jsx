import React, { useState } from 'react'
import { RiUser3Line,RiMailUnreadLine,RiMap2Line,RiBook2Line,RiSendPlaneLine } from "react-icons/ri";
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: '',
    subject: '',
    message: ''
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessageColor('color-red');
      setFeedbackMessage('Please fill in all fields');
      setTimeout(() => setFeedbackMessage(''), 3000);
      return;
    }

    emailjs.send('service_m61t0ve', 
                 '__ejs-test-mail-service__', // Template ID
                 formData, 
                 'bo2IP0M-qoPKpNdQL')  // User ID
      .then(
        () => {
          setMessageColor('color-first');
          setFeedbackMessage('Message sent ✔');
          setTimeout(() => setFeedbackMessage(''), 5000);
          setFormData({
            name: "",
            email: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          alert('OOPs! SOMETHING WENT WRONG...', error);
          console.log(error);
          
        }
      );
  };

  return (
    <section className="contact section">
      <h3 className="section-title">
        Contact <span>Me</span>
      </h3>
      <div className="contact-container">
        <div className="contact-content container grid">
          <div className="contact-card">
            <span className="contact-icon">
              <RiMap2Line />
            </span>
            <div>
              <h3 className="contact-title">Address</h3>
              <p className="contact-data">Uzbekistan, Karshi</p>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-icon">
              <RiUser3Line />
            </span>
            <div>
              <h3 className="contact-title">Freelance</h3>
              <p className="contact-data">Available Right Now</p>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-icon">
              <RiMailUnreadLine />
            </span>
            <div>
              <h3 className="contact-title">Email</h3>
              <div className="contact-data">jasurbekjovliyev725@gmail.com</div>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-icon">
              <RiBook2Line />
            </span>
            <div>
              <h3 className="contact-title">Phone</h3>
              <div className="contact-data">+998-94-334-35-04</div>
            </div>
          </div>
        </div>

        <form onSubmit={sendEmail} className="contact-form container grid">
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label className="contact-form-label">Your full Name <b>*</b></label>
              <input type="text" name="name" onChange={handleChange} value={formData.name} className="contact-form-input" />
            </div>
            <div className="contact-form-div">
              <label className="contact-form-label">Your Email Address <b>*</b></label>
              <input type="email" name="email" onChange={handleChange} value={formData.email} className="contact-form-input" />
            </div>
          </div>
          <div className="contact-form-div">
            <label className="contact-form-label">Your Subject <b>*</b></label>
            <input type="text" name="subject" onChange={handleChange} value={formData.subject} className="contact-form-input" />
          </div>
          <div className="contact-form-div">
            <label className="contact-form-label">Your Message <b>*</b></label>
            <textarea name="message" onChange={handleChange} value={formData.message} className="contact-form-input contact-form-area"></textarea>
          </div>
          <div className="contact-button">
            <button className="button">
              Send Message
              <span className="button-icon">
                <RiSendPlaneLine />
              </span>
            </button>
          </div>
          {feedbackMessage && (
            <p className={`contact-message ${messageColor}`}>
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
