import React from "react";
import { useSelector } from 'react-redux';
import { useState } from "react";
import Transfer from "./Transfer";
import "../styles/TransferApproval.css";

const TransferApproval = () => {
  const address = useSelector(state => state.address);
  const amount = useSelector(state => state.amount);
 
  const getAmount = () => {
     console.log("Amount received in TransferApproval:", amount);
     // Use the amount as needed
  };

  const getAddress = () => {
    //  logic to get the address
  };

  const increaseCounter = () => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
      setCounter(counter + 1);
    };
  };

  const isSent = () => {
    // logic to determine if it is sent
  };

  const renderRows = () => {
    //  logic to render rows dynamically
  };

  return (
    <div className="transfer-approval">
      <h2 className="transfer-approval-heading">Transfer-Approvals</h2>
      <table className="transfer-approval-table">
        
        <thead>
          <tr>
            <th>ID (Serial No.)</th>
            <th>Amount</th>
            <th>To</th>
            <th>Approvals</th>
            <th>Sent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{getAmount()}</td>
            <td>{getAddress()}</td>
            <td>
              <button onClick={increaseCounter}>Approve</button>
            </td>
            <td>{isSent() ? "Yes" : "No"}</td>
          </tr>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default TransferApproval;
