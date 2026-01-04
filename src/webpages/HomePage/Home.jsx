import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar'
import '../index.css'
import './Home.css'
import PropertyShowcase from '../PropertyPage/PropertyShowcase';
import Property from '../PropertyPage/Property';
import Contact from '../ContactPage/Contact';
import About from '../AboutPage/About';

function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <div className="hero" style={{ backgroundImage: "url('/src/assets/property-thumbnail.jpg')" }} />
                        <div className="info-section">
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
                <Route path="/property" element={<Property />} />
                <Route path="/property/:id" element={<PropertyShowcase />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default Home
