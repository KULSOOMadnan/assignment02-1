import React from "react";
import '../styles/Footer.css'; // Ensure the CSS file is imported

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Simple Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
