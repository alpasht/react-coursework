import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar'
import Hero from './Hero'
import SearchBox from './SearchBox'
import Properties from './Properties'
import './index.css'
import FavouriteProperties from './FavouriteProperties'

import PropertyShowcase from './PropertyShowcase';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [favouriteProperties, setFavouriteProperties] = useState([])
    const addFavourite = property => {
        if (!favouriteProperties.some(p => p.id === property.id)) {
            setFavouriteProperties([...favouriteProperties, property])
        }
    }

    const removeFavourite = property => {
        setFavouriteProperties(favouriteProperties.filter(p => p.id !== property.id))
    }

    return (
        <Router>
            <div className="home-container">
                <Navbar />
                {/* router helps to avoid favourite properties from being lost when navigating to a different page */}
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                            <Properties searchTerm={searchTerm} onFavourite={addFavourite} favouriteProperties={favouriteProperties} />
                            <FavouriteProperties favouriteProperties={favouriteProperties} onRemoveFavourite={removeFavourite} />
                        </>
                    } />
                    <Route path="/property/:id" element={<PropertyShowcase />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
