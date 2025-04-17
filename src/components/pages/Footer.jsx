import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import "../../styles/Home.css";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Stay on top of your shared expenses</h2>
            <p>
              Subscribe to Share Pay updates and be the first to receive tips, new features, and smart ways to manage
              and split expenses with friends, family, or teams.
            </p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
            <small>
              By subscribing you agree to our <a href="#">Privacy Policy</a>.
            </small>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <strong>Share Pay</strong>
          <p>Making shared expenses simple and fair</p>
          <div className="footer-icons">
            <a href="mailto:support@splitbill.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://github.com/splitbill" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/company/splitbill"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/splitbill" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>

          <p className="footer-copy">© {new Date().getFullYear()} Share Pay. All rights reserved.</p>
        </div>
        <div className="footer-columns">
          <div>
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">Payment</a>
              </li>
              <li>
                <a href="#">Groups</a>
              </li>
              <li>
                <a href="#">History</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
