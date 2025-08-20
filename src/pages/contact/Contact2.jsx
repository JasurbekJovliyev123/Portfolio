import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../contact/contact.css'
import { RiUser3Line,RiMailUnreadLine,RiMap2Line,RiBook2Line,RiSendPlaneLine } from "react-icons/ri";
import './contact.css'
// import emailjs from '@emailjs/browser';
const Contact2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessageColor('color-red');
      setFeedbackMessage('Please fill in all fields');
      setTimeout(() => setFeedbackMessage(''), 3000);
      return;
    }

    emailjs.send(
      'service_ina90jh', // EmailJS > Email Services
      'template_7tzcyo3', // EmailJS > Templates
      formData,
      'bo2IP0M-qoPKpNdQL' // EmailJS > Account > API Keys
    )
    .then(() => {
      setMessageColor('color-first');
      setFeedbackMessage('Message sent ✔');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFeedbackMessage(''), 5000);
    })
    .catch(() => {
      setMessageColor('color-red');
      setFeedbackMessage('Error sending message ❌');
    });
  };

  return (
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
  );
};

export default Contact2;
