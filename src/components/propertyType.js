import "./style.css";
import propertiesData from "../properties.json"; //import json data from the file
import React, {useState} from 'react';
import Card from "./card.js";

export default function PropertyType({mainTitle, description, type, newClassForMain}){

    // This component looks almost same as the home page
    // and because of that all the classes that are being used in the home page is 
    // also used here instead of using new class names

    // state variables to filter values
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [price, setPrice] = useState("");
    const [bedroomsNum, setBedroomsNum] = useState("");


    //access the properties array inside the properties.json file
    const properties = propertiesData.properties;
    const typeProperties = properties.filter(property => {
        return (
            property.type === type
        );
    });


    //extract unique the provided city names from propertiesData
    const cities = [...new Set(properties.map(property => property.city))];
    const postalCodes = [...new Set(properties.map(property => property.postalCode))];
    const bedrooms = [...new Set(properties.map(property => property.bedrooms))];
    const prices = [...new Set(properties.map(property => property.price))];

    //filter the properties based on the user chosen criterias
    const filteredProperties = typeProperties.filter(property => {
        return(
            (city === '' || property.city === city) && (postalCode === '' || property.postalCode === postalCode.toString())&&
            (price === '' || property.price <= price) && (bedroomsNum === '' || property.bedrooms === parseInt(bedroomsNum))
        );
    });

    //handle changes when selecting items
    const handleCity = (e) => setCity(e.target.value);
    const handlePostalCodes = (e) => setPostalCode(e.target.value);
    const handlePrice = (e) => setPrice(e.target.value);
    const handleBedrooms = (e) => setBedroomsNum(e.target.value);

    //keep track of the relevant properties to display
    const [allProperties, setProperties] = useState(typeProperties);

    //handle the filtered items when the user clicks filter properties button
    const handleFilteredProperties = (e) => {
        e.preventDefault();
        setProperties(filteredProperties);
    };

    const chunkProperties = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    // Split properties into rows of 2 cards each
    const rows = chunkProperties(allProperties, 2);

    const [favourites, setFavourites] = useState([]);
        
    
    const handleFavouriteChange = (id, isFavourite) => {

        if (!isFavourite) {
            // Add to favorites
            const newFavourite = properties.find((property) => property.id === id);
            setFavourites((prev) => [...prev, newFavourite]);
        } else {
            // Remove from favorites
            setFavourites((prev) => prev.filter((property) => property.id !== id));
        }
        
    };

    return(
        <div className="homepage-container">
            <div className={`homepage-main ${newClassForMain}`}>
                <div >
                    <h1 className="homepage-title">BUY LUXURY {mainTitle} FOR SALE IN SRI LANKA</h1>
                    
                </div>
                <div className="homepage-des">
                    {description}
                </div>
            </div>

            <form onSubmit={handleFilteredProperties} className="homepage-form-container">
                <div className="homepage-form-input"> {/* to select the city for the property*/}
                    <label>City</label>
                    <select value={city} onChange={handleCity}>
                        <option value=''>Select</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <div className="homepage-form-input"> {/* to select the number of bedrooms for the property*/}
                    <label>Bedrooms</label>
                    <select value={bedroomsNum} onChange={handleBedrooms}>
                            <option value=''>Select</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                    </select>
                </div>
                <div className="homepage-form-input"> {/* to select the postal code for the located area of the property*/}
                    <label>Postal Code</label>
                    <input 
                        type="number"
                        id="postalCode"
                        placeholder="Enter the postal code"
                        onChange={handlePostalCodes}/>
                </div>
                <div className="homepage-form-input"> {/* to select the price of the property*/}
                    <label>Price</label>
                    <select value={price} onChange={handlePrice}>
                        <option value=''>Select</option>
                        <option value='13000000'>Below 13M</option>
                        <option value='30000000'>Below 30M</option>
                        <option value='50000000'>Below 50M</option>
                        <option value='65000000'>Below 65M</option>

                    </select>
                </div>
            
                <div className="homepage-form-button homepage-form-input">
                    
                    <input type="submit" value="Filter Properties" />
                    
                </div>
            </form>

            <div className="homepage-props">
                {rows.map((rows, rowIndex) => (
                    <div className="home-prop-row" key={rowIndex}>
                        {rows.map((property) => (
                            <Card
                            key={property.id}
                            property = {property}
                            id={property.id}
                            title={property.title}
                            picture={property.picture}
                            description={property.description}
                            href={property.url}
                            price={property.price}
                            alt={`Image of ${property.title} in  ${property.city}`}
                            onFavouriteChange = {handleFavouriteChange}
                            >
                            </Card>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}