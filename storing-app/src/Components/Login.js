import {React, useEffect, useState} from "react";
import { app, database } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

export default function Login() {
    let auth = getAuth();

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const collectionRef = collection(database, 'users');

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value };

        setData({...data, ...newInput});
    };

    const handleLogin = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => { 
            console.log(response.user)
            console.log(data.email)
            console.log(data.password)
        })
        .catch((err) => {
            console.log(JSON.stringify(err)) 
        });
        addDoc(collectionRef, {
            email: data.email,
            password: data.password
        })
        .then(() => {
            alert('Data added')
        })
        .catch((err) => {
            alert(err.message);
        });
    }
    

    return (
        <div className="Login">
            <h1 className="login--label">Login</h1>
            <form className="credentials--input">
                <input 
                    className="input--form"
                    name = "email"
                    type = "text"
                    placeholder="Email"
                    onChange={(event) => handleInput(event)}
                />
                <input 
                    className="input--form"
                    name = "password"
                    type = "password"
                    placeholder="Password"
                    onChange={(event) => handleInput(event)}
                />
            </form>
            <button className="login--button" onClick={handleLogin}>Log in</button>
        </div>
    
    )
}

