import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";



export default function SearchResults(props) {
    return (
        <Link to= {`/reservation/:${props.owner}/:${props.price}/:${props.name}/:${props.storageSize}`} className="card">
            <img src= {props.imageURL} className="img-storage" />
            <div className="card__info">
                <h1>{props.name}</h1>
                <h2>Price: ${props.price} / Day</h2>
                <h2>Address: {props.address}</h2>
                <CgProfile className="profile-icon" size={35} />
                <span>{props.owner}</span>
            </div>
        </Link>

    )
}