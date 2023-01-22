import { React, useEffect } from "react";
import {CgProfile} from "react-icons/cg";
import { app, database } from "./firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";

export default function SearchResults(props) {
    const collectionRef = collection(database, "users");
    const getData = () => {
        getDocs(collectionRef)
        .then((response) => {
            console.log("test")
            /*console.log(response.docs.map((item) => {
                //return {...item.data(), id: item.id};
            }))
            */
        })
    }
    useEffect(() => {
        getData();
    }, []);

/*
    const docRef = doc(db, "users");
    const docSnap = getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
 */   
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