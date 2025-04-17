import React from "react";
import "../../styles/Home.css";
function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">Got a question or feedback? We'd love to hear from you.</p>

      <d iv className="contact-form-con">
        <div className="contact-img">
          <img src="/images/contact.png" alt="Contact image" />
        </div>

        <div className="form-contact">
          <form className="contact-form">
            <label htmlFor="name">Your name</label>
            <input type="text" placeholder="Your Name" className="contact-input" />
            <label htmlFor="email-con">Email Address</label>
            <input type="email" placeholder="Your Email" className="contact-input" />
            <label htmlFor="message">Your message</label>
            <textarea placeholder="Your Message" className="contact-textarea"></textarea>
            <button type="submit" className="contact-button">
              Send
            </button>
          </form>
        </div>
      </d>
    </div>
  );
}

export default Contact;
