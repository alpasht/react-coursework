import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import SearchBox from '../SearchBox';
import PropertyGrid from './PropertyGrid';
import PropertyCard from './PropertyCard';
import FavouriteProperties from './FavouriteProperties';
import PropertyShowcase from './PropertyShowcase';
import '../index.css';

function Property() {
    const [searchTerm, setSearchTerm] = useState('');
    const [favouriteProperties, setFavouriteProperties] = useState([]);
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/properties.json')
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch properties.json")
                return res.json()
            })
            .then((data) => {
                setProperties(data.properties || data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    const addFavourite = property => {
        if (!favouriteProperties.some(p => p.id === property.id)) {
            setFavouriteProperties([...favouriteProperties, property])
        }
    }

    const removeFavourite = property => {
        setFavouriteProperties(favouriteProperties.filter(p => p.id !== property.id))
    }

    const filteredProperties = properties.filter((property) =>
        property.location.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div className="property-container">

            {/* router helps to avoid favourite properties from being lost when navigating to a different page */}
            <Routes>
                <Route path="/" element={
                    <>
                        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        {loading && <p>Loading properties...</p>}
                        {error && <p>Error: {error}</p>}
                        {!loading && !error && (
                            <div className="property-list">
                                <h2>Properties List</h2>
                                <PropertyGrid
                                    items={filteredProperties}
                                    renderItems={property => (
                                        <PropertyCard
                                            key={property.id}
                                            property={property}
                                            onFavourite={addFavourite}
                                            isFavourite={favouriteProperties.some(p => p.id === property.id)}
                                        />
                                    )}
                                />
                            </div>
                        )}
                        <FavouriteProperties favouriteProperties={favouriteProperties} onRemoveFavourite={removeFavourite} />
                    </>
                } />
                <Route path="/property/:id" element={<PropertyShowcase />} />
            </Routes>
        </div>
    )
}

export default Property
