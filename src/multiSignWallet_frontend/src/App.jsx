// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Approver from "./components/Approver";
import Transfer from "./components/Transfer";
import TransferApproval from "./components/TransferApproval";
import ApproverForm from './components/ApproverForm';
import TransferContext from './TransferContext'; // Import the context
import "./index.scss";

function App() {
 const [transferData, setTransferData] = useState({ wei: 0, address: "" });

 return (
    <Router>
      <Navbar />
      <TransferContext.Provider value={{ transferData, setTransferData }}>
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
      </TransferContext.Provider>
    </Router>
 );
}

export default App;
