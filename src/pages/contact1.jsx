import React, { useState } from 'react';
import '../pages/contact/contact.css';
import { RiUser3Line,RiMailUnreadLine,RiMap2Line,RiBook2Line,RiSendPlaneLine } from "react-icons/ri";
const Contact1 = () => {
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

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessageColor('color-red');
      setFeedbackMessage('Write all the input fields');
      setTimeout(() => setFeedbackMessage(''), 3000);
      return;
    }

    const botToken = '7996020703:AAGoJD4I5WyGQwq5ZyF6XgT734lgYXq2ap8'; 
    const chatId = '425981386';   

    const text = `
<b>📩 Yangi xabar:</b>

👤 <b>Ismi:</b> ${formData.name}
📧 <b>Email:</b> ${formData.email}
📝 <b>Mavzu:</b> ${formData.subject}
💬 <b>Xabar:</b> ${formData.message}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
        }),
      });

      setMessageColor('color-first');
      setFeedbackMessage('Message sent ✔');
      setTimeout(() => setFeedbackMessage(''), 5000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert('Oops! Something went wrong...', error);
    }
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
            <RiMap2Line/>
          </span>
          <div>
            <h3 className="contact-title">Address </h3>
            <p className="contact-data">Uzbekistan, Karshi</p>
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-icon">
            <RiUser3Line/>
          </span>
          <div>
            <h3 className="contact-title">Freelance</h3>
            <p className="contact-data">Avialable Right Now</p>
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-icon">
            <RiMailUnreadLine/>
          </span>
          <div>
            <h3 className="contact-title">Email
            </h3>
            <div className="contact-data">jasurbekjovliyev725@gmail.com</div>
          </div>
        </div>

        <div className="contact-card">
          <span className="contact-icon">
            <RiBook2Line/>
          </span>
          <div>
            <h3 className="contact-title">Phone
            </h3>
            <div className="contact-data">+998-94-334-35-04</div>
          </div>
        </div>
      </div>
      <form action="" onSubmit={sendEmail} className="contact-form container grid">
        <div className="contact-form-group grid">
          <div className="contact-form-div">
            <label htmlFor="" className="contact-form-label">Your full Name <b>*</b></label>
            <input type="text" name='name' onChange={handleChange} value={formData.name} className="contact-form-input" />
          </div>
          <div className="contact-form-div">
            <label htmlFor="" className="contact-form-label">Your Email Adress <b>*</b></label>
            <input type="email"  onChange={handleChange} value={formData.email} name='email' className="contact-form-input" />
          </div>
        </div>
        <div className="contact-form-div">
            <label htmlFor="" className="contact-form-label">Your Subject<b>*</b></label>
            <input type="text" name='subject' onChange={handleChange} value={formData.subject} className="contact-form-input" />
          </div>
          <div className="contact-form-div">
            <label htmlFor="" className="contact-form-label">Your Message<b>*</b></label>
            <textarea name='message' onChange={handleChange} value={formData.message} className="contact-form-input contact-form-area"></textarea>
          </div>
          <div className="contact-button">
            <button className="button">
              Send Message
              <span className="button-icon">
                <RiSendPlaneLine/>
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

export default Contact1;
