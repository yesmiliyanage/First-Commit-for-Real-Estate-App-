import "./style.css";
import propertiesData from "../properties.json"; //import json data from the file
import React, {useState} from 'react';

export default function Tab({longdDescription, floorPlanImage, propertyName, iframe}){

    const [currentTab, setCurrentTab] =  useState(1);

    const handleTabClick = (tabIndex) => {
        setCurrentTab(tabIndex);
    };

    return (
        <div className="tabs-container">
            <div className="tab-buttons-container">
                <button className={`tab-button ${currentTab === 1? "active-tab":""}`} onClick={() => handleTabClick(1)}>
                    Description
                </button>
                <button className={`tab-button ${currentTab === 2? "active-tab":""}`} onClick={() => handleTabClick(2)}>
                    Floor plan
                </button>
                <button className={`tab-button ${currentTab === 3? "active-tab":""}`} onClick={() => handleTabClick(3)}>
                    Location
                </button>
            </div>

            <div className="tab-content-container">
                {currentTab === 1 && (
                    <div className="tab-long-description">
                        {longdDescription}
                    </div>
                )}
                {currentTab === 2 && (
                    <div>
                        <img src={floorPlanImage} alt={`floor plan image for ${propertyName}`}/>
                    </div>
                )}
                {currentTab === 3 && (
                    <div className="iframe-container">
                        <iframe src={iframe}
                        loading="lazy"/>
                    </div>
                )}
            </div>
        </div>
    )
}