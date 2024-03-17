import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Approver from "./components/Approver";
import Transfer from "./components/Transfer";
import TransferApproval from "./components/TransferApproval";
import ApproverForm from './components/ApproverForm'; // Adjust the import path as necessary
import "./index.scss";

function App() {
 return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ApproverForm />} />
        <Route path="/original-app-page" element={
          <div className="App">
            <div className="SideBySideContainer">
              <Approver />
              <Transfer />
            </div>
            <TransferApproval />
          </div>
        } />
      </Routes>
    </Router>
 );
}

export default App;
