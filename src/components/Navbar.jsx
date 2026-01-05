// wip add href links
import { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../assets/minimalist-logo.jpg'
import ThemeWidget from './ThemeWidget';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar-container">
                <div className="navbar">
                    <Link to="/" className="navbar-logo">
                        <img src={Logo} alt="Logo" />
                    </Link>

                    <div className="hamburger" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                    </div>

                    <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                        <li> <Link to="/" onClick={() => setIsMenuOpen(false)}><span>Home</span></Link> </li>
                        <li> <Link to="/property" onClick={() => setIsMenuOpen(false)}><span>Properties</span></Link> </li>
                        <li> <Link to="/contact" onClick={() => setIsMenuOpen(false)}><span>Contact</span></Link> </li>
                        <li> <Link to="/about" onClick={() => setIsMenuOpen(false)}><span>About Us</span></Link> </li>
                        <li> <ThemeWidget /> </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Navbar