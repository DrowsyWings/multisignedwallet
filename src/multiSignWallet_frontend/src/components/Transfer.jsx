import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { updateAddress, updateAmount } from '../actions';
import "../styles/Transfer.css";

function Transfer() {
  const dispatch = useDispatch();
 const [wei, setWei] = useState(0);
 const [address, setAddress] = useState("");

 const handleWeiChange = (event) => {
  const weiValue = event.target.value;
  const weiNumber = Number(weiValue);
  if (!isNaN(weiNumber) && weiNumber >= 0) {
     setWei(weiNumber);
     console.log('Dispatching updateAmount with:', weiNumber); // Debugging line
     dispatch(updateAmount(weiNumber));
  } else {
     console.error('Invalid amount entered');
  }
 };
 
 const handleAddressChange = (event) => {
  const newAddress = event.target.value;
  setAddress(newAddress);
  console.log('Dispatching updateAddress with:', newAddress); // Debugging line
  dispatch(updateAddress(newAddress));
 };
 
 const handleSendEth = async (event) => {
    event.preventDefault(); // Prevent the default action of the anchor tag
    try {
      const params = {
        to: address,
        amount: wei*100000000,
        memo: '123451231231',
      };
      const result = await window.ic.plug.requestTransfer(params);

      console.log(result);
      alert("ICP tokens sent successfully!");
    } catch (error) {
      console.error("Error sending ICP tokens:", error);
    }
 };

 return (
    <div className="transfer">
      <h1 className="h1">Transfer ICP</h1>
      <label>
        ICP:
        <input  type="number" name="ICPbox" value={wei} placeholder="Enter Your ICP Amount Here" onChange={handleWeiChange} />
      </label>
      <br />
      <label>
        To:
        <input type="text" value={address} placeholder="Enter the Receiver Address here" onChange={handleAddressChange} />
      </label>
      <br />
      <a href="#" className="send-eth-anchor" onClick={handleSendEth}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Send ICP
      </a>
    </div>
 );
}

export default Transfer;
