"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import '../styles/Navbar.css';  // Import custom CSS file

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>

      <nav className="navbar">
        {/* Logo centered on small screens */}
        <div className="logo">
            
          <Image src='/nav.png' className="logo-img" width={32} height={32} alt='logo' />
          <Link href='/'>Cart</Link>
        </div>

        {/* Show/Hide menu based on isOpen state */}
        <ul className="desktop-nav">
          <li className="hover-effect"><Link href="/">Home</Link></li>
          <li className="hover-effect"><Link href="/about">About</Link></li>
          <li className="hover-effect"><Link href="/services">Services</Link></li>
          <li className="hover-effect"><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger button to toggle menu */}
        <button
          className={`hamburger-btn ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          {!isOpen ? (
            <p className="hamburger-icon">&#119064; </p>
          ) : (
            <p className="hamburger-icon">&#10005;</p>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li className="hover-effect"><Link href='/'>Home</Link></li>
          <li className="hover-effect"><Link href='/contact'>Contact</Link></li>
          <li className="hover-effect"><Link href='/services'>Services</Link></li>
          <li className="hover-effect"><Link href='/about'>About</Link></li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;
