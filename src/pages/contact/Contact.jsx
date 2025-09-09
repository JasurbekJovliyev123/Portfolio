import React, { useState } from 'react'
import { RiUser3Line, RiMailUnreadLine, RiMap2Line, RiBook2Line, RiSendPlaneLine } from "react-icons/ri";
import './contact.css'
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'

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
      setFeedbackMessage('Iltimos, barcha maydonlarni to‘ldiring!');
      setTimeout(() => setFeedbackMessage(''), 3000);
      return;
    }

    emailjs.send(
      'service_m61t0ve',      // ✅ o‘z Service ID’ingiz
      'template_xxxxxx',      // ✅ bu joyga o‘z Template ID’ingizni yozing
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'bo2IP0M-qoPKpNdQL'     // ✅ bu joyga o‘z Public Key’ingizni yozing
    )
      .then(
        () => {
          setMessageColor('color-first');
          setFeedbackMessage('Xabar muvaffaqiyatli yuborildi ✔');
          setTimeout(() => setFeedbackMessage(''), 5000);
          setFormData({
            name: "",
            email: '',
            subject: '',
            message: ''
          });
          toast.success('Xabar yuborildi!');
        },
        (error) => {
          alert('Xatolik yuz berdi! Qaytadan urinib ko‘ring.', error);
          console.log(error);
        }
      );
  };

  return (
    <section className="contact section">
      <h3 className="section-title">
        Menga <span>Bog‘laning</span>
      </h3>

      <div className="contact-container">
        <div className="contact-content container grid">
          <div className="contact-card">
            <span className="contact-icon">
              <RiMap2Line />
            </span>
            <div>
              <h3 className="contact-title">Manzil</h3>
              <p className="contact-data">O‘zbekiston, Qarshi</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiUser3Line />
            </span>
            <div>
              <h3 className="contact-title">Freelance</h3>
              <p className="contact-data">Hozirda mavjud</p>
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
              <h3 className="contact-title">Telefon</h3>
              <div className="contact-data">+998-94-334-35-04</div>
            </div>
          </div>
        </div>

        <Toaster richColors position="top-right" />

        <form onSubmit={sendEmail} className="contact-form container grid">
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label className="contact-form-label">To‘liq ism <b>*</b></label>
              <input 
                type="text" 
                name="name" 
                onChange={handleChange} 
                value={formData.name} 
                className="contact-form-input" 
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-label">Email manzil <b>*</b></label>
              <input 
                type="email" 
                name="email" 
                onChange={handleChange} 
                value={formData.email} 
                className="contact-form-input" 
              />
            </div>
          </div>

          <div className="contact-form-div">
            <label className="contact-form-label">Mavzu <b>*</b></label>
            <input 
              type="text" 
              name="subject" 
              onChange={handleChange} 
              value={formData.subject} 
              className="contact-form-input" 
            />
          </div>

          <div className="contact-form-div">
            <label className="contact-form-label">Xabaringiz <b>*</b></label>
            <textarea 
              name="message" 
              onChange={handleChange} 
              value={formData.message} 
              className="contact-form-input contact-form-area">
            </textarea>
          </div>

          <div className="contact-button">
            <button className="button">
              Xabarni yuborish
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
