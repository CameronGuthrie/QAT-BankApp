import React, { useState } from "react";
import Popup from "../components/Popup";
import "../components/css/popup.css";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      MainMenu
      {isOpen && (
        <Popup
          content={
            <>
              <p>Login Popup</p>
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
