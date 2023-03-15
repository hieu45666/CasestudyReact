import React, { useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setRole } from "../../redux/action/actions";


const LoginForm = (props) => {
  const dispatch = useDispatch();
  let [user, setUser] = useState({
            username : "",
            password : "",
          });
  function changeValue (event) {
      setUser(
        {
          ...user,
          [event.target.name]:event.target.value
        }
      )
  }

  const logIn = () => {
    axios.post('http://localhost:9000/login',user)
    .then(function (response) {
      if (!response.data.role) {alert(response.data)}
      else dispatch(setRole(response.data))
    })
    .catch(function (error) {
      console.log(error);
    });
}
  return (
    <div className="container" style={{top:200}}>
      <form method="post">
      <fieldset className="border">
      <legend>Đăng nhập</legend>
        <div className="mb-3">
          <label htmlFor="inputUserName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUserName"
            name="username"
            onChange={changeValue}
          />
          </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="password"
            onChange={changeValue}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Lưu mật khẩu
          </label>
        </div>
        <button type="button" className="btn btn-primary" onClick={logIn}>
          Submit
        </button>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginForm;
