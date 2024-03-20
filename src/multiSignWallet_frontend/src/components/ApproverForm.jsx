import React, { useState } from 'react';
import '../styles/ApproverForm.css';
import { useNavigate } from 'react-router-dom';

const ApproverForm = () => {
 const [approverAddress, setApproverAddress] = useState('');
 const [approverCount, setApproverCount] = useState(0);
 const [animateKeys, setAnimateKeys] = useState(false); // New state for animation
 const navigate = useNavigate();

 const handleAddApprover = () => {
    const approvers = JSON.parse(localStorage.getItem('approvers')) || [];
    approvers.push(approverAddress);
    localStorage.setItem('approvers', JSON.stringify(approvers));
    setApproverAddress('');
    setApproverCount(approverCount + 1);
 };

 const handleSubmit = () => {
    setAnimateKeys(true); // Toggle the animation state
    setTimeout(() => {
      navigate('/original-app-page');
    }, 3000);
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
      <div className="locker">
        <img src="/Locker1.png" alt="Locker" className="locker-image" />
      </div>
      <div className="keys">
        {Array.from({ length: approverCount }).map((_, index) => (
          <i key={index} className={`fas fa-key gold-icon ${animateKeys ? 'animate-key' : ''}`}></i>
        ))}
      </div>
    </div>
 );
};

export default ApproverForm;
