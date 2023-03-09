import React from "react";

const LoginForm = () => {
  function changeLoginStatus () {
      changeLoginStatus(true);
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
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Lưu mật khẩu
          </label>
        </div>
        <button type="submit" class="btn btn-primary" onClick={changeLoginStatus}>
          Submit
        </button>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginForm;
