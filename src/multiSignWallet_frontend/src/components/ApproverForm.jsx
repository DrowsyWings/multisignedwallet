import React, { useState } from 'react';
import '../styles/ApproverForm.css'
import { useNavigate } from 'react-router-dom';

const ApproverForm = () => {
 const [approverAddress, setApproverAddress] = useState('');
 const navigate = useNavigate();

 const handleAddApprover = () => {
    // Store the current approver address in local storage
    const approvers = JSON.parse(localStorage.getItem('approvers')) || [];
    approvers.push(approverAddress);
    localStorage.setItem('approvers', JSON.stringify(approvers));
    // Clear the input box
    setApproverAddress('');
 };

 const handleSubmit = () => {
    navigate('/original-app-page');
 };

 return (
    <div className='AddressesInput'>
      <input
        type="text"
        placeholder="Enter Approver Address"
        value={approverAddress}
        onChange={(e) => setApproverAddress(e.target.value)}
      />
      <button className='add' onClick={handleAddApprover}>Add Approver</button>
      <button className='submit' onClick={handleSubmit}>Submit</button>
    </div>
 );
};

export default ApproverForm;
