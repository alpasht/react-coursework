import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function PropertyShowcase() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);


    useEffect(() => {
        // Fetch properties and find the one matching the ID
        fetch('/properties.json')
            .then(res => res.json())
            .then(data => {
                const found = (data.properties || data).find(p => p.id === id);
                setProperty(found);
            });
    }, [id]);

    if (!property) return <div>Loading...</div>;

    // images for the property showcase
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ]



    return (
        <>
            <div className="section-container">
                <div className="left-section">
                    <h1>{property.type} in {property.location}</h1>
                    {/* Add your design here */}
                    <img src={property.picture} alt={property.location} />
                    <p>{property.description}</p>

                    <ImageGallery items={images} />
                </div>

                <div className="right-section">
                    {/* react tabs for the property showcase */}
                    <Tabs>
                        <TabList>
                            <Tab>Description</Tab>
                            <Tab>Floor Plan</Tab>
                            <Tab>Map</Tab>
                        </TabList>

                        <TabPanel>
                            <p>{property.description}</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Floor Plan Placeholder</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Map Placeholder</p>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    );
}

export default PropertyShowcase;
