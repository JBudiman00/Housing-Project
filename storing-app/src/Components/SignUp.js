import {React, useState} from "react";
import { app, database } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function SignUp() {
    let auth = getAuth();

    const [data, setData] = useState({
        first_name:"",
        last_name:"",
        email: "",
        password: "",
        phone_num:""
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
        setDoc(collectionRef, data.email, {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            phone_num: data.phone_num
        })
        .then(() => {
            alert('Account created successfully')
        })
        .catch((err) => {
            alert(err.message);
            alert("Error: Email address already exist");
        });
    }
    return (
        <div className="SignUp">
            <h1 className="login--label">Sign Up</h1>
            <form className="credentials--input">
                <input 
                    className="input--form"
                    type = "text"
                    name = "first_name"
                    placeholder="First Name"
                    onChange={(event) => handleInput(event)}
                />
                <input 
                    className="input--form"
                    type = "text"
                    name = "last_name"
                    placeholder="Last Name"
                    onChange={(event) => handleInput(event)}
                />
                <input 
                    className="input--form"
                    type = "text"
                    name = "email"
                    placeholder="Email"
                    onChange={(event) => handleInput(event)}
                />
                <input 
                    className="input--form"
                    type = "password"
                    name = "password"
                    placeholder="Password"
                    onChange={(event) => handleInput(event)}
                />
                <input 
                    className="input--form"
                    type = "text"
                    name = "phone_num"
                    placeholder="Phone Number"
                    onChange={(event) => handleInput(event)}
                />
            </form>
            <button className="login--button" onClick={handleLogin}><Link className="login-link" to = "/">Sign up</Link></button>
        </div>
    )
}