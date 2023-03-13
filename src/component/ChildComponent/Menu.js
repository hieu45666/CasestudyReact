import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import EditProduct from "./EditProduct1";

export default function Menu() {
  let dataCart = useSelector((state) => state.DataMedicine.Cart);
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
      <ul
        style={{ maxWidth: "1100px", margin: "auto" }}
        className="nav nav-tabs p-3"
      >
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#" role="button">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            type="button"
            data-toggle="modal"
            data-target="#modelId1"
            href="#"
            className="nav-link"
          >
            Edit Medicine
          </a>
          <EditProduct />
        </li>

        <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-secondary" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user"></i> My acount</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Info</a>
                        <a className="dropdown-item" href="#">Change Password</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Log Out</a>
                    </div>
                </li>

        <li className="nav-item">
          <a
            type="button"
            data-toggle="modal"
            data-target="#modelId2"
            href="#"
            className="nav-link"
          >
            <i className="fa fa-cart-arrow-down"></i> Cart( {dataCart.length}{" "}
            item)
          </a>
          <Cart />
        </li>
      </ul>
    </div>
  );
}
