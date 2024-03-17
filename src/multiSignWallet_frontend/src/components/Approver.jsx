import React, { useEffect } from "react";
import "../styles/Approver.css";

function Approver() {
 // Use useEffect to clear the local storage on component mount
 useEffect(() => {
    // This will run only once when the component mounts
    localStorage.removeItem('approvers');
 }, []); // Empty dependency array means this effect runs once on mount

 // Retrieve the stored approver addresses from local storage
 const cryptoAddresses = JSON.parse(localStorage.getItem('approvers')) || [];
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
