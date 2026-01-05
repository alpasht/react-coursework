import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
    // State for advanced filters, shared with SearchBox and SearchFilter components
    const [filters, setFilters] = useState({
        type: '',
        minPrice: '',
        maxPrice: '',
        minBedrooms: '',
        dateFrom: '',
        dateTo: '',
        postcode: ''
    });

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

    /**
     * Dynamic Filtering Logic
     * Iterate through the properties and apply multiple conditional checks.
     * The property must match ALL active filter criteria to be displayed.
     */
    const filteredProperties = properties.filter((property) => {
        // String-based search for property location
        const matchesSearch = property.location.toLowerCase().includes(searchTerm.toLowerCase());

        // Exact match for property type (if selected)
        const matchesType = !filters.type || property.type.toLowerCase() === filters.type.toLowerCase();

        // Numerical range checks for price and bedroom count
        const matchesMinPrice = !filters.minPrice || property.price >= parseInt(filters.minPrice);
        const matchesMaxPrice = !filters.maxPrice || property.price <= parseInt(filters.maxPrice);
        const matchesBedrooms = !filters.minBedrooms || property.bedrooms >= parseInt(filters.minBedrooms);

        // Location-specific postcode filtering
        const matchesPostcode = !filters.postcode || property.location.toLowerCase().includes(filters.postcode.toLowerCase());

        /**
         * Complex Date Logic:
         * Properties in the JSON store dates as object fields (month, day, year).
         * Converted these into standard JS Date objects to compare against the filter's date strings.
         */
        let matchesDate = true;
        if (filters.dateFrom || filters.dateTo) {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            // Constructing a Date object from JSON fields
            const propertyDate = new Date(property.added.year, months.indexOf(property.added.month), property.added.day);

            if (filters.dateFrom) {
                matchesDate = matchesDate && propertyDate >= new Date(filters.dateFrom);
            }
            if (filters.dateTo) {
                matchesDate = matchesDate && propertyDate <= new Date(filters.dateTo);
            }
        }

        return matchesSearch && matchesType && matchesMinPrice && matchesMaxPrice && matchesBedrooms && matchesPostcode && matchesDate;
    });

    return (
        <div className="property-container">

            {/* router helps to avoid favourite properties from being lost when navigating to a different page */}
            <Routes>
                <Route path="/" element={
                    <>
                        <SearchBox
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            filters={filters}
                            setFilters={setFilters}
                        />
                        {loading && <p>Loading properties...</p>}
                        {error && <p>Error: {error}</p>}
                        {!loading && !error && (
                            <div className="property-list animate-in">
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
                        <div className="animate-in">
                            <FavouriteProperties favouriteProperties={favouriteProperties} onRemoveFavourite={removeFavourite} />
                        </div>
                    </>
                } />
                <Route path="/property/:id" element={<PropertyShowcase />} />
            </Routes>
        </div>
    )
}

export default Property
