import { useEffect, useState } from "react";
import './Properties.css';
import { Link } from 'react-router-dom';
import PropertyList from './PropertyList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import propertyThumbnail from '../../assets/property-thumbnail.jpg';

function Properties({ searchTerm, onFavourite, favouriteProperties = [] }) {

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

    if (loading) return <p>Loading properties</p>
    if (error) return <p>Error: {error}</p>

    const filteredProperties = properties.filter((property) =>
        property.location.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div className="property-list">
            <div>
                <h2>Properties List</h2>
                <PropertyList
                    items={filteredProperties}
                    renderItems={property => {
                        const isFavourite = favouriteProperties.some(p => p.id === property.id);
                        return (
                            <div className="property-card">
                                <div className="card-image-container">
                                    <img
                                        src={property.picture}
                                        alt={property.location}
                                        className="card-image"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = propertyThumbnail
                                        }}
                                    />
                                    <div className="card-badge">{property.type}</div>
                                    <button
                                        className="favourite-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onFavourite(property);
                                        }}
                                        title={isFavourite ? "Added to Favourites" : "Add to Favourites"}
                                    >
                                        <FontAwesomeIcon
                                            icon={isFavourite ? faHeartSolid : faHeartRegular}
                                            style={{ color: isFavourite ? 'red' : 'white' }}
                                        />
                                    </button>
                                </div>
                                <div className="card-content">
                                    <h3>{property.type}</h3>
                                    <p>{property.bedrooms} Bedrooms</p>
                                    <p>{property.location}</p>
                                    <div className="card-price">£{property.price.toLocaleString()}</div>

                                    <Link to={`/property/${property.id}`} className="card-button">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        )
                    }}
                />
            </div>
            );
        </div>
    )
}
export default Properties;
