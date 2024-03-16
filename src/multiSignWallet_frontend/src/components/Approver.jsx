import React from "react";
import "../styles/Approver.css";
function Approver() {
  const cryptoAddresses = ["address1", "address2", "address3"]; // Define the crypto addresses array here

  const addressCount = cryptoAddresses.length; // Get the number of addresses

  return (
    <div className="approver">
      <h2>Approvers' Addresses</h2>

      <ul>
        {cryptoAddresses.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
      <p>Number of Addresses: {addressCount}</p>
    </div>
  );
}

export default Approver;
