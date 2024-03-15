import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="navbar_title">MultiSignature-Wallet</h1>
        <button className="navbar_button">Connect Wallet</button>
      </div>
    </>
  );
};

export default Navbar;
