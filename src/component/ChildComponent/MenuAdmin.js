import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import EditProduct from "./EditProduct1";
import {Link} from 'react-router-dom';
import { routers } from "../../router/routers";
import { logOut } from "../../redux/action/actions";

export default function Menu() {
  let dataCart = useSelector((state) => state.DataMedicine.Cart);
  let dispatch = useDispatch();
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
        {routers.map((router) => {
          return <li className="nav-item active">
          <Link className="nav-link text-secondary" to={router.path} role="button">
            {router.name}
          </Link>
        </li>
        })}
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
                        <button className="btn-link dropdown-item" onClick={()=>{dispatch(logOut())}} >Log Out</button>
                    </div>
                </li>

        <li className="nav-item">
          <button type="button" data-toggle="modal"
            data-target="#modelId2"
            href="#"
            className="nav-link btn btn-primary position-relative">
              <i className="fa fa-cart-arrow-down"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {dataCart.length}
              </span>
              </button>
          <Cart />
        </li>
      </ul>
    </div>
  );
}
