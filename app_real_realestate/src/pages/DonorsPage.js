import React, { useState } from 'react';
import { CONTRACT_ABI } from '../config/abi';
const { ethers } = require("ethers");
function DonorsPage() {
    const [shelterName, setShelterName] = useState('');
    const [shelterId, setShelterId] = useState('');
    const [availableUnits, setAvailableUnits] = useState('');
    const [pricePerUnit, setPricePerUnit] = useState('');
    const [isAvailable, setIsAvailable] = useState(true); // Default to true

    const donate = async (event) => {
        event.preventDefault();

        try {
            // Connect to the Ethereum network using MetaMask provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            // Get the signer (account) from MetaMask
            const signer = provider.getSigner();

            // Load the contract ABI and address
            const contractAddress = '0x3a72e2a79468b851c568a5ba3b34067966069d29'; // Replace with your contract address

            // Replace with your contract ABI
            const contract = new ethers.Contract(contractAddress, CONTRACT_ABI, signer);

            // Call the smart contract function to make a donation
            await contract.addShelter(shelterName, availableUnits, pricePerUnit);
            alert('Donation successful!');
        } catch (error) {
            console.error('Error donating:', error);
            alert('Error donating. Please check console for details.');
        }
    };

    return (
        <>
            <form onSubmit={donate} style={{ display: 'flex', flexDirection: 'column', marginTop: '12%', marginLeft: '15%', backgroundColor: '#f0f0f8', width: '70%', borderRadius: '8px', padding: '3%' }} >
                <p style={{ fontSize: '32px', fontWeight: 'bold' }}>Please fill out the form to make a donation</p>
                <label>Shelter Name</label>
                <input value={shelterName} onChange={(e) => setShelterName(e.target.value)} style={{ border: 'solid 1px' }} />
                <label>Shelter ID</label>
                <input value={shelterId} onChange={(e) => setShelterId(e.target.value)} style={{ border: 'solid 1px' }} />
                <label>Available Units</label>
                <input value={availableUnits} onChange={(e) => setAvailableUnits(e.target.value)} style={{ border: 'solid 1px' }} />
                <label>Price per Unit</label>
                <input value={pricePerUnit} onChange={(e) => setPricePerUnit(e.target.value)} style={{ border: 'solid 1px' }} />
                <label>Is Available?</label>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <button style={{ border: 'solid 1px gray', color: 'white', padding: '10px', width: '100px', backgroundColor: 'green', borderRadius: '8px' }} onClick={() => setIsAvailable(true)}>Yes</button>
                    <button style={{ border: 'solid 1px gray', color: 'white', padding: '10px', width: '100px', backgroundColor: 'maroon', borderRadius: '8px' }} onClick={() => setIsAvailable(false)}>No</button>
                </div> <br />
                <button type='submit' style={{ border: 'solid 1px gray', color: 'white', width: '50%', alignSelf: 'center', backgroundColor: 'green', padding: '8px', borderRadius: '8px' }}>Donate</button>
            </form>
        </>
    )
}

export default DonorsPage;
