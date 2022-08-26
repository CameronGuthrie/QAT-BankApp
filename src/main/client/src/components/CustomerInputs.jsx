import React, { useState, useEffect } from "react";
import Error from "./Error";

const CustomerInputs = ({ createNew, customerData }) => {
  const [DoBError, setDoBError] = useState(<></>);
  const [PcodeError, setPcodeError] = useState(<></>);
  const [PhoneError, setPhoneError] = useState(<></>);
  const [EmailError, setEmailError] = useState(<></>);

  useEffect(() => {
    !createNew && popoulateInputValues();
  }, []);

  const submitChanges = () => {
    console.log("Submit changes");
  };

  const deleteCustomer = () => {
    console.log("Delete customer");
  };

  const createCustomer = () => {
    console.log("Create customer");
  };

  const validateDoB = () => {
    const getAge = (dateString) => {
      var ageInMilliseconds = new Date() - new Date(dateString);
      return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
    };

    const input = document.querySelector("#dob-input").value;

    setDoBError(
      !new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/).test(input) ? (
        <Error message="Invalid Date of Birth format (YYYY/MM/DD)" />
      ) : getAge(input) < 18 ? (
        <Error message="Customer is too young" />
      ) : getAge(input) > 65 ? (
        <Error message="Customer is too old" />
      ) : (
        <></>
      )
    );
  };

  const validatePcode = () => {
    let input = document.querySelector("#pcode-input").value;
    setPcodeError(
      !new RegExp(
        /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/
      ).test(input) ? (
        <Error message="Invalid postcode format" />
      ) : (
        <></>
      )
    );
  };

  const validateEmail = () => {
    let input = document.querySelector("#email-input").value;
    setEmailError(
      !new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$/
      ).test(input) ? (
        <Error message="Invalid email" />
      ) : (
        <></>
      )
    );
  };

  const validatePhone = () => {
    let input = document.querySelector("#phone-input").value;
    setPhoneError(
      !new RegExp(
        /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?(\d{4}|\d{3}))?$/
      ).test(input) ? (
        <Error message="Invalid phone number" />
      ) : (
        <></>
      )
    );
  };

  const popoulateInputValues = () => {
    let titleSelect = document.querySelector("#title-select");
    let snameInput = document.querySelector("#sname-input");
    let fnameInput = document.querySelector("#fname-input");
    let dobInput = document.querySelector("#dob-input");
    let mRadio = document.querySelector("#m-radio");
    let fRadio = document.querySelector("#f-radio");
    let oRadio = document.querySelector("#o-radio");
    let consRadio = document.querySelector("#cons-radio");
    let corpRadio = document.querySelector("#corp-radio");
    let address1Input = document.querySelector("#address-1-input");
    let address2Input = document.querySelector("#address-2-input");
    let cityInput = document.querySelector("#city-input");
    let pcodeInput = document.querySelector("#pcode-input");
    let phoneInput = document.querySelector("#phone-input");
    let emailInput = document.querySelector("#email-input");

    titleSelect.value = customerData.title ? customerData.title.toLowerCase() : "N/A";
    snameInput.value = customerData.surname ? customerData.surname : "N/A";
    fnameInput.value = customerData.firstName ? customerData.firstName : "N/A";
    dobInput.value = customerData.dateOfBirth ? customerData.dateOfBirth : "N/A";
    customerData.gender === "M" && (mRadio.checked = true);
    customerData.gender === "F" && (fRadio.checked = true);
    customerData.gender === "X" && (oRadio.checked = true);
    customerData.customerType === "Consumer" && (consRadio.checked = true);
    customerData.customerType === "Corporate" && (corpRadio.checked = true);
    address1Input.value = customerData.address1 ? customerData.address1 : "N/A";
    address2Input.value = customerData.address2 ? customerData.address2 : "N/A";
    cityInput.value = customerData.cityTown ? customerData.cityTown : "N/A";
    pcodeInput.value = customerData.postcode ? customerData.postcode : "N/A";
    phoneInput.value = customerData.phoneNo ? customerData.phoneNo : "N/A";
    emailInput.value = customerData.email ? customerData.email : "N/A";
  };

  return (
    <div className="main-container">
      {!createNew && (
        <div className="input-container">
          <span>ID:</span>
          <br />
          <label>{customerData.id}</label>
        </div>
      )}
      <div className="input-container">
        <span>Title:</span>
        <br />
        <select defaultValue={"default"} id="title-select">
          <option value="default" disabled />
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
          <option value="ms">Ms</option>
          <option value="dr">Dr</option>
          <option value="lady">Lady</option>
          <option value="prof">Prof</option>
          <option value="sir">Sir</option>
        </select>
      </div>
      <div className="input-container">
        <span>Surname:</span>
        <br />
        <input type="text" id="sname-input" />
      </div>
      <div className="input-container">
        <span>Forename:</span>
        <br />
        <input type="text" id="fname-input" />
      </div>
      <div className="input-container">
        <span>DoB:</span>
        <br />
        <input type="text" onBlur={validateDoB} id="dob-input" />
      </div>
      <div className="input-container">
        <span>Sex:</span>
        <br />
        <div>
          <input type="radio" name="gender" value="m" id="m-radio" className="first-radio" />
          <label htmlFor="m">Male</label>
          <input type="radio" name="gender" value="f" id="f-radio" />
          <label htmlFor="f">Female</label>
          <input type="radio" name="gender" value="o" id="o-radio" />
          <label htmlFor="o">Other</label>
        </div>
      </div>
      <div className="input-container">
        <span>Type:</span>
        <br />
        <div>
          <input type="radio" name="c-type" value="cons" id="cons-radio" className="first-radio" />
          <label htmlFor="c-type">Consumer</label>
          <input type="radio" name="c-type" value="corp" id="corp-radio" />
          <label htmlFor="c-type">Corporate</label>
        </div>
      </div>
      <div className="input-container">
        <span>Address 1:</span>
        <br />
        <input type="text" id="address-1-input" />
      </div>
      <div className="input-container">
        <span>Address 2:</span>
        <br />
        <input type="text" id="address-2-input" />
      </div>
      <div className="input-container">
        <span>City:</span>
        <br />
        <input type="text" id="city-input" />
      </div>
      <div className="input-container">
        <span>Postcode:</span>
        <br />
        <input type="text" id="pcode-input" onBlur={validatePcode} />
      </div>
      <div className="input-container">
        <span>Phone No:</span>
        <br />
        <input type="tel" id="phone-input" onBlur={validatePhone} />
      </div>
      <div className="input-container">
        <span>Email:</span>
        <br />
        <input type="email" id="email-input" onBlur={validateEmail} />
      </div>
      {createNew && (
        <div>
          <div className="input-container">
            <span>Mother's Maiden Name:</span>
            <br />
            <input type="text" id="mmn-input" />
          </div>
          <div className="input-container">
            <span>Place of Birth:</span>
            <br />
            <input type="text" id="pob-input" />
          </div>
        </div>
      )}
      <div className="button-container">
        {createNew ? (
          <button id="create-button" onClick={createCustomer}>
            Create new customer
          </button>
        ) : (
          <>
            <button id="submit-button" onClick={submitChanges}>
              Submit changes
            </button>
            <br />
            <button id="delete-button" onClick={deleteCustomer}>
              Delete customer
            </button>
          </>
        )}
      </div>
      {DoBError}
      {PcodeError}
      {PhoneError}
      {EmailError}
    </div>
  );
};

export default CustomerInputs;
