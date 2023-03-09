import React from 'react'
import style from "./Header.module.css"
export default function Header() {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-5'>
                    <img src='./access/logo.png' />
                </div>
                <div className='col-2'><i className="fa fa-phone"></i> <span>(00) 000 111 2222</span></div>
                <div className='col-3'><i className="fa fa-envelope"></i> <span>info@example.com Store</span></div>
                <div className='col-2'><i className="fa fa-map-pin"></i><span>Store Location</span></div>
            </div>
        </div>
    )
}
