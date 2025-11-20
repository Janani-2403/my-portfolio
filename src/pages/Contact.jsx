import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/pages/contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_81yr1k8", 
        "template_tb3gafi", 
        form.current,
        "uzLzthB4lGcfoUrds"  
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">
        Feel free to reach out — I’ll get back to you as soon as possible!
      </p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>📍 Location:</strong> Erode, Tamil Nadu, India</p>
          <p><strong>📧 Email:</strong> janani.boopathy@outlook.com</p>
          <p><strong>📞 Phone:</strong> +91 6380598123</p>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <input type="text" name="title" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="6" required style={{marginTop:"19px"}} />
          <button type="submit" className="send-btn">Send Message</button>

          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
