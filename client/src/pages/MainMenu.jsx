import React, { useState, useEffect } from "react";
import Popup from "../components/Popup";
import Error from "../components/Error";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [usernameError, setUsernameError] = useState(<></>);
  const [passwordError, setPasswordError] = useState(<></>);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const checkUsername = () => {
    let input = document.querySelector("#username-input");
    setUsernameError(
      input.value.length > 20 ? (
        <Error message="Username is too long" />
      ) : input.value.length == 0 ? (
        <Error message="Enter a username" />
      ) : new RegExp(/^[a-zA-Z0-9]+$/).test(input.value) ? (
        <></>
      ) : (
        <Error message="Invalid characters in username" />
      )
    );
  };

  const checkPassword = () => {
    let input = document.querySelector("#password-input");
    setPasswordError(
      new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/).test(input.value) ? (
        <></>
      ) : (
        <Error message="Password must be minimum eight and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character: " />
      )
    );
  };

  return (
    <div>
      MainMenu
      {isOpen && (
        <Popup
          content={
            <>
              <h2 id="popup-title">Login</h2>
              <input type="text" id="username-input" placeholder="Username..." onBlur={checkUsername} />
              {usernameError}
              <input type="password" id="password-input" placeholder="Password..." onBlur={checkPassword} />
              {passwordError}
            </>
          }
          handleClose={togglePopup}
        />
      )}
      <div id="button-containers">
        <button onClick={togglePopup}>Log In</button>
        <button>Customer Search</button>
        <button>Create New Customer</button>
        <button>Open New Account</button>
        <button>New Transaction</button>
        <button>Transfer</button>
      </div>
    </div>
  );
};

export default MainMenu;
