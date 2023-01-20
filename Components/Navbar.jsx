import { useState, useEffect } from "react";
import Menu from "../style/Navbar.css"
import Logo from "../images/logo.png"
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"

const Nabvar = () => {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWallet();
    addWalletListener();
  });

  //function for connect Wallet
  const connectWallet = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        /* Metamask is Installed */
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
        setWalletAddress(accounts[0]);
        console.log(accounts[0]) //For test
      } catch (err){
        console.error(err.message);
      }
    } else {
      /* Metamask is not installed */
      console.log("Please install Metamask") 
    }
  };

  //function to keep the same account when reloading the page
  const getCurrentWallet = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        
        const accounts = await window.ethereum.request({ method: "eth_accounts"});
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]) //For test
        } else {
          console.log("Connect to Metamask using the Connect Button ")
        }
      } catch (err) {
        console.error(err.message);
      }
    } 
  };

  //Function so that when disconnecting from the wallet, change the state of the button on the page
  const addWalletListener = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* Metamask is not installed */
      setWalletAddress("");
      console.log("Please connect to wallet address")
    };
  };


  let navLinks = document.getElementById("nav-links")
    
    function showMenu (){
      navLinks.style.right = "0";
    }

    function hideMenu (){
      navLinks.style.right = "-200px"
    }


    return (
        <header className="header">
          <nav>
            <a href=""><img src={Logo} alt="" /></a>
            
            <div className="nav-links" id="nav-links">
              <i className="icon" onClick={hideMenu}><AiOutlineClose/></i>
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">CONTACT</a></li>
                <button onClick={connectWallet}>{(walletAddress && walletAddress.length > 0) ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : "Connect Wallet"}</button>
              </ul>
            </div>
            <i className="icon" onClick={showMenu}><BiMenuAltRight/></i>
          </nav>

          <div className="text-box">
            <h1>Welcome to Web3 University</h1>
            <p>Making website is now one of the easiest thing in the world. <br />
            You just need to learn HTML, CSS, JavaScript and you are good to go.</p>
            <a href="" className="hero-btn">Mint your Certificate</a>
          </div>
       </header>
    )
}

export default Nabvar;