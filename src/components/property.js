import "./style.css";
import propertiesData from "../properties.json"; //import json data from the file
import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import Tab from "./tab.js";

export default function Property(){
    const {id} = useParams();
    console.log(id);
    const property = propertiesData.properties.find((prop) => prop.id === id);
    return(
        <div className="propertyPage-container">
            <div className="propertyPage-main" id={`propertyPage-main-${id}`}>
                <h1 className="propertyPage-main-title">{property.title}</h1>
            </div>

            <div className="propertyPage-second">
                <div className="propertyPage-second-tabs-container">
                    <Tab
                    longdDescription={property.longDescription}
                    floorPlanImage={property.floorplan}
                    propertyName = {property.title}
                    iframe = {property.iframe}>
                    </Tab>
                </div>

                <div className="propertyPage-images-container">
                    
                </div>
            </div>
        </div>
    )
}