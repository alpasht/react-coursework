import { useParams } from 'react-router-dom';
import './PropertyShowcase.css';
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
        property.thumbnailpicture,
        property.gallerypicture1,
        property.gallerypicture2,
        property.gallerypicture3,
        property.gallerypicture4,
        property.gallerypicture5,
        property.gallerypicture6,
        property.gallerypicture7,
    ].filter(Boolean)  // removes undefined/null
        .map(src => ({
            original: src,
            thumbnail: src,
        }));

    const floorPlan = [
        property.floorplan,
    ].filter(Boolean)
        .map(src => ({
            original: src,
            thumbnail: src,
        }));

    return (
        <>
            <div className="section-container">
                <div className="left-section">
                    <h1>{property.type} in {property.location}</h1>
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
                            <img src={property.floorplan} alt="Floor Plan" className="floor-plan" />
                        </TabPanel>
                        <TabPanel>
                            <div className="map-container">
                                <iframe
                                    title="Property Location"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0, borderRadius: '15px' }}
                                    src={property.googleMapsEmbed || `https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    );
}

export default PropertyShowcase;
