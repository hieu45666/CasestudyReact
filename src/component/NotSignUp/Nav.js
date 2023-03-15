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
            className="mt-3 "
        >
            <Link className="nav-link text-secondary" to='/login' role="button">
                Login
            </Link>
            <Link className="nav-link text-secondary" to='/signup' role="button">
                Sign Up
            </Link>
        </div>
    );
}
