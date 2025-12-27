// wip add href links
import { Link } from 'react-router-dom';
import Logo from './assets/minimalist-logo.jpg'
import ThemeWidget from './ThemeWidget';

function Navbar() {
    //we want to return all of this div 
    return (
        <>
            <div className="navbar-container">
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
            </div>
        </>
    )
}


export default Navbar