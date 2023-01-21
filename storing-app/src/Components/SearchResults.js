import React from "react";
import {CgProfile} from "react-icons/cg";

export default function SearchResults(props) {
    return (
        <div className="search-results">
            <div className="storage-image">
                <img src = "./Images/test_image.jpg" className="img-storage"/>
            </div>
            <div className="storage-name">
                <h1>Storage 1</h1>
            </div>
            <div className="host-name-profile">
                <CgProfile className="profile-icon" size={35}/> 
                <span>Jimmy Dinh</span>
            </div>
            <div className="storage-desc">
                <h4 className="desc-details">Price</h4>
                <h4 className="desc-details">Storage Size</h4>
                <h4 className="desc-details">Address</h4>
            </div>
            <div className="listing-buttons">
                <button className="buttons-listing">View Map</button>
                <button className="buttons-listing">Reserve</button>
            </div>
        </div>
    )
}