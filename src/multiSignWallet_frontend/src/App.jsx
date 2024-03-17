import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Approver from "./components/Approver";
import Transfer from "./components/Transfer";
import TransferApproval from "./components/TransferApproval";
import ApproverForm from './components/ApproverForm'; // Adjust the import path as necessary
import "./index.scss";
import { Provider } from 'react-redux'; // Import Provider
import store from '../src/store/store'; // Import your Redux store

function App() {
 return (
    <Provider store={store}> 
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
    </Provider>
 );
}

export default App;
