import React from "react";
import Link from "next/link";
import '../../styles/about.css'; // Ensure the CSS file is imported

function About() {
  return (
   
      <div className="about-container">
        {/* Background Image */}
        <div
          className="about-bg"
          style={{
            backgroundImage: "url('https://img.freepik.com/premium-vector/hand-drawn-floral-background_23-2149032851.jpg?w=900')",
          }}
        ></div>
        
        {/* Main Content */}
        <div className="about-content">
          <h1>About Us</h1>

          <p>
            We are passionate about creating unforgettable experiences. With a
            decade of expertise, we specialize in event planning, offering
            personalized services to make every celebration unique and
            memorable.
          </p>

          <p className="large">
            From elegant weddings to intimate gatherings, we focus on details
            that reflect your style. Our team is dedicated to making your event
            flawless, so you can enjoy every moment.
          </p>

          <Link href="/services">
            Our Services
          </Link>
        </div>
      </div>

      
   
  );
}

export default About;