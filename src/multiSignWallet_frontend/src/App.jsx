import { useState } from "react";
import Navbar from "./components/Navbar";
import Approver from "./components/Approver";
import Transfer from "./components/Transfer";
import TransferApproval from "./components/TransferApproval";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="SideBySideContainer">
        <Approver />
        <Transfer />
      </div>
      <TransferApproval />
    </div>
  );
}

export default App;
