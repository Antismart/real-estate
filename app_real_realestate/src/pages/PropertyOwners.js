import React, { useState, useEffect } from 'react';
import { CONTRACT_ABI } from '../config/abi';
const { ethers } = require("ethers");

// Define Contract Address
const contractAddress = '0x3a72e2a79468b851c568a5ba3b34067966069d29';

function PropertyOwners() {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [availableUnits, setAvailableUnits] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [isAvailable, setIsAvailable] = useState(true); // Default value is true

  useEffect(() => {
    // Create Provider and Contract Instances
    async function createContract() {
      if (window.ethereum) {
        try {
          await window.ethereum.enable();
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const contract = new ethers.Contract(contractAddress, CONTRACT_ABI, provider);
          // Assign contract instance to a state variable or use it as needed
          // Example: setContract(contract);
        } catch (error) {
          console.error('Error connecting to Ethereum provider:', error);
        }
      } else {
        console.error('MetaMask or similar Ethereum extension not detected.');
      }
    }

    createContract();
  }, []);

  // Withdraw function
  const withdraw = async () => {
    // Call smart contract method to withdraw
    // Make sure contract instance is available here
    // Example: await contract.withdrawFunds();
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Call withdraw function when the form is submitted
          withdraw();
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '12%',
          marginLeft: '15%',
          backgroundColor: '#f0f0f8',
          width: '70%',
          borderRadius: '8px',
          padding: '3%',
        }}
      >
        <p style={{ fontSize: '32px', fontWeight: 'bold' }}>Property Owners</p>
        <label>Name</label>
        <input
          style={{ border: 'solid 1px' }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Available Units</label>
        <input
          style={{ border: 'solid 1px' }}
          value={availableUnits}
          onChange={(e) => setAvailableUnits(e.target.value)}
        />
        <label>Price per Unit</label>
        <input
          style={{ border: 'solid 1px' }}
          value={pricePerUnit}
          onChange={(e) => setPricePerUnit(e.target.value)}
        />
        <label>Is Available?</label>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button
            style={{
              border: 'solid 1px gray',
              color: 'white',
              width: '100px',
              padding: '8px',
              backgroundColor: 'green',
              borderRadius: '8px',
            }}
            onClick={() => setIsAvailable(true)}
          >
            Yes
          </button>{' '}
          <br />
          <button
            style={{
              border: 'solid 1px gray',
              color: 'white',
              width: '100px',
              padding: '8px',
              backgroundColor: 'maroon',
              borderRadius: '8px',
            }}
            onClick={() => setIsAvailable(false)}
          >
            No
          </button>
        </div>{' '}
        <br />
        <button
          type="submit"
          style={{
            border: 'solid 1px gray',
            color: 'white',
            width: '50%',
            alignSelf: 'center',
            backgroundColor: 'green',
            padding: '8px',
            borderRadius: '8px',
          }}
        >
          Withdraw
        </button>
      </form>
    </>
  );
}

export default PropertyOwners;
