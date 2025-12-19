import { useEffect, useState } from "react";
import PropertyList from './PropertyList';

function Properties({ searchTerm, onFavourite }){
 
    const [properties, setProperties] = useState([]);
    const [loading,setLoading]= useState(true);
    const[error,setError]=useState(null);

    
    useEffect(() => {
        fetch('/properties.json')
        .then((res) =>{
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
    },[])

    if (loading) return <p>Loading properties</p>
    if (error) return <p>Error: {error}</p>

    const filteredProperties = properties.filter((properties) => 
        properties.location.toLowerCase().includes(searchTerm))

    return(
        <div>
            <h2>Properties List</h2>
            <PropertyList 
            items={filteredProperties}
            renderItems={properties => (
                <>
                    <strong>{properties.tenure}</strong> property in {properties.location}
                    <button onClick={() =>  onFavourite(properties)}> Add to Favourites </button>
                    </>    
            )}
                />
        </div>
    );
}
export default Properties;
