function PropertyList({items, renderItems, emptyMessage="No properties found"}){
    if (!items.length) return <p>{emptyMessage}</p>

    return (
        <ul>
            {items.map((item,index) => (
                <li key={index}>{renderItems(item)}</li>
            ))}
        </ul>
    
    )
}
export default PropertyList