import React from "react";
import { useState } from "react";
import "../styles/Transfer.css";

function Transfer() {
  const [wei, setWei] = useState(0);
  const [address, setAddress] = useState("");

  const handleWeiChange = (event) => {
    setWei(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSendEth = () => {
    // Add code to send ETH
  };

  return (
    <div className="transfer">
      <h1 className="h1">Transfer Eth</h1>
      <label>
        Wei:
        <input type="number" value={wei} placeholder="Enter Your Wei Amount Here" onChange={handleWeiChange} />
      </label>
      <br />
      <label>
        To:
        <input type="text" value={address} placeholder="Enter the Reciever Adress here" onChange={handleAddressChange} />
      </label>
      <br />
      <button className="send-eth-button" onClick={handleSendEth}>
        Send Eth
      </button>
    </div>
  );
}

export default Transfer;
