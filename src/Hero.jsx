import propertyImage from './assets/property-thumbnail.jpg';
function Hero(){
    return(
    <>
    <div className="hero-container"> 
        <img src={propertyImage} alt="property image" 
        className="hero-img"></img>
        </div>
    
    
    </>
    
    )
}

export default Hero