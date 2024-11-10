'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import '../../styles/contact.css'; // Make sure you import the CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = () => {
    
    console.log(formData.name);
    alert('Message sent!');
    // You can add form handling logic here
  };

  return (
  
      <div className="contact-container">
        {/* Background Image */}
        <div
          className="contact-bg"
          style={{
            backgroundImage: "url('https://img.freepik.com/free-vector/beautiful-blooming-flower-leaves-background_44538-2060.jpg?t=st=1727015752~exp=1727019352~hmac=314f1733e6ad6d633d9071b3b26ccee3e6a4286c35751fc5f9094a43c33584dd&w=1060')",
          }}
        ></div>

        {/* Main Content */}
        <div className="contact-content">
          <h1>Contact Us</h1>

          <form onSubmit={handleSubmit} className="contact-form">
            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={6}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    
  );
}

export default Contact;
