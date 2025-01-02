import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Favourites(){
    return (
        <div className="favourites-container">
            <div className="favs-title-container">
                <h1 className="favs-main-title">FAVOURITES<FontAwesomeIcon icon={faHeart} className="favs-heart-icon"/></h1>
                <h2 className="favs-sub-title">Explore a collection of dream properties you've personally selected, showcasing the best in comfort, style, and investment potential—tailored to fit your unique tastes and needs</h2>
            </div>
            <div className="favs-props-container">

            </div>
            
        </div>

        
    );
}