import { useState } from 'react';
import logo from "../iconz/logo.png";
import wallet from "../iconz/wallet.png";
const { ethers } = require("ethers");

const Header = () => {
    const [provider, setProvider] = useState(null); // State to hold the ethers.js provider

    const connectWallet = async () => {
        try {
            // Check if MetaMask is installed
            if (window.ethereum) {
                // Request account access if needed
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                // Create a new ethers.js provider using MetaMask's provider
                const newProvider = new ethers.providers.Web3Provider(window.ethereum);
                // Set the provider to state
                setProvider(newProvider);
            } else {
                console.error('MetaMask not detected. Please install MetaMask.');
            }
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        }
    };

    return (
        <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '1rem', backgroundColor: '#f0f0f8', display: 'flex', gap: '60%' }}>
            <h1 style={{ width: '400px' }}><img style={{ float: 'left', marginRight: '10px' }} src={logo} alt="logo" />Donation Platform</h1>
            <nav style={{ display: 'flex', justifyContent: 'space-around', width: '800px', padding: '5px' }}>
                <button onClick={connectWallet}><img style={{ float: 'right', marginLeft: '10px' }} src={wallet} alt="logo" />Connect</button>
                <a href="/donors">Donors</a>
                <a href="/victims">Victims</a>
                <a href="/property-owners">Property Owners</a>
            </nav>
        </header>
    );
};

export default Header;
