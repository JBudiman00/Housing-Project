import { React, useEffect } from "react";
import {CgProfile} from "react-icons/cg";
import { app, database } from "./firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

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