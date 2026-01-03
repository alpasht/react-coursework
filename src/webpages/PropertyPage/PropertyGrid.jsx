function PropertyList({ items, renderItems, emptyMessage = "No properties found" }) {
    if (!items.length) return <p>{emptyMessage}</p>

    return (
        <div className="property-grid">
            {items.map((item) => (
                <div key={item.id}>
                    {renderItems(item)}
                </div>
            ))}
        </div>
    )
}
export default PropertyList