import {React} from "react";
import Geocode from "react-geocode";

export default function Login(props) {   
    return (
        <div className="Login">
            <h1 className="login--label">Login</h1>
            <form className="credentials--input">
                <input 
                    className="input--form"
                    type = "text"
                    placeholder="Email"
                />
                <input 
                    className="input--form"
                    type = "password"
                    placeholder="Password"
                />
            </form>
            <button className="login--button">Log in</button>
        </div>
    )
}