import PropertyGrid from "./PropertyGrid";
import './Properties.css';

function FavouriteProperties({ favouriteProperties, onRemoveFavourite }) {
    return (
        <div className="favourite-properties">
            <h2>Favourite Properties</h2>
            <PropertyGrid
                items={favouriteProperties}
                emptyMessage="You have no favourite properties"
                renderItems={properties => (
                    <div className="property-card">
                        <div className="card-content">
                            <strong>{properties.type}</strong>
                            <div className="card-address">{properties.location}</div>
                            <div className="card-price">£{properties.price.toLocaleString()}</div>
                            <button
                                className="card-button"
                                onClick={() => onRemoveFavourite(properties)}
                                style={{ marginTop: '10px' }}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                )}
            />
        </div>
    )
}

export default FavouriteProperties