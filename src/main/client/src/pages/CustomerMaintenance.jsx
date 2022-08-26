import React from "react";
import { useParams } from "react-router-dom";
import CustomerInputs from "../components/CustomerInputs";
import "./css/shared.css";
import "./css/input-pages.css";

const CustomerMaintenance = () => {
  const { id } = useParams();
  let customerData = JSON.parse(sessionStorage.getItem(`customer-${id}`));
  return (
    <div className="content-container">
      <h2>Update Customer</h2>
      {<CustomerInputs createNew={false} customerData={customerData} />}
    </div>
  );
};

export default CustomerMaintenance;
