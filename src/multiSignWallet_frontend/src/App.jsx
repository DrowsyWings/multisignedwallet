import { useState } from "react";
import Navbar from "./components/Navbar";
import Approver from "./components/Approver";
import Transfer from "./components/Transfer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Approver />
      <Transfer />

    </div>
  );
}

export default App;
