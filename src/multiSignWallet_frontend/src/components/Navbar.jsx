import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
 const [publicKey, setPublicKey] = useState(null);
 const [error, setError] = useState(null);

 const WalletJodo = async () => {
  console.log("Connect Wallet button clicked");  
  try {
      const publicKey = await window.ic.plug.requestConnect({
        whitelist: ['bkyz2-fmaaa-aaaaa-qaaaq-cai'],
        host: "https://mainnet.dfinity.network",
        onConnectionUpdate: () => {
          console.log(window.ic.plug.sessionManager.sessionData);
        },
        timeout: 50000,
      });
      setPublicKey(publicKey);
    } catch (e) {
      setError(e);
    }
 };

 return (
    <>
      <div className="navbar">
        <h1 className="navbar_title">MultiSignature-Wallet</h1>
        <button className="navbar_button" onClick={WalletJodo}>Connect Wallet</button>
        {publicKey && <p>Connected with public key: {publicKey}</p>}
        {error && <p>Error: {error.message}</p>}
      </div>
    </>
 );
};

export default Navbar;
