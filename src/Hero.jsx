import propertyImage from './assets/property-thumbnail.jpg';
function Hero() {
    return (
        <>
            <div className="hero-container">
                <img src={propertyImage} alt="property image"
                    className="hero-img"></img>
                <div className="hero-text">
                    <h1>Welcome!</h1>
                    <p>Your estate journey starts here</p>
                </div>
            </div>


        </>

    )
}

export default Hero