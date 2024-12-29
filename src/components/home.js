import "./style.css";
import propertiesData from "../properties.json"; //import json data from the file
import React, {useState} from 'react';

export default function Home(){

    // state variables to filter values
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [type, setType] = useState("");
    const [price, setsetPrice] = useState("");
    const [bedroomsNum, setBedroomsNum] = useState("");


    //access the properties array inside the properties.json file
    const properties = propertiesData.properties;


    //extract unique the provided city names from propertiesData
    const cities = [...new Set(properties.map(property => property.city))];
    const postalCodes = [...new Set(properties.map(property => property.postalCode))];
    const bedrooms = [...new Set(properties.map(property => property.bedrooms))];
    const prices = [...new Set(properties.map(property => property.price))];
    const types = [...new Set(properties.map(property => property.type))];

    return(
        
        <div className="homepage-container">
            <div className="homepage-main">
                <div >
                    <h1 className="homepage-title">BUY LUXURY PROPERTIES FOR SALE IN SRI LANKA</h1>
                    
                </div>
                <div className="homepage-des">
                    Discover the finest selection of luxury homes, apartments, and flats for sale in Sri Lanka with Aria Realty. 
                    We specialize in connecting discerning buyers with exquisite properties that offer the perfect blend of elegance, comfort, and modern living. 
                    At Aria Realty, our dedicated team works closely with you to understand your unique needs and preferences, ensuring you find a property that reflects your personal taste and desires. 
                    Start your journey to refined living today, and let us help you find the home of your dreams in one of the most beautiful and sought-after destinations in the world – Sri Lanka.
                </div>
            </div>

            <div className="homepage-second">
                <div>
                    <h2 className="homepage-second-title">FIND YOUR DREAM HOME</h2>
                </div>
                <div className="homepage-form">
                    <form>
                        <div className="homepage-form-input">
                            
                        </div>
                        <div className="homepage-form-input">

                        </div>
                        <div className="homepage-form-input">

                        </div>
                        <div className="homepage-form-input">

                        </div>
                        <div className="homepage-form-input">

                        </div>
                    
                        <div></div>
                    </form>
                </div>
                <div className="homepage-props">

                </div>
            </div>
        </div>
    )
}