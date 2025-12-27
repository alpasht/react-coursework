// wip add href links
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/minimalist-logo.jpg'
import ThemeWidget from '../../components/ThemeWidget';

function Navbar() {

    const links = [
        { href: "/", label: "Home" },
        { href: "/property", label: "Browse Properties" },
        { href: "/contact", label: "Contact Us" },
        { href: "/about", label: "About Us" },
    ];
    return (
        <>
            <nav className="navbar-container">
                <div className="navbar">

                    <img src={Logo} alt="minimalist logo"></img>

                    <ul className="nav-links">
                        <li> <Link to="/">Home </Link> </li>
                        <li> <Link to="/"> Properties </Link> </li>
                        <li> <Link to="/">Contact </Link> </li>
                        <li> <Link to="/">Lorem </Link> </li>
                        <li> <ThemeWidget /> </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Navbar