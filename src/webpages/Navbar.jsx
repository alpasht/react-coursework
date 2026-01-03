// wip add href links
import { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../assets/minimalist-logo.jpg'
import ThemeWidget from '../../components/ThemeWidget';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar-container">
                <div className="navbar">
                    <img src={Logo} alt="minimalist logo" className="logo" />

                    <div className="hamburger" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                    </div>

                    <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                        <li> <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link> </li>
                        <li> <Link to="/property" onClick={() => setIsMenuOpen(false)}>Properties</Link> </li>
                        <li> <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link> </li>
                        <li> <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link> </li>
                        <li> <ThemeWidget /> </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Navbar