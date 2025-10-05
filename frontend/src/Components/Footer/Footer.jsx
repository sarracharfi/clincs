// Footer.jsx
import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo et nom */}
        <div className="logo-section">
          <img src="/logo.png" alt="Clinique Santé Logo" className="logo" />
          <span className="clinic-name">Clinique Santé</span>
        </div>

        {/* Liens sociaux */}
        <div className="social-links">
          <a href="https://www.clinique-sante.com" target="_blank" rel="noopener noreferrer">
            <FaGlobe />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="copyright">
          &copy; {new Date().getFullYear()} Clinique Santé. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
