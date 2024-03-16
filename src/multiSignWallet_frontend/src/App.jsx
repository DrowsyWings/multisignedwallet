import { useState } from "react";
import Navbar from "./components/Navbar";
import Approver from "./components/Approver";
import Transfer from "./components/Transfer";
import './index.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
       <div className="SideBySideContainer">
      <Approver />
      <Transfer />
       </div>

    </div>
  );
}

export default App;
