import axiosClient from '../../API/AxiosClient';
import React, { useState } from "react";


const LoginForm = (props) => {
  let [user, setUser] = useState({
            userName : "",
            passWord : "",
          });
  function changeValue (event) {
      setUser(
        {
          [event.target.name]:event.target.value
        }
      )
  }

  const logIn = async () => {
    const response = await axiosClient.post('/auth',user);
    if(response.status === 401){ 
    }
    else if(response.status === 200){
        sessionStorage.setItem("_accessToken",JSON.stringify(response.data));
    } else props.changeLoginStatus();
}
  return (
    <div className="w-25 h-25 position-absolute start-50 translate-middle" style={{top:200}}>
      <form>
      <fieldset className="border">
      <legend>Đăng nhập</legend>
        <div class="mb-3">
          <label for="inputUserName" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="inputUserName"
            name="userName"
            onChange={changeValue}
          />
          </div>
        <div class="mb-3">
          <label for="inputPassword" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            name="passWord"
            onChange={changeValue}
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Lưu mật khẩu
          </label>
        </div>
        <button type="submit" class="btn btn-primary" onClick={logIn}>
          Submit
        </button>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginForm;
