import PropertyGrid from "./PropertyGrid";
import PropertyCard from "./PropertyCard";
import './Properties.css';

function FavouriteProperties({ favouriteProperties, onRemoveFavourite }) {
    return (
        <div className="favourite-properties">
            <h2>Favourite Properties</h2>
            <PropertyGrid
                items={favouriteProperties}
                emptyMessage="You have no favourite properties"
                renderItems={property => (
                    <PropertyCard
                        key={property.id}
                        property={property}
                        onFavourite={onRemoveFavourite}
                        isFavourite={true}
                    />
                )}
            />
        </div>
    )
}

export default FavouriteProperties;