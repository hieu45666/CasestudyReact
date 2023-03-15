import React from "react";
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div
            style={{
                position: "sticky",
                top: "0px",
                zIndex: 9999,
                backgroundColor: "white",
            }}
            className="mt-3"
        >
            <ul className="nav justify-content-center">
            <Link className="nav-link text-secondary active" to='/' role="button">
                Login
            </Link>
            <Link className="nav-link text-secondary" to='/signup' role="button">
                Sign Up
            </Link>
            </ul>
        </div>
    );
}
