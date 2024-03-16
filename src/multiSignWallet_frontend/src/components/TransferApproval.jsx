import React from "react";
import { useState } from "react";
import "../styles/TransferApproval.css";

const TransferApproval = () => {
  const getAmount = () => {
    //  to get the amount
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
            <th>Address</th>
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
