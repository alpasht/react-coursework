import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import '../index.css'
import './Home.css'
import PropertyShowcase from '../PropertyPage/PropertyShowcase';
import Property from '../PropertyPage/Property';
import Contact from '../ContactPage/Contact';
import About from '../AboutPage/About';
import propertyHeroImage from '../../assets/property-thumbnail.jpg';

function Home() {
    return (
        <div className="home-container animate-in">
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <div className="hero animate-in">
                            <img src={propertyHeroImage} className="hero-image" alt="Property Thumbnail" />
                            <div className="hero-content">
                                <h1 className="hero-title">Your ideal home is calling <b>you</b></h1>
                                <p className="hero-text">Enjoy metropolitan living with our listings in highly esteemed locations of London</p>
                            </div>
                        </div>
                        <div className="info-section animate-in">
                            <h2 className="info-title">Why Choose Us</h2>
                            <div className="info-grid">
                                <div className="info-card">
                                    <h3>Buy a Property</h3>
                                    <p>Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.</p>
                                </div>
                                <div className="info-card">
                                    <h3>Rent a Property</h3>
                                    <p>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                                </div>
                                <div className="info-card">
                                    <h3>Expert Support</h3>
                                    <p>Our team of experienced agents is dedicated to helping you through every step of your real estate journey.</p>
                                </div>
                            </div>
                        </div>
                    </>
                } />
                <Route path="/property/*" element={<Property />} />
                <Route path="/property/:id" element={<PropertyShowcase />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default Home
