import propertyImage from '../assets/property-thumbnail.jpg';
import './Hero.css';
function Hero() {
    return (
        <>
            <div className="hero-container">
                <img src={propertyImage} alt="property image"
                    className="hero-img"></img>
                <div className="hero-text">
                    <h1>Welcome!</h1>
                    <p>Your real estate journey starts <b>here</b></p>
                </div>
            </div>


        </>

    )
}

export default Hero