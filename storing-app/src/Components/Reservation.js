import React from "react";
import "./Reservation.css";
import { useParams } from "react-router-dom";
import MapContainer from "./Map";
import Geocode from "react-geocode";

export default function Reservation(props) {
    const [location, setLocation] = React.useState({lat: 0, lng: 0})
    async function changeLocation(arg) {
        Geocode.setApiKey("AIzaSyBMdT1gM3sxgebpNmcoFFQcB4F23LMvPUY");
        Geocode.setLanguage("en")

        Geocode.setLocationType("ROOFTOP")
        Geocode.enableDebug();


        console.log(arg)

        await Geocode.fromAddress(arg).then(
            (response => {
                const { lati, longi } = response.results[0].geometry.location;
                console.log(lati, longi);
                setLocation(old => {
                    return ({
                        lat: (lati),
                        lng: (longi)
                    })
                })
            }
            ),
            (error) => {
                console.error(error);
            }
        );
    }

    const id = useParams();
    console.log(id.address);

    React.useEffect(() => {
        changeLocation(id.address);
    }, []);

    const lat = location[1];

    console.log(location);
    return (
        <div>
            <div>
                Make Reservation
            </div>
            <div className="storage-details">
                <MapContainer storageLocation={{lat: location[0], lng: lat}} />
            </div>
        </div>
    )
}