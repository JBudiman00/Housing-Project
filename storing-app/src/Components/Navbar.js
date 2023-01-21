import React from "react";

export default function NavBar(props) {
    return (
        <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
            <div class="container">
                <a href="/" class="navbar-brand d-flex w-50 me-auto">Store My Stuff</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={props.login}>Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={props.signup}>Get Started</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}