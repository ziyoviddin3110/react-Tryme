import React from 'react';
import "./Footer.css";
import { NavLink } from 'react-router-dom';

function Footer() {
  // Sahifani yuqoriga qaytarish funksiyasi
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="container">
        <div className="footer_imgs">
        <NavLink onClick={scrollToTop} to="/">      <img src="/imgs/Logo PNG 1.svg" alt="" /></NavLink>
          <ul className="footer-list">
            <li>
              <NavLink to="/" onClick={scrollToTop} className="fotter-link">Home</NavLink>
            </li>
           
            <li>
              <NavLink to="/about" onClick={scrollToTop} className="fotter-link">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={scrollToTop} className="fotter-link">Contact</NavLink>
            </li>
          </ul>
        </div>
        <hr />
        <div className="footer_box">
          <h3>2022 Relume. All rights reserved.</h3>
          <div className="footer_box1">
            <h3>Privacy Policy</h3>
            <h3>Terms of Service</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
