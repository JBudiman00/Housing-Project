import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from '@material-ui/core/InputAdornment';
import { SearchOutlined } from "@material-ui/icons";
import { TextField, IconButton } from '@material-ui/core';
import { Outlet, Link } from "react-router-dom";


export default function NavBar(props) {
    return (
        <>
            <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
                <div class="container">
                    <a href="/" class="navbar-brand d-flex w-50 me-auto">Store My Stuff</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <TextField
                        fullWidth
                        id="standard-bare"
                        variant="outlined"
                        placeholder="Search by Name"
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                        className="header_center"
                    />

                    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
                        <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/sign-up">Get Started</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}