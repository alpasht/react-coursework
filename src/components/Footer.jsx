import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* footer links*/}
                    <div>
                        <h3 className="footer-column-title">Quick Links</h3>
                        <ul className="footer-link-list">
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/property" className="footer-link">Find Property</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                            <li><Link to="/about" className="footer-link">About Us</Link></li>
                        </ul>
                    </div>

                    {/* CONTACT US */}
                    <div>
                        <h3 className="footer-column-title">Contact Us</h3>
                        <ul className="footer-link-list">
                            <li className="footer-contact-item">
                                <FontAwesomeIcon icon={faMapPin} className="footer-contact-icon" />
                                <span>67 High Street<br />London, E11 3NN</span>
                            </li>
                            <li className="footer-contact-item">
                                <FontAwesomeIcon icon={faPhone} className="footer-contact-icon" />
                                <span>123 4567 8910</span>
                            </li>
                            <li className="footer-contact-item">
                                <FontAwesomeIcon icon={faEnvelope} className="footer-contact-icon" />
                                <span>info@property2go.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* privacy policy and terms of service */}
                <div className="footer-bottom-bar">
                    <p className="footer-copyright">
                        © 2025 Property2Go. All rights reserved.
                    </p>

                    <div className="footer-legal-links">
                        <Link to="#" className="footer-legal-link">Privacy Policy</Link>
                        <Link to="#" className="footer-legal-link">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;