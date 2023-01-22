import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";



export default function SearchResults(props) {
    return (
        <Link to= {`/reservation/:${props.address}`} className="card">
            <img src="./Images/test_image.jpg" className="img-storage" />
            <div className="card__info">
                <h1>Storage 1</h1>
                <h2>Price: {props.price}</h2>
                <h2>Address: {props.address}</h2>
                <CgProfile className="profile-icon" size={35} />
                <span>Jimmy Dinh</span>
            </div>
        </Link>

    )
}