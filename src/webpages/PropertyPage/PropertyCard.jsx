import './Properties.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import propertyThumbnail from '../../assets/property-thumbnail.jpg';

function PropertyCard({ property, onFavourite, isFavourite }) {
    return (
        <div className="property-card">
            <div className="card-image-container">
                <img
                    src={property.thumbnailpicture}
                    alt={property.location}
                    className="card-image"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = propertyThumbnail
                    }}
                />
                {property.added?.year >= 2024 && <div className="card-badge">New</div>}
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
                <h3>{property.location}</h3>
                <p>{property.type}</p>
                <p>{property.bedrooms} Bedrooms</p>
                <div className="card-price">£{property.price.toLocaleString()}</div>

                <Link to={`/property/${property.id}`} className="card-button">
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default PropertyCard;
