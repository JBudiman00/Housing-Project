import React from "react";
import "./Reservation.css";
import { useParams } from "react-router-dom";
import MapContainer from "./Map";
import Geocode from "react-geocode";
import { CgProfile } from "react-icons/cg"
import "./hillenbrand.jpg";

export default function Reservation(props) {
    const data = useParams();
    return (
        <div>
            <div className="Title-reservation">
                Make Reservation
            </div>
            <div className="reserve">
                <div className="storage-details">
                    <MapContainer />
                </div>
                <div className="card">
                    <img src= {data.imageURL} className="img-storage" />
                    <div className="card__info">
                        <h1>{data.name.substring(1)}</h1>
                        <CgProfile className="profile-icon" size={35} />
                        <span>{data.owner.substring(1)}</span>
                        <h2>Price: $ {data.price.substring(1)} / Day</h2>
                        <h2>Address: 318 N Salisbury, West Lafayette, IN</h2>
                        <h2>Contact: lpreacher@gmail.com</h2>
                        <h2>Storage Capacity: {data.size.substring(1)} boxes</h2>
                        <button className="buttons-listing">Reserve your spot</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}