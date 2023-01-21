import {React, useState, useEffect} from "react";


export default function SignUp() {
    return (
        <div className="SignUp">
            <h1 className="login--label">Sign Up</h1>
            <form className="credentials--input">
                <input 
                    className="input--form"
                    type = "text"
                    placeholder="First Name"
                />
                <input 
                    className="input--form"
                    type = "text"
                    placeholder="Last Name"
                />
                <input 
                    className="input--form"
                    type = "email"
                    placeholder="Email"
                />
                <input 
                    className="input--form"
                    type = "text"
                    placeholder="Password"
                />
                <input 
                    className="input--form"
                    type = "text"
                    placeholder="Phone Number"
                />
            </form>
            <button className="login--button">Log in</button>
        </div>
    )
}