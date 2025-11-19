// wip add href links
import Logo from './assets/minimalist-logo.jpg'

function Navbar() {
//we want to return all of this div 
    return(
    <>
    <div className="navbar-container">
    <div className="navbar">
   
   <img src={Logo} alt="minimalist logo"></img>
   
            <ul className="nav-links">
                <li> <a href="">Home </a> </li>
                <li> <a href=""> Properties </a> </li>
                <li> <a href="">Contact </a> </li>
                <li> <a href="">Lorem </a> </li>


            </ul>
        </div>
        </div>
        </>
    )
}

 
export default Navbar