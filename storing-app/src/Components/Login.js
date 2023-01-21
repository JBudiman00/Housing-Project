import {React} from "react";


export default function Login() {
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
                    type = "text"
                    placeholder="Password"
                />
            </form>
            <button className="login--button">Log in</button>
        </div>
    )
}